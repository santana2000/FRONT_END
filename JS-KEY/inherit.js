// 1.创建原型继承的方法

// 2.实例对象-构造函数-原型对象

// function Orange() {
//     this.color = 'yellow';
//     this.eat = function () {
//         console.log('can be eat');
//     }
// }

// Orange.prototype.position = 'market';

// var cumtOrange = new Orange();
// cumtOrange.eat();
// console.log(cumtOrange.position + ':' + cumtOrange.color);  //yellow
// console.log(Orange.prototype.constructor);  // Orange();
// console.log(Orange.prototype);  // Orange();
// console.log(cumtOrange.__proto__);  // 内部指针;
// console.log('==================================================');  // 内部指针;

// // 3.原型继承

// function Animal() {   //父类
//     this.foot = 4;
//     this.voice = 'wang';
//     this.callme =function (name) {
//         console.log("it's name is :" + name);
//     }
// }

// Animal.prototype.run = function () {
//     console.log('it can run on the ground');
// }

// function Dog() {     //子类
//     this.voice = 'wangwang';
// }

// Dog.prototype = new Animal();

// var jingmao = new Dog();
// console.log(jingmao.foot + jingmao.voice);
// jingmao.run();
// jingmao.callme('huahua');
// console.log('==================================================');  // 内部指针;


// // 4.调用父类构造函数实现继承

// function Person() {
//     this.head = 1;
//     this.emotion = ['happy','sad','angry']
// }

// function Children() {
//     this.hand = 2;
// }

// Children.prototype = new Person();

// var xiaoming = new Children();
// console.log(xiaoming.head);
// console.log(xiaoming.emotion);
// xiaoming.emotion.pop();

// var xiaowang = new Children();
// console.log(xiaowang.head);
// console.log(xiaowang.emotion);

// 5.二者结合使用
function Phone(name,size){
    // this.name = 'sss';
    this.name = name;
    this.size = size;
    this.info = '4G';
    this.main = ['camera','NFC','blueteeth','line'];
    this.call = function(){
        console.log('don\'t forget call me plz')
    }
};

Phone.prototype.send = function(){
    console.log('send message to her')
}

var phone = new Phone('samsung',5.8);
console.log(phone.name + phone.size);
phone.call();
phone.send();
console.log('----------------------原型继承-----------------------------------')

function Iphone(name,size){
    this.name = name;
    this.size = size;
}

Iphone.prototype = new Phone();

var iphone = new Iphone('8 Plus');
console.log(iphone.info);
iphone.call();
iphone.send();

console.log('-----------------------借用构造函数----------------------------------')

function Oppo(name){
    this.name = name;
    Phone.call(this);
};
var oppo1 = new Oppo('oppo1');

oppo1.main.push('finger');

console.log(oppo1.name);
console.log(oppo1.main);

var oppo2 = new Oppo('oppo2');
console.log(oppo2.name);
console.log(oppo2.main);

console.log('-----------------------组合继承--------------------------------')

function Huawei(name){
    this.name = name;
    Phone.call(this);
}

Phone.prototype.takePhoto = function(){
    console.log('take a picture');
}
Phone.prototype.weChat = function(){
    console.log('caht with your friend');
}

Huawei.prototype = new Phone();
Huawei.prototype.constructor = Huawei;

var honor1 = new Huawei('honor1');
console.log(honor1.name);
honor1.takePhoto();
honor1.main.push('finger');
console.log(honor1.main);


var honor2 = new Huawei('honor2');
console.log(honor2.main);


