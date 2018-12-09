!function(){
    //1.导航悬停
    var topNavBar=document.getElementById("topNavBar")
    var controller={
        view:null,
        init:function(view){
            this.view=view
            this.bindEvents()
        },
        bindEvents:function(e){
            window.onscroll=()=>{
                if(window.scrollY>0){
                    this.view.classList.add("sticky")
                }else{
                    this.view.classList.remove("sticky")
                }
                highlight()
            }
        }
    }
    controller.init(topNavBar)
}.call()