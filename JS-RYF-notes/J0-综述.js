/*
JavaScript 的核心语法部分相当精简，只包括两个部分：基本的语法构造（比如操作符、控制结构、语句）
和标准库（就是一系列具有各种功能的对象比如Array、Date、Math等）。
除此之外，各种宿主环境还会提供额外的 API（即只能在该环境使用的接口），
以便 JavaScript 调用。

以浏览器为例，它提供的额外 API 可以分成三大类:
浏览器控制类：操作浏览器
DOM 类：操作网页的各种元素
Web 类：实现互联网的各种功能

如果宿主环境是服务器Node环境，
则会提供各种操作系统的 API:
比如文件操作 API、网络通信 API等等。
*/