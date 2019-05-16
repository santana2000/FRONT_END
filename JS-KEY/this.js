/*

  原型          this           promise

1. 构造函数------实例对象------原型对象
   prototype--constructor--内部指针

//JavaScript语言的对象体系，不是基于“类”的，而是基于构造函数（constructor）和原型链（prototype）

//使用构造函数（constructor）作为对象的模板。所谓”构造函数”，就是专门用来生成实例对象的函数。

//与普通函数区别，构造函数名字的第一个字母通常大写，有this关键字和new命令
function Fubar(foo, bar) {
    if (!(this instanceof Fubar)) {
        return new Fubar(foo, bar);
    }

    this._foo = foo;
    this._bar = bar;
}

Fubar(1, 2)._foo 				// 1
(new Fubar(1, 2))._foo 			// 1

//如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。

//不论在什么场合，this总是返回一个对象

//对象方法调用时就要执行，否则运行环境就变成全局环境而不是当前对象环境

//判断this所在的方法是否在对象的第一层，如果不是，也不会继承。从第二层开始就指向的是全局对象了，相当于在全局环境中直接调用这个第二层的函数

//由于this的指向是不确定的，所以切勿在函数中包含多层的this。

//数组的map和foreach方法，允许提供一个函数作为参数，该函数内部不应该使用this

//apply方法（或者call方法）不仅绑定函数执行时所在的对象，还会立即执行函数

//bind每运行一次就返回一个新函数

**多层this用that改写，回调函数用bind绑定

var o = {
    f1: function () {
        console.log(this);
        var f2 = function () {
            console.log(this);
        }();
    }
}

o.f1()
--------------------------------------------
var counter = {
    count: 0,
    inc: function () {
        'use strict';
        this.count++;
    }
};

function callIt(callback) {
    callback();
}

callIt(counter.inc.bind(counter));

//click事件绑定bind方法生成的一个匿名函数。这样会导致无法取消绑定
element.addEventListener('click', o.m.bind(o));


//Promise最大的好处是在异步执行的流程中，把执行代码和处理结果的代码清晰地分离了


异步操作，而且执行完后需要有相应的回调函数

//原型对象                         /实例对象
Animal.prototype                  let cat = new Animal()
定义所有实例对象共享的属性和方法

//对于构造函数来说，生成实例的时候，该属性会自动成为实例对象的原型(指向一个对象)。

//实例对象本身没有某个属性或方法的时候，它会到原型对象去寻找该属性或方法，如果对象自身和它的原型，都定义了一个同名属性，那么优先读取对象自身的属性，这叫做“覆盖”（overriding）。

//对象到原型，再到原型对象的原型。所有对象都有valueOf和toString方法，因为这是从Object.prototype继承的

//prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数

//修改原型对象中的属性，但不要动constructor属性

//instanceof运算符返回一个布尔值，表示对象是否为某个构造函数的实例。会检查整个原型链。instanceof运算符判断值类型时只能用于对象，不适用原始类型的值


*/
