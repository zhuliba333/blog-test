import $ from 'jquery'
class eventBus{
    constructor(){
        this._eventBus=$(window)
    }
    on(eventName,fn){
        console.log('注册on事件'+eventName);
        return this._eventBus.on(eventName,fn)

    }
    trigger(eventName,data){
        console.log('注册trigger事件'+eventName);
        return this._eventBus.trigger(eventName,data)
    }
    off(eventName,fn){
        console.log('注册off事件'+eventName);
        return this._eventBus.off(eventName,fn)

    }
}
export default eventBus;