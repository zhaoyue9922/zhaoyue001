/**
 * Created by Administrator on 2018/7/12 0012.
 */
require(['sortArray'],function (sortArray) {
   var arr = [1,4,6,8,9];

    console.log(  sortArray('sdfghjkl')  );

});

define(function(require){

    var arr = [1,4,6,8,9];

    var sortArray = require('sortArray');
    console.log(  sortArray('sdfghjkl')  );
});