/**
 * Created by Administrator on 2018/7/12 0012.
 **/
require(['dialog','jquery-1.12.4'],function (dialog) {
   $('#btn').on('click',function () {
       dialog.open({
           width:200,
           height:200,
           title:'注册',
           content:'content.html'
       });
   })
    $('body').on('click','.close-btn',function () {
        dialog.open()
    })
});