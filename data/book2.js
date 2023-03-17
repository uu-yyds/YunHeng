document.addEventListener("mousewheel", function (e) {
    e = e || window.event;
    if ((e.wheelDelta && event.ctrlKey) || e.detail) {
    event.preventDefault();
    }
}, {passive: false});  
//注册与登录验证
var dengluyouxiang1=document.getElementById("dengluyouxiang1");//提示
var dengluyouxiang2=document.getElementById("dengluyouxiang2");//表单
var denglumima1=document.getElementById("denglumima1");//提示
var denglumima2=document.getElementById("denglumima2");//表单
var reg=/^\S+(@qq|@163)\.(com|cn)$/;
dengluyouxiang2.onblur=function()
{
    if(!reg.test(dengluyouxiang2.value))
    {
        dengluyouxiang1.innerHTML="邮箱格<br/>式错误";
        dengluyouxiang1.style.color="red";
    }
    else
    {
        dengluyouxiang1.innerHTML="邮箱";
        dengluyouxiang1.style.color="#444444";
    }
};
denglumima2.onblur=function()
{
    denglumima1.innerHTML="密码";
    denglumima1.style.color="#444444";
};
//打开登录界面
document.getElementById("denglu_button").addEventListener("click",()=>{
    document.querySelector(".denglu").style.display="block";
});
//登录界面确定
document.querySelector(".denglu_3_1").addEventListener("click",()=>{
    var flag=true;
    // msg为数据库中账号信息
    for(var i=0;i< msg.length;i++)
    {
        if(msg[i].email==dengluyouixang2.value)
        {
            flag=false;
            if(msg[i].password==denglumima2.value)
            {
                //登录通过
                document.querySelector(".denglu").style.display="none";
                break;
            }
            else
            {
                denglumima1.innerHTML="密码<br/>错误";
                dengluymima1.style.color="red";
                break;
            }
        }
    }
    if(flag==true)
    {
        dengluyouixang1.innerHTML="该邮箱<br/>未注册";
    }
});
//登录界面关闭
document.getElementById("denglu_chacha").addEventListener("click",()=>{
    document.querySelector(".denglu").style.display="none";
});
//功能切换
document.getElementById("xinxi").addEventListener("click",()=>{
    document.getElementById("xinxijiantou").src="下箭头.png";
    document.getElementById("bianjijiantou").src="右箭头.png";
    document.getElementById("gerenjiantou").src="右箭头.png";
});
document.getElementById("bianji").addEventListener("click",()=>{
    document.getElementById("xinxijiantou").src="右箭头.png";
    document.getElementById("bianjijiantou").src="下箭头.png";
    document.getElementById("gerenjiantou").src="右箭头.png";
});
document.getElementById("geren").addEventListener("click",()=>{
    document.getElementById("xinxijiantou").src="右箭头.png";
    document.getElementById("bianjijiantou").src="右箭头.png";
    document.getElementById("gerenjiantou").src="下箭头.png";
});
//图书、账号功能切换
var flag1=1;//1是图书功能，2是账号功能
document.getElementById("tushu").addEventListener("click",()=>{
    document.getElementById("tushu").className="mid_mid_top_right_1";
    document.getElementById("zhanghao").className="mid_mid_top_right_2";
    flag1=1;
    document.getElementById("meisousuo").style.display="block";
    document.getElementById("tushusousuo").style.display="none";
    document.getElementById("zhanghaosousuo").style.display="none";
});
document.getElementById("zhanghao").addEventListener("click",()=>{
    document.getElementById("tushu").className="mid_mid_top_right_2";
    document.getElementById("zhanghao").className="mid_mid_top_right_1";
    flag1=2;
    document.getElementById("meisousuo").style.display="block";
    document.getElementById("tushusousuo").style.display="none";
    document.getElementById("zhanghaosousuo").style.display="none";
});
//搜索
document.getElementById("fangdajing").addEventListener("click",()=>{
    if(flag1==1)
    {
        document.getElementById("meisousuo").style.display="none";
        document.getElementById("tushusousuo").style.display="block";
        document.getElementById("zhanghaosousuo").style.display="none";
    }
    else
    {
        document.getElementById("meisousuo").style.display="none";
        document.getElementById("tushusousuo").style.display="none";
        document.getElementById("zhanghaosousuo").style.display="block";
    }
});
