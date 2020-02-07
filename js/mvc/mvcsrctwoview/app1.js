
import $ from 'jquery'
import Model from "./base/Model"
import View from "./base/View";
import Vue from 'vue/dist/vue.js';//这样引入避免警告
console.log(Vue)
 let view = null;
 //Vue认为m不重要，c也不重要


const init = (el)=>{
   new Vue({
      el:el,
      data:{num : parseInt(localStorage.getItem("n")||100)},
      watch:{
         n:function(){
            localStorage.setItem("n",this.m);
         }
      },
      methods:{
         changeData(str){
            switch(str){
               case 'add1':
                 this.num+=1;
                  break;
               case 'minus1':
                  this.num-=1;
                  break;
               case 'addmul2':
                  this.num= this.num*2;
                  break;
               case 'divide':
                  this.num = this.num/2;
                  break;
               default:
                  this.num =this.num;
            }
         },
      },
      template:`<section>
      <div class="outPut"><span id="number">{{num}}</span></div>
      <div class="actions">
          <button id="add1" @click="changeData('add1')">+1</button>
          <button id="minus1" @click="changeData('minus1')">-1</button>
          <button id="mul2" @click="changeData('addmul2')">*2</button>
          <button id="divide" @click="changeData('divide')">/2</button>
      </div>
      </section>`,
   })
   return;
   view = new View({
      el:$(el),
      data:m.data,
      html:
      `
      <div>
      <div class="outPut"><span id="number">{{n}}</span></div>
      <div class="actions">
          <button id="add1" @click="">+1</button n>
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
              this.num+=1;
               break;
            case 'minus1':
               this.num-=1;
               break;
            case 'addmul2':
               this.num= this.num*2;
               break;
            case 'divide':
               this.num = this.num/2;
               break;
            default:
               this.num =this.num;
         }
      },
     
   })
}
export default init;
