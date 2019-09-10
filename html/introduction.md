# HTML入门笔记1
## 简介
HTML是Tim Berners-Lee发明的，全称Hyper Text Markup Language,是超文本标记语言。
## HTML 起手应该写什么
代码如下:
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>

</body>

</html>
```
起手式从上到下，依次是
+ 文档类型
+ html标签
+ 字符编码
+ 禁用缩放用于兼容手机
+ 告诉ie使用最新内核
+ 标题
***
## 常用的表章节的标签有哪些
+ h1-h6:标题标签，从1-6字号依次变小
+ section:章节标签,表示一个包含在HTML文档中的独立部分，它没有更具体的语义元素来表示，一般来说会有包含一个标题。
+ article:文章标签，表示文档、页面、应用或网站中的独立结构,通常包含h1-h6
+ main:呈现了文档的 body 或应用的主体部分,在文档中，main元素的内容应当是独一无二的。任何同时存在于任意一系列文档中的相同、重复内容，比如侧边栏、导航栏链接、版权信息、网站 Logo，搜索框（除非搜索框为文档的主要功能），都不应当被包含在其内。
+ aside:表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。其通常表现为侧边栏或者标注框
## 全局属性有哪些
+ class:类名，标识dom节点
+ contenteditable：使得元素可以编辑
+ hidden：隐藏节点
+ id:id,应当是全局唯一，用来标识dom节点
+ style：用来写节点样式
+ taindex：控制tab键的顺序
  1. tabindex=1,第一个点击tab键，该元素被选中
  2. tabindex=0.最后一个点击tab键，该元素才会被选中。
  3. tabindex=-1 永远不会被选中

## 常用的内容标签有哪些
+ ol+li:有序列表
+ ul+li:无序列表
+ dl+dt+dd:描述列表
+ pre：如果想保留空格，回车，tab，就用pre标签包住就好了
+ code：包含代码的标签。code里面的标签都是等宽的。一般都用pre包含code，这样代码就可以换行了
+ hr：水平线
+ br:换行
+ a:超链接
+ em：默认斜体，标记出需要用户着重阅读的内容
+ strong：表示文本十分重要，一般用粗体显示。
+ quote：表示引用，默认内联
+ blockquote：块引用，默认块
