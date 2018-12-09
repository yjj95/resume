//添加脱离初始位置的类，为了实现由下到上的动画
let specialTags = document.querySelectorAll('[data-x]')

//5.到相应的模块高亮当前a
function highlight(){
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
    let brothersAndMe = li.parentNode.children
    for(let i=0; i<brothersAndMe.length; i++){
      brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}
var controller={
    view:null,
    init:function(view){
      this.view=view
      this.bindEvents()
    },
    bindEvents:function(){
      for(let i =0;i<specialTags.length; i++){
        specialTags[i].classList.add("offset")
      }
    }
  }
  controller.init(specialTags)