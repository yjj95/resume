!function(){
    //3.显示导航二级菜单
    let aTags=document.getElementsByClassName("menuTigger")
    var controller={
        view:null,
        init:function(view){
            this.view=view
            this.bindEvents()
        },
        bindEvents:function(){
            for(let i=0;i<this.view.length;i++){
                this.view[i].onmouseenter=function(e){
                    let a=e.currentTarget
                    //找ul--submenu
                    let brother=a.nextSibling
                    while(brother.nodeType===3){
                        brother=brother.nextSibling
                    }
                    brother.classList.add("active")
                }
                this.view[i].onmouseleave=function(e){
                    let a=e.currentTarget
                    //找ul
                    let brother=a.nextSibling
                    while(brother.nodeType===3){
                        brother=brother.nextSibling
                    }
                    brother.classList.remove("active")
                }
            }
        }
    }
    controller.init(aTags)
}.call()