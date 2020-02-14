#vue的两个版本
参考[官方文档](https://cn.vuejs.org/v2/guide/installation.html)

vue包含两个版本，分别是完整版和运行版
以UMD版本为例子：
#####完整版：
通过cdn引入，名称是vue.js/vue.min.js。
特点：
包含编译器和运行时的版本，代码体积大。
可以直接从html得到视图:
```
new Vue({
   el:'#app',
    data:{
        n:1
    },
})

//html代码
<div>
<div id="app">n是{{n}}</div>
</div>
```
直接支持template：
template是一个模版字符串，模版将会替代挂载元素的内容。
```
new Vue({
  template: '<div>{{ n }}</div>',
   el:'#app',
    data:{
        n:1
    },
})

```
#####运行版：
通过cdn引入，名称是vue.runtime.js/vue.runtime.min.js。
特点：
不包含编译器和运行时的版本，代码体积大。不支持从html直接得到视图，不支持template，需要用render方法。
**Vue 选项中的 render 函数若存在，则 Vue 构造函数不会从 template 选项或通过 el 选项指定的挂载元素中提取出的 HTML 模板编译渲染函数。**
render方法接收一个回调函数，其实就是createElement函数。

示例：
```
new Vue({
   el:'#app',
    data:{
        n:1
    },
    render (createElement) {
        return createElement('div', this.n)
    }
})

```

对比表格：
两种vue的区别：完整版和运行时版

|               | vue完整版                         | vue非完整版                         | 其他                            |
| :---          | :---:                            | ---:                               |---:                            |
| 特点           | 有compiler                       | 无compiler                         |compiler占了40%的体积             |
| 视图           | 写在html里或者是<br/>template选项中 | 写在render函数里<br/>用h来创建标签    |h是已经被创建好<br/>传给render的    |
| cdn引入        | vue.js                           | vue.runtime.js                    |                                 |
| webpack引入    |需要配置alias                       |默认使用此版                        |作者配置                           |
| @vue/cli引入   | 需要额外配置                       |默认使用此版                         |作者配置                           |




### 使用codesandbox写vue代码

官方地址：codesandbox.io，进入后不要注册。

点击create sandbox-->弹出模版选择项-->选择vue模版即可