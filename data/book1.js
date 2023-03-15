//打开登录界面
document.getElementById("denglu_button").addEventListener("click",()=>{
    document.querySelector(".denglu").style.display="block";
});
// 登录界面确定
document.querySelector(".denglu_3_1").addEventListener("click",()=>{
    alert("111");
});
//登录界面关闭
document.getElementById("denglu_chacha").addEventListener("click",()=>{
    document.querySelector(".denglu").style.display="none";
});
//打开注册界面
document.getElementById("zhuce_button").addEventListener("click",()=>{
    document.querySelector(".zhuce").style.display="block";
});
// 登录注册确定
document.querySelector(".zhuce_3_1").addEventListener("click",()=>{
    alert("111");
});
//注册界面关闭
document.getElementById("zhuce_chacha").addEventListener("click",()=>{
    document.querySelector(".zhuce").style.display="none";
});