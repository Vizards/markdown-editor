## 隐藏功能介绍

+ 文件拖放编辑功能：支持直接拖入文本文件进入编辑区域进行编辑
+ 夜间模式：编辑区域黑底白字，可全屏编辑
+ 多格式保存：支持保存为markdown/html/pdf或直接打印

## markdown 语法

# 一级标题
## 二级标题
### 三级标题

*斜体* 
> 注：为了避免与LaTeX冲突，请不要使用 _斜体_ 来表示斜体

**粗体**
__粗体__



* 列表1
* 列表2
* 列表3


1. 有序列表1
1. 有序列表2
1. 有序列表3

> 引用

>> 嵌套第二层

点 [这个链接](https://github.com/Vizards/markdown-editor “markdown editor”)  去github查看源代码。

插入图片

![markdown](src/md.jpg)

插入代码

```
!function(){
	var fullscreen = document.getElementById('edit-full-screen');
	fullscreen.addEventListener('click',function(){
		document.body.classList.remove('preview-mode');
		document.body.classList.add('edit-full-screen-mode');
	},false);
}();

```

插入LaTeX公式

When $a \ne 0$, there are two solutions to $$(ax^2 + bx + c = 0\)$$ and they are
$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

