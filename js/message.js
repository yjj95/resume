var APP_ID = '8UOTDe2mb5H30TijmvR8Acjm-gzGzoHsz';
var APP_KEY = 'M55lFHNu7GYQvORXAJuJTIV7';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
var myform=document.querySelector("#postMessageForm")
myform.addEventListener('submit',function(){
    var content=myform.querySelector('input[name=content]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
      content: content
    }).then(function(object) {
    //   alert('LeanCloud Rocks!');
    })
})

