import $ from 'jquery'

const eventBus = $({})
 console.log(eventBus.on)
 console.log(eventBus.trigger)
 const m = {
   data:{
      index : parseInt(localStorage.getItem("localkey")||1)
   },
   update(data){
      Object.assign(m.data,data);
      localStorage.setItem("localkey",m.data.index)
      eventBus.trigger('changetab');//事件的字符串不能用空格
   },
}

const v ={
   el:null,
   html:(index)=>{
      return `<div><ol class="tab-bar">
      <li class="${(index==0?'selected':'')}" data-index="0">1</li>
      <li class="${(index==1?'selected':'')}" data-index="1">2</li>
   </ol>
   <ol class="tab-content">
      <li class="${(index==0?'active':'')}" data-index="0">内容1</li>
      <li class="${(index==1?'active':'')}" data-index="1">内容2</li>
   </ol>
   </div>`
   },
   init(container='#app2'){
      v.el = $(container);
      v.render();
   },
   render(){
  
      if(v.el.children().length!=0){
         v.el.empty();
      }
      console.log(m.data.index)
      $(v.html(m.data.index)).appendTo($(v.el))
   }
}


const c = {
   init(container){
      v.init(container);
      c.bindEvents();
      eventBus.on('changetab',()=>{
        console.log('接收到消息了')
        v.render();
     })
   },
   events:{
      '.tab-bar li':'changeData'
   },
   changeData(e){
      console.log(e.currentTarget)//如果li里面有span，点击span，console.log出来的是LI
      m.update({index:e.currentTarget.dataset.index})
   },
   
   bindEvents(){
      for(let i in c.events){//表驱动编程，自动绑定事件
         v.el.on('click',i,(e)=>{
            c[(c.events[i])](e);
         })
      }
   }
}
 

 
export default c;