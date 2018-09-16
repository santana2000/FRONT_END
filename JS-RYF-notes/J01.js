//window  属性
var window ='声明一个全局变量 = 为window对象(顶层对象)的同名属性赋值'
/*  window.name----与iframe窗口通信
    window.location----获取窗口当前URL
    window.frames & length----返回类似于数组的对象，框架窗口个数
    window.screenX & Y ----浏览器左上角与屏幕左上角距离
    window.innerHeight & innerWidth ----窗口可视区域(viewport)的大小
*/

var navigator='包含浏览器信息的对象'
/*    navigator.userAgent----中介 代理
                plugins----插件(数组形式)
*/
var screen='屏幕分辨率-显示设备的信息'

//window 方法  ----注意接收的参数
/*  window.moveTo(x,y) & By(x,y)
    window.scrollBy(0,window.innerHeight)
    window.open('xxc.html')
*/

/* 多窗口操作
       | ----top
       | ----parent
       | ----self
 */

//URL编码解码----URL元字符 & URL语义字符
encodeURIComponent();  //解码所有，只填部分
encodeURI()

//                       △三种方法△

alert('emmmmm');//只有确定按钮，用于通知用户；参数只能为字符串，可以\n换行但无法使用CSS ----向....报警

var x=prompt('xxx',3);//含有输入框，用于接受用户信息;返回值为一个字符串  ------提示

confirm('你确定要离开当前页面吗'); //点确定返回true，点取消则相反

//history对象
history.back();   //返回上一页不需要重新请求服务器，从缓存中加载即可
history.forward();
history.go(0);//刷新
history.length;


//域名、根路径
//浏览器端数据存储机制----web storage

//同源政策---协议&域名&端口相同
