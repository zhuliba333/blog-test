# MVC总结

MVC（模型－视图－控制器）是一种设计模式

## M-模型(Model)
数据模型，负责操作所有已获取到的数据。View和Model之间的观察者模式，View观察Model，当Model改变时，会驱动View层变化。

## V-视图(View)  
根据Model里的数据，来展示所有ui界面，只关心怎么展示ui
## C-控制器(Controller) 
用来接受和处理用户的请求。对Model的数据进行相应的操作，数据改变驱动View层UI界面的更新

伪代码
```

const m={
    data:0;//点击的次数，初始化是0,
    update():{
         v.render();
    }
    
}
const v={
    el:'#app',
    render(){
        $(v.el).html('<p>点击了'+m.data+'次/p>')
    }
}

const c = {
    init(){
        v.render();
        $('#counter').on('click',()=>{
            ++m.data;
            m.update();
        })
    }
}
c.init();
```


# EventBus
EventBus是负责所有对象通信的消息类或对象，包含发送消息，接收消息，注销消息

代码：
```
import $ from 'jquery'
class eventBus{
    constructor(){
        this._eventBus=$(window)
    }
    on(eventName,fn){
        return this._eventBus.on(eventName,fn)

    }
    trigger(eventName,data){
        return this._eventBus.trigger(eventName,data)
    }
    off(eventName,fn){
        return this._eventBus.off(eventName,fn)

    }
}
export default eventBus;

```

# 表驱动编程

表驱动方法是一种使你可以在表中查找信息，而不必用很多的逻辑语句来把它们找出来的方法。比如：当你的代码中有大批类似但是不重复的代码时，可以提取重要数据做成哈希表，来简化你的代码。

# 模块化
做一个复杂的功能时，需要考虑模块化。模块化就是把一个小功能单独封装好写在一个文件里，提供相关重要的api。
里面的内容应该只和该小功能有关，不要耦合其他的代码。降低耦合度，减少重复代码，提高代码复用。

