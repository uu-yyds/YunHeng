document.addEventListener("mousewheel", function (e) {
    e = e || window.event;
    if ((e.wheelDelta && event.ctrlKey) || e.detail) {
    event.preventDefault();
    }
}, {passive: false});     
//打开登录界面
document.getElementById("denglu_button").addEventListener("click",()=>{
    document.querySelector(".denglu").style.display="block";
    document.querySelector(".zhuce").style.display="none";
    document.querySelector(".xitongshuoming").style.display="none";
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
//打开注册界面
document.getElementById("zhuce_button").addEventListener("click",()=>{
    document.querySelector(".zhuce").style.display="block";
    document.querySelector(".denglu").style.display="none";
    document.querySelector(".xitongshuoming").style.display="none";
});
//注册界面确定
document.querySelector(".zhuce_3_1").addEventListener("click",()=>{
    alert("111");
});
//注册界面关闭
document.getElementById("zhuce_chacha").addEventListener("click",()=>{
    document.querySelector(".zhuce").style.display="none";
});
//打开帮助
document.getElementById("bangzhu_button").addEventListener("click",()=>{
    document.querySelector(".xitongshuoming").style.display="block";
    document.querySelector(".zhuce").style.display="none";
    document.querySelector(".denglu").style.display="none";
});
//关闭帮助
document.getElementById("xitong_chacha").addEventListener("click",()=>{
    document.querySelector(".xitongshuoming").style.display="none";
});
//功能切换
document.getElementById("sousuo").addEventListener("click",()=>{
    document.getElementById("sousuojiantou").src="下箭头.png";
    document.getElementById("shukujiantou").src="右箭头.png";
    document.getElementById("jiehuanjiantou").src="右箭头.png";
    document.getElementById("gerenjiantou").src="右箭头.png";
});
document.getElementById("shuku").addEventListener("click",()=>{
    document.getElementById("sousuojiantou").src="右箭头.png";
    document.getElementById("shukujiantou").src="下箭头.png";
    document.getElementById("jiehuanjiantou").src="右箭头.png";
    document.getElementById("gerenjiantou").src="右箭头.png";
});
document.getElementById("jiehuan").addEventListener("click",()=>{
    document.getElementById("sousuojiantou").src="右箭头.png";
    document.getElementById("shukujiantou").src="右箭头.png";
    document.getElementById("jiehuanjiantou").src="下箭头.png";
    document.getElementById("gerenjiantou").src="右箭头.png";
});
document.getElementById("geren").addEventListener("click",()=>{
    document.getElementById("sousuojiantou").src="右箭头.png";
    document.getElementById("shukujiantou").src="右箭头.png";
    document.getElementById("jiehuanjiantou").src="右箭头.png";
    document.getElementById("gerenjiantou").src="下箭头.png";
});
//推荐、分类切换
document.getElementById("tuijian").addEventListener("click",()=>{
    document.getElementById("tuijian").className="mid_mid_top_left";
    document.getElementById("fenlei").className="mid_mid_top_right";
});
document.getElementById("fenlei").addEventListener("click",()=>{
    document.getElementById("tuijian").className="mid_mid_top_right";
    document.getElementById("fenlei").className="mid_mid_top_left";
});
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