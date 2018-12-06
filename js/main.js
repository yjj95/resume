setTimeout(function(){
    findClosest()//
},0)
//1.导航悬停
var topNavBar=document.getElementById("topNavBar")
window.onscroll=function(e){
    if(window.scrollY>0){
        topNavBar.classList.add("sticky")
    }else{
        topNavBar.classList.remove("sticky")
    }
    findClosest()
}
//2.滚动到指定元素
//找到导航a标签
var ul=topNavBar.getElementsByTagName("ul")[0]
var a=ul.getElementsByTagName("a")
for(var i=0;i<a.length;i++){
    a[i].onclick=function(a){
        a.preventDefault()
        href=a.currentTarget.getAttribute("href")
        var content=document.querySelector(href)
        var top=content.offsetTop-80
        //4.js动画
        let n=25//要动的次数
        //let t=//动画完成时间
        let currentTop=window.scrollY
        let allDistance=top-currentTop//总共要动的距离=元素的offsetop-window.scrollY
        let distance=allDistance/n//每一次要动的距离        
        let t=500/n//多少时间动一次
        let i=0//记录次数
        /*while(i!=n){
            window.scrollTo(0,currentTop+distance*i)
            i=i+1
        }*/
        let timer=setInterval(function(){
            if(i===n){
                clearInterval(timer)
                return
            }
            window.scrollTo(0,currentTop+distance*i)
            i=i+1
        },t)
    }
}
//移入移出
let liTags = document.querySelectorAll('nav.menu > ul > li')
for(let i=0; i<liTags.length; i++){
  liTags[i].onmouseenter = function(x){
    x.currentTarget.classList.add('active')
  }
  liTags[i].onmouseleave = function(x){
    x.currentTarget.classList.remove('active')
  }
}
//3.显示导航二级菜单
let aTags=document.getElementsByClassName("menuTigger")
for(let i=0;i<aTags.length;i++){
    aTags[i].onmouseenter=function(e){
        let a=e.currentTarget
        //找ul--submenu
        let brother=a.nextSibling
        while(brother.nodeType===3){
            brother=brother.nextSibling
        }
        brother.classList.add("active")
    }
    aTags[i].onmouseleave=function(e){
        let a=e.currentTarget
        //找ul
        let brother=a.nextSibling
        while(brother.nodeType===3){
            brother=brother.nextSibling
        }
        brother.classList.remove("active")
    }
}
//添加脱离初始位置的类，为了实现由下到上的动画
let specialTags = document.querySelectorAll('[data-x]')
for(let i =0;i<specialTags.length; i++){
    specialTags[i].classList.add("offset")
}
//5.高亮当前
function findClosest(){
    let specialTags = document.querySelectorAll('[data-x]')
    //找最近的--滚动到目标需要的距离最少
    let minIndex = 0
    for(let i =1;i<specialTags.length; i++){
      if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
        minIndex = i
      }
    }
    // minIndex 就是离窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset')
    //找对应的a标签
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#'+ id + '"]')
    //不能给a标签添加类active了，跟mouseenter的类重叠了
    let li = a.parentNode
    //所有li
    let brothersAndMe = li.parentNode.children
    //移除所有li的高亮
    for(let i=0; i<brothersAndMe.length; i++){
      brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }
//作品集
profolio1.onclick=function(){
    profolioBar.className="bar-inner state-1"
}
profolio2.onclick=function(){
    profolioBar.className="bar-inner state-2"
}
profolio3.onclick=function(){
    profolioBar.className="bar-inner state-3"
}