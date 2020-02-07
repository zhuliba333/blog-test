import EventBus from "./eventBus";
class Model extends EventBus{
    constructor(options={}){
        super();//调用父类的constructor
        ['data','create','delete','update','get'].forEach(el=>{
            if(el in options){
                this[el] = options[el];
            }
            
        })
    }
    create(){ //四个函数都是都是在原型链原型里面,第二级
        console.log('create')
    }
    delete(){
        console.log('delete')
    }
    update(){
        console.log('update')
    }
    get(){
        console.log('get')
    }

}


export default Model;