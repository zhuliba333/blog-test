

# .sync修饰符

2.3.0+新增

当用事件监听方式使父子组件通信，代码如下
```
//父组件监听事件并响应
<text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
></text-document>
 
 //子组件可以使用this.$emit('update:title', newTitle)来触发标题的更新
```

我们可以用.sync修饰符提供一个所缩写：
```
<text-document v-bind:title.sync="doc.title"></text-document>
```
注意:
**带有 .sync 修饰符的 v-bind 不能和表达式一起使用 (例如 v-bind:title.sync=”doc.title + ‘!’” 是无效的)。取而代之的是，你只能提供你想要绑定的属性名，类似 v-model。**


所以.sync就是一个语法糖，
`<text-document v-bind:title.sync="doc.title"></text-document>`相当于
`<text-document v-bind:title="doc.title"    v-on:update:title="doc.title = $event"></text-document>`


