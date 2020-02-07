import $ from 'jquery'
const eventBus = $({})
 console.log(eventBus.on)
 console.log(eventBus.trigger)
 const m = {
   data:{
      num : parseInt(localStorage.getItem("n")||100)
   },
   create(){
      
   },
   update(data){
      Object.assign(m.data,data);
      eventBus.trigger('fresh');//事件的字符串不能用空格
   },
   get(){

   }
}

const v ={
   el:null,
   html:
   `
   <div>
   <div class="outPut"><span id="number">{{n}}</span></div>
   <div class="actions">
       <button id="add1">+1</button n>
       <button id="minus1">-1</button>
       <button id="mul2">*2</button>
       <button id="divide">/2</button>
   </div>
   </div>`,
   init(container='#app1'){
      v.container = $(container);
      v.render();
   },
   render(){
      localStorage.setItem("n",m.data.num);
      if(v.el){
      
         const newHtml =  $(v.html.replace('{{n}}',m.data.num));//会导致按钮点击失效
          v.el.replaceWith(newHtml)
         v.el  = newHtml;
      }else{
         console.log('dd'+m.data.num)
         v.el = $(v.html.replace('{{n}}',m.data.num)).appendTo($(v.container))
      }
   }
}


const c = {
   init(container){
      v.init(container);
     c.bindEvents();
     eventBus.on('fresh',()=>{
        console.log('接收到消息了')
      v.render();
     })
   },
   events:{
      '#add1':'add1',
      '#minus1':'minus1',
      '#mul2':'addmul21',
      '#divide':'divide',
   },
   changeData(str){
      switch(str){
         case 'add1':
            m.data.num = m.data.num+1;
            break;
         case 'minus1':
            m.data.num = m.data.num-1;
            break;
         case 'addmul21':
            m.data.num = m.data.num*2;
            break;
         case 'divide':
            m.data.num = m.data.num/2;
            break;
         default:
            m.data.num =m.data.num;
      }
      console.log(m.data.num)
      m.update({num:m.data.num})
   },
   bindEvents(){
      for(let i in c.events){//表驱动编程，自动绑定事件
         v.container.on('click',i,()=>{
            c.changeData(c.events[i]);
         })
      }
    
   }
}
 

 
export default c;
