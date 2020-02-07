import $ from 'jquery'
import Model from "./base/Model"
const eventBus = $({})
 console.log(eventBus.on)
 console.log(eventBus.trigger)
const m = new Model({
   data:{
      index : parseInt(localStorage.getItem("localkey")||1)
   },
   update(data){
      Object.assign(m.data,data);
      localStorage.setItem("localkey",m.data.index)
      eventBus.trigger('changetab');//事件的字符串不能用空格
   },
})



const View = {
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
   render(){
      if(View.el.children().length!=0){
         View.el.empty();
      }
      console.log(m.data.index)
      $(View.html(m.data.index)).appendTo($(View.el))
   },
   init(container='#app2'){
      View.el = $(container);
      View.render();
      View.bindEvents();
      eventBus.on('changetab',()=>{
        console.log('接收到消息了')
        View.render();
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
      for(let i in View.events){//表驱动编程，自动绑定事件
         View.el.on('click',i,(e)=>{
            View[(View.events[i])](e);
         })
      }
   }
}
 

 
export default View;