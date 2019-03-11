/*
1. 创建图片展示区和文字介绍 placeHolder

  createlement

2. 绑定事件到标签 onClick
3. 点击替换图片 showPic
*/

//自定义函数，功能为在元素后插入新元素
function insertAfter(newElement, targetElement) {   //参数均为元素节点名称
    //insert的使用要有parent
    let parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement)
    }else{
        let xElement = targetElement.nextSibling;
        parent.insertBefore(newElement,xElement)
    }
}

//创建图片展示区和文字说明区并插入DOM文档中
function palceHolder() {

    let picHolder = document.createElement('img');
        picHolder.setAttribute('id','demo');
        picHolder.setAttribute('src','./images/placeholder.jpg');
        
    let description = document.createElement('p');
        description.setAttribute('id','description');

    let textContent = document.createTextNode('Choose an image');
        description.appendChild(textContent);
    
    let gallery = document.getElementById('gallery');

    insertAfter(picHolder,gallery);
    insertAfter(description,picHolder);
}

//绑定点击事件
function galleryEvent() {

    //要进行二次get
    let gallery = document.getElementById('gallery');
    let liElements = gallery.getElementsByTagName('a');

    for(let i=0; i<liElements.length;i++){
        liElements[i].onclick = function (){
            showPic(this);  //this 当前的元素标签
            return false;
        }
    }
}

//替换函数
function showPic(whichPic) {

    let src = whichPic.getAttribute('href');
    let picHolder = document.getElementById('demo');
        picHolder.setAttribute('src',src);

    let text = whichPic.getAttribute('title');
    let description = document.getElementById('description');
        description.firstChild.nodeValue = text;


}

window.onload = function () {
    palceHolder();
    galleryEvent();
}
































