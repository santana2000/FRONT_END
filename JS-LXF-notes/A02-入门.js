'use strict';
//alert('c404');//测试
/*
块注释
*/
NaN; // NOT A NUMBER
var =1.234e5; //* 10^5

/*
==   '自动转换类型再比较'
===  '类型不同直接false'  <right,严格等号>
不要使用==比较，始终坚持使用===比较。
*/

''; //长度为0的字符串,区分三者
0;
null;



var arr=[a,b,c,1,2,null,false];
//JavaScript的数组可以包括任意数据类型

var c404= {          //对象用花括号
    tutor: 'sun',    //键值对  键——属性
    student: '123',
    table: 'ture'
};
console.log(c404.student,s);

var s; // $ 或者 _ 开头，不能以数字开头
//只能声明一次，可反复赋值（不同类型的值也可以）
s; //不通过var声明代表全局变量  strict模式

//ES6新特性
`多行
字符
串表示方法`;
var mullines= "sss"+"hi"+
    "sss"+
    "aaa";
console.log(mullines);


//模板字符串,搭配es6多行字符串使用
var name='haiwai';
var age=15;
var school='cumt';
var info=`名字是${name},今年${age}岁,在${school}上学`;
var info2=`名字是+name+,今年+age+岁,在+school+上学`;
console.log(info,info2);


// ***字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果
var s = 'Test';
s[0] = 'X';
alert(s);

var s = 'Test';
s = 'X';    //变量变了，字符串没变
alert(s);

var o='hello, world!';  //**注意：字符串内的空格也是字符串，计入索引
o.substring(2,6)


