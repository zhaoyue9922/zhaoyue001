/**
 * Created by Administrator on 2018/7/12 0012.
 */
define(['jquery-1.12.4'],function () {
    var dialog = {
        open:function () {
            defaultArg = {
                width:300,
                height:300
            };
            var option = $.extend(defaultArg,arg);
            /*生成元素设置样式 内容*/
            this.$mask = $('<div class="dialog-mask"></div>');
            this.$content = $('<div class="dialog-content"></div>').css({
                width:options.width,
                height:options.height

            });
            this.$title = $('<div class="dialog-title"></div>');
            this.$txt = $('<span class="dialog-txt">登录</span>').html(option.title);
            this.$close = $('<span class="dialog-close">X</span>').on('click',function () {
                $('.dialog-mask').remove();
            });
            this.$body = $('<div class="dialog-body">hfaebghakbf </div>').load(options.content);
            /*组装到mask中 添加到body*/
            this.$mask.append(this.$content);
            this.$content.append(this.$title).append(this.$body);
            this.$title.append(this.$txt).append(this.$close);
            $('body').append(this.$mask);
            // var html = '<div class="dialog-mask">'
            //     +'<div class="dialog-content">'
            //     +'<div class="dialog-title">'
            //     +'<span>登录</span>'
            //     +'<span class="dialog-close">X</span>'
            //     +'</div>'
            //     +'<div class="dialog-body">hfaebghakbf </div>'
            //     +'</div>'
            //     +'</div>';
            // var options = $.extend(defaultArg,arg);
            // $('body').append(html);
            // $('.dialog-content').css({
            //     width:options.width,
            //     height:options.height
            // });
            // $('.dialog-txt').html(options.title);
            // $('.dialog-body').html(options.content);
            // $('.dialog-close').on('click',function(){
            //     $('.dialog-mask').remove();
            // });
        },
        close:function () {
            // $('.dialog-mask').remove();
            this.$mask.remove();
        }
    };
    return dialog;
});