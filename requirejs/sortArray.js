/**
 * Created by Administrator on 2018/7/12 0012.
 */
define( ['isArray'],function (isArray) {
   function sortArray(arr) {
       if (isArray(arr)) {
           arr.sort(function (x, y) {
               return x - y;
           });
           return arr;
       } else {
           return '请输入数组';
       }
   }
   return sortArray;
});