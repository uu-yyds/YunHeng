
//返回键返回
document.getElementById("fanhui_img").addEventListener("click", () => {
document.getElementById("search1").style.display = "block";
document.getElementById("search2").style.display = "none";
document.getElementById("search3").style.display = "none";
}
)
//首页书名
var shuming = document.getElementsByClassName("mid_mid_mid_2_word_1");
var shumings = ["牧神记", "西游记", "水浒传", "三国演义", "红楼梦", "解忧杂货店", "白夜行", "史记", "聊斋志异", "安徒生童话"];
for (var i = 0; i < 10; i++) {
    shuming[i].innerHTML = shumings[i];
}
//首页作者
var zuozhe = document.getElementsByClassName("mid_mid_mid_2_word_2");
var zuozhes = ["宅猪", "吴承恩", "施耐庵", "罗贯中", "曹雪芹", "东野圭吾", "东野圭吾", "司马迁", "蒲松龄", "安徒生"];
for (var i = 0; i < 10; i++) {
    zuozhe[i].innerHTML = zuozhes[i];
}
//首页封面
var fengmian = document.getElementsByClassName("mid_mid_mid_2_photo_1");
var fengmians = ["牧神记.webp", "西游记.gif", "水浒传.jpg", "三国演义.jpg", "红楼梦.webp", "解忧杂货店.jpg", "白夜行.jpg", "史记.webp", "聊斋志异.jpg", "安徒生童话.jpg"];
for (var i = 0; i < 10; i++) {
    fengmian[i].src = fengmians[i];
}
//搜索
document.getElementById("icon").addEventListener("click", () => {
    document.getElementById("search1").style.display = "none";
    document.getElementById("search2").style.display = "block";
    document.getElementById("search3").style.display = "none";
    var shuming = document.getElementsByClassName("mid_mid_mid_2_word_1");
    var shumings = ["牧神记", "西游记", "水浒传", "三国演义", "红楼梦", "解忧杂货店", "白夜行", "史记", "聊斋志异", "安徒生童话"];
    var zuozhe = document.getElementsByClassName("mid_mid_mid_2_word_2");
    var zuozhes = ["宅猪", "吴承恩", "施耐庵", "罗贯中", "曹雪芹", "东野圭吾", "东野圭吾", "司马迁", "蒲松龄", "安徒生"];
    var fengmian = document.getElementsByClassName("mid_mid_mid_2_photo_1");
    var fengmians = ["牧神记.webp", "西游记.gif", "水浒传.jpg", "三国演义.jpg", "红楼梦.webp", "解忧杂货店.jpg", "白夜行.jpg", "史记.webp", "聊斋志异.jpg", "安徒生童话.jpg"];
    for (var i = 0; i < 10; i++) {
        shuming[i].innerHTML = "";
        zuozhe[i].innerHTML = "";
        fengmian[i].style.display = "none";
    }
    var index = 0;
    for (var i = 0; i < 10; i++){
        if (shumings[i].includes(document.getElementById("seaech0").value)) {
            shuming[index] = shumings[i];
            zuozhe[index] = zuozhes[i];
            fengmian[index] = fengmians[i];
            fengmian[index].style.display = "block";
            index++;
        }
        if (index === 0) {
            document.getElementById("search1").style.display = "none";
            document.getElementById("search2").style.display = "none";
            document.getElementById("search3").style.display = "block";
        }
    }
})

