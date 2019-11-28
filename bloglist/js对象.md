
# 声明对象的两种语法
```
let obj={
	name:'jack',
	age:18,
	sex:'男'
}
let obj2 = new Object({
	name:'jacky',
	age:19,
	sex:'女'
})
```

# 如何删除对象的属性
```
let obj={
	name:'jack',
	age:18,
	sex:'男'
}
delete obj.name
或者是delete obj['name']
```
# 如何查看对象的属性
1. 查看自身所有的属性
`Object.keys(obj)`
2. 查看自身&共有属性
`console.dir(obj)`

# 如何修改或增加对象的属性
增加和修改都是用obj.xxx==xxx和Object.assign(obj,{xxx:xxx})实现，相同的键值就修改，不同的则增加，具体如下
```
let obj={
	name:'jack',
	age:18,
	sex:'男'
}
```
1. 修改属性
方式一:obj.name='lucy';
方式二:obj['name'] = 'lucy'
方式三:Object.assign(obj,{'name:'LiLi'})
1. 增加属性
 obj.mobile='1353389xxxx';
 Object.assign(obj,{'name:'LiLi',''tel':'123456987',add:'中国'})
tips:*Object.assign会把后面对象的键值对依次加到obj对象中，相同键值的会被后面的值所覆盖*

3. 改共有属性
4. obj.__proto__['toString'] = 'xxxx'
  Object.prototype['toString'] = 'xxxx'
5. 改原型
```
let common ={
	'text':1
}
obj.__proto__ = common
let obj2 = Object.Create(common)
```
注意:
*所有修改__proto__ 的都是强烈不推荐*
*Object.assign会把后面对象的键值对依次加到obj对象中，相同键值的会被后面的值所覆盖*

# 'name' in obj和obj.hasOwnProperty('name') 的区别
```
let obj = {'name'：'tt'};
'name' in obj //结果为true
obj.hasOwnProperty('name') //结果为true
'toString' in obj //结果为true
obj.hasOwnProperty('toString') //结果为false

hasOwnProperty可以检测一个属性是存在于实例中，还是原型中，返回布尔值，只有当属性存在于实例中的时候才会返回true。
in 能判断对象是否存在某个属性，不论这个属性是存在于实例中还是原型中。只要有就会返回true
```