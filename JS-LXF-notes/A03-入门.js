//第二天
var arr=[2,4,2,2];

arr.length=6;
console.log(arr);

arr.indexOf(2);//与String类似，Array也可以通过indexOf()来搜索一个指定的元素的位置：

arr.slice(1,3); //包括开始，不包括结束索引
arr.slice(3);
arr.slice();//复制数组

arr.sort();
console.log(arr);

arr.reverse();

arr.splice //万能方法   (x,y,'m')  x开始，删除y个

var sum=[[200,400],[300,500],'ss'];
var m=sum[1][1];
console.log(m);

var i={
    name:'y',                    //i.name
    'middle_school':'yizhong'    //对象属性含有特殊字符时用单引号
}                                //调用时用i['middle_school']
                                 //访问不存在的属性i.age   不报错，显示undefined
xiaoming.age = 18;   // 新增一个age属性
delete xiaoming.age; // 删除age属性

xiaoming.hasOwnProperty('name'); // true



var x=2;
for( ; ; ){  //不写条件 进入死循环
    x++;
    if(x>19){
        break;
    }
}

//for ... in循环，它可以把一个对象的所有属性依次循环出来
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    if(o.hasOwnProperty(key)){
        console.log(key); // key名字可以自定义
    }
}


//Map 键值对数据类型,具有极快的查找速度
//遍历Array可以采用下标循环，遍历Map和Set就无法使用下标
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined

var PI=3.14 //通常用全部大写的变量来表示一个常量
const pi=3.14;
//pi = 301415926;
console.log(pi);;
