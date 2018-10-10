// 1.创建原型继承的方法

// 2.实例对象-构造函数-原型对象

function Orange() {
    this.color = 'yellow';
    this.eat = function () {
        console.log('can be eat');
    }
}

Orange.prototype.position = 'market';

var cumtOrange = new Orange();
cumtOrange.eat();
console.log(cumtOrange.position + ':' + cumtOrange.color);  //yellow
console.log(Orange.prototype.constructor);  // Orange();
console.log(Orange.prototype);  // Orange();
console.log(cumtOrange.__proto__);  // 内部指针;
console.log('==================================================');  // 内部指针;

// 3.原型继承

function Animal() {   //父类
    this.foot = 4;
    this.voice = 'wang';
    this.callme =function (name) {
        console.log("it's name is :" + name);
    }
}

Animal.prototype.run = function () {
    console.log('it can run on the ground');
}

function Dog() {     //子类
    this.voice = 'wangwang';
}

Dog.prototype = new Animal();

var jingmao = new Dog();
console.log(jingmao.foot + jingmao.voice);
jingmao.run();
jingmao.callme('huahua');
console.log('==================================================');  // 内部指针;


// 4.调用父类构造函数实现继承

function Person() {
    this.head = 1;
    this.emotion = ['happy','sad','angry']
}

function Children() {
    this.hand = 2;
}

Children.prototype = new Person();

var xiaoming = new Children();
console.log(xiaoming.head);
console.log(xiaoming.emotion);
xiaoming.emotion.pop();

var xiaowang = new Children();
console.log(xiaowang.head);
console.log(xiaowang.emotion);

// 5.二者结合使用
