
import $ from 'jquery'
import Model from "./base/Model"
import View from "./base/View"
const eventBus = $({})
 console.log(eventBus.on)
 console.log(eventBus.trigger);
 //重构mvc编程model+view
const m = new Model({
   data:{
      num : parseInt(localStorage.getItem("n")||100)
   },
   update(data){
      Object.assign(m.data,data);
      eventBus.trigger('fresh');//事件的字符串不能用空格
   }
})

// const v = new View({
//    el:null
   
// })



//其他都是c
const view = {
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
      console.dir(m);
      view.el = $(container);
      view.render();
     view.bindEvents();
     eventBus.on('fresh',()=>{
        console.log('接收到消息了')
         view.render();
     })
   },
   render(){
      localStorage.setItem("n",m.data.num);
      if(view.el.children().length>0){
         view.el.empty();
      }
      $(view.html.replace('{{n}}',m.data.num)).appendTo($(view.el))
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
      for(let i in view.events){//表驱动编程，自动绑定事件
         view.el.on('click',i,()=>{
            view.changeData(view.events[i]);
         })
      }
    
   }
}
 

 
export default view;
