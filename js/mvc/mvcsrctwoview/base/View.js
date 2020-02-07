
import EventBus from "./eventBus";
class View extends EventBus{
    constructor(options){
        super();
        //{el,html,render,data,eventBus,events}
        Object.assign(this,options)
        console.log(this.options)
        this.render(this.data);
        this.bindEvents();
        console.log('view');
        console.log(this);
        this.on('update',()=>{
          console.log('接收到消息了')
           this.render(this.data);
       })


    }
    bindEvents(){
        for(let i in this.events){//表驱动编程，自动绑定事件
            this.el.on('click',i,()=>{
               this.changeData(this.events[i]);
            })
         }
    }
}


export default View;

