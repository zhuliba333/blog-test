# HTML 常用标签

## a 标签的用法

示例如下:

```
<a href='xxxx'></a>
```

属性值:

- href，超级引用链接，要访问的链接。
  1. 可以是网址:'https://xxxx','http://xxxx','//xxxxx'
  2. 可以是文件路径，相对或者是绝对路径'../../xx.html'
  3. 可以是伪协议：javaScript:alert(1);直接用于执行 js 用的,弹出 1；如果是 javascript:;点击无反应。如果为空，点击页面会自动刷新，写#，点击会回到顶部
- target，:在哪里打开网页
  1. `_blank`:空白页
  2. `_top`:最外面一层打开
  3. `_self`:默认值，在当前页面打开
  4. `_parent`:当前节点所在页面的父窗口打开
- download，下载页面，不是所有的浏览器都支持，尤其是手机浏览器可能不支持。

---

## img 标签的用法

代码如下:

```
<img src-'xxxx' alt='图片获取失败后展示的文字'/>
```

相关属性：

- alt：图片获取失败后展示的文字
- height：设置图片高度。只设置图片高度，宽度自适应
- width：设置图片宽度。只设置图片宽度，高度自适应
- src：请求的图片链接或者是路径

相关事件：

- onload：监听图片加载成功响应
- onerror：监听图片加载失败响应。

---

## table 标签的用法

基本结构:

```
<table>
    <thead>
        <tr>
            <th></th>
            <th>小红</th>
            <th>小明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>语文</th>
            <td>99</td>
            <td>98</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th>总分</th>
            <td>99</td>
            <td>98</td>
        </tr>
    </tfoot>
</table>
```

tr:行
th：表头
td：单元格

相关样式：

- table-layout
  1. :auto:大多数浏览器采用自动表格布局算法对表格布局。表格及单元格的宽度取决于其包含的内容。
  2. fixed:表格和列的宽度通过表格的宽度来设置，某一列的宽度仅由该列首行的单元格决定。在当前列中，该单元格所在行之后的行并不会影响整个列宽。
- border-collapse：collapse 合并表格间隙
- border-spacing：单元格的间隙。

---

## 其他感想

暂无
