//第六天
//----面向对象编程

/*
  js没有类的概念，所有对象都是实例
  继承只是把某个对象的<原型>指向另一个对象
  创建原型继承的方法
*/
var JUGG={
    name:'zhuhuang',
    gpm:1000,
    get$:function () {
        console.log(this.name+"又开始刷了")
        
    }
};
function createJUGG(name) {
    var a=Object.create(JUGG);  //传入一个原型对象并创建一个基于该原型的新对象
    a.name=name;     //初始化新对象
    return a;
}
var s=createJUGG('atong');
    s.get$();


// 原型链   arr ----> Array.prototype （原型对象） ----> Object.prototype ----> null

    //通过构造函数创建对象
function Dotahero(name) {
    this.name=name;                  //这里的this是一个对象，而且该函数默认返回this,
    this.getMoney = function () {
        console.log(name+"有BKB再打架")
    }

}

var hero = new Dotahero(PA);
hero.getMoney();
console.log(hero);





/* window --- 全局作用域 &浏览器窗口
      |---innerHeight
      |---innerWidth
   screen --- 屏幕大小 (固定)

   navigator---浏览器的信息
   location ---获取URL信息
*/