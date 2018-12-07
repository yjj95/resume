var APP_ID = '8UOTDe2mb5H30TijmvR8Acjm-gzGzoHsz';
var APP_KEY = 'M55lFHNu7GYQvORXAJuJTIV7';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
var query = new AV.Query('Message');
  query.find().then(function (message) {
    // 成功获得实例
    // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
    let arr=message.map((item)=>item.attributes)
    arr.forEach(item => {
      let li=document.createElement("li")
      li.innerText=`${item.name}:${item.content}`
      let messageList=document.querySelector("#messageList")
      messageList.appendChild(li)
    });

  }, function (error) {
    // 异常处理
  });
var myform=document.querySelector("#postMessageForm")
myform.addEventListener('submit',function(e){
  e.preventDefault()
  var content=myform.querySelector('input[name=content]').value
  var name=myform.querySelector('input[name=name]').value
  var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
      content: content,
      name:name
    }).then(function(object) {
      let li=document.createElement("li")
      li.innerText=`${object.attributes.name}:${object.attributes.content}`
      let messageList=document.querySelector("#messageList")
      messageList.appendChild(li)
      myform.querySelector('input[name=content]').value=''
    })
})

