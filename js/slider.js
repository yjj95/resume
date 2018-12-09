!function(){
    //2.滚动到指定元素
    //找到导航a标签
    var ul=topNavBar.getElementsByTagName("ul")[0]
    var controller={
        view:null,
        init:function(view){
            this.view=view
            this.bindEvents()
        },
        bindEvents:function(){
            var a=this.view.getElementsByTagName("a")
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
            let liTags = this.view.querySelectorAll('nav.menu > ul > li')
            for(let i=0; i<liTags.length; i++){
                liTags[i].onmouseenter = function(x){
                    x.currentTarget.classList.add('active')
                }
                liTags[i].onmouseleave = function(x){
                    x.currentTarget.classList.remove('active')
                }
            }
        }
    }
    controller.init(ul)
}.call()