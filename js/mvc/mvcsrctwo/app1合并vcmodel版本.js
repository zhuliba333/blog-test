
import $ from 'jquery'
import Model from "./base/Model"
import View from "./base/View"
const eventBus = $(window)
 console.log(eventBus.on)
 console.log(eventBus.trigger)
const m = new Model({
   data:{
      num : parseInt(localStorage.getItem("n")||100)
   },
   update(data){
      Object.assign(m.data,data);
      eventBus.trigger('fresh');//事件的字符串不能用空格
   }
})


const c = {//发现vc不可分开所以合并vc
   container:null,
   v:null,
   initV(){
      c.v = new View({
         el:c.container,
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
         render(){
            localStorage.setItem("n",m.data.num);
            if(c.v.el.children().length > 0){
            
               const newHtml =  $(c.v.html.replace('{{n}}',m.data.num));//会导致按钮点击失效
                c.v.el.replaceWith(newHtml)
               c.v.el  = newHtml;
            }else{
               console.log('dd'+m.data.num)
               debugger
               c.v.el = $(c.v.html.replace('{{n}}',m.data.num)).appendTo($(c.container))
            }
         }
      })
      c.v.render()

   },
   init(container='#app1'){
      c.container = $(container);
      c.initV();
     c.bindEvents();
     eventBus.on('fresh',()=>{
        console.log('接收到消息了')
      c.v.render();
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
         c.container.on('click',i,()=>{
            c.changeData(c.events[i]);
         })
      }
    
   }
}
 

 
export default c;
