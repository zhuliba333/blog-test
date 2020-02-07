
import $ from 'jquery'
import Model from "./base/Model"
import View from "./base/View";
 let view = null;
 //重构mvc编程model+view
const m = new Model({
   data:{
      num : parseInt(localStorage.getItem("n")||100)
   },
   update(data){
      Object.assign(m.data,data);
      console.log('aop');
      console.log(this);
      this.trigger('update');//事件的字符串不能用空格
   }
})



//其他都是c


const init = (el)=>{
   view = new View({
      el:$(el),
      data:m.data,
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
         if(this.el.children().length>0){
            this.el.empty();
         }
         $(this.html.replace('{{n}}',m.data.num)).appendTo($(this.el))
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
     
   })
}
export default init;
