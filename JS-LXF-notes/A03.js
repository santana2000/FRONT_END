//第二天
var arr=[2,4,2,2];

arr.length=6;
console.log(arr);

arr.indexOf(2);//String & 数组

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
var x=2;
for( ; ; ){  //不写条件 进入死循环
    x++;
    if(x>19){
        break;
    }
}

//Map 键值对数据类型

const pi=3.14;
console.log(pai = 301415926);;
