window.dom = {
    find(node){
       return document.querySelectorAll(node);
    },
    style(node,name,value){
        if(arguments.length === 3){
            node.style[name] = value
        }else if(arguments.length === 2){
            if(typeof name === 'string'){
                return node.style[name]
            }else if(name instanceof Object){
                for(let key in name){
                    node.style[key] = name[key]
                }
            }
        }
       
    },
    each(nodeList,fn){ 
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
   },
}

const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素