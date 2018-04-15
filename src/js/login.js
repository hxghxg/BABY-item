/* 
* @Author: Marte
* @Date:   2018-04-09 21:16:04
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-15 15:58:32
*/
require.config({
    // baseUrl:'lib',

    // 配置别名（虚拟路径）
    paths:{
        // 格式：别名:真实路径（基于baseUrl）
        jquery:'../lib/jquery-3.2.1',
    },

    // 配置依赖
    // shim:{
    //      xzoom:['jquery']
    // }
})

require(['jquery','common'],function($,a){
            $('#footer').load('footer.html');
            //手机号验证
            $("#username").on('blur',function(){
                var str = $("#username").val();
                var ret = /^1[3-8]\d{9}$/;
                if(ret.test(str)){
                }else{
                   $("#txt").html(" 手机号格式错误"); 
                    return false;
                }
            });

            $('.btnLogin').on('click',function(){
                $.ajax({
                    url:'../api/login.php',
                    data:{
                        username:$('#username').val(),
                        password:$('#password').val()
                    }, 
                    success:function(data){
                        console.log(data);
                        if(data == 'success'){
                            location.href = '../index.html';
                        }else if(data == 'fail'){
                           alert('手机号或密码输入有误');
                        }
                    }
                })
                
            })

            // 随机验证码
        let num = document.querySelector('.num');
        function showCode(){
               function Code(){
                var res = randomNumber(0,9999);
                if(res<10){
                    res = '000' + res;
                }else if(res < 100){
                    res = '00' + res;
                }else if(res < 1000){
                    res = '0' + res;
                }
                    return res;
                }
                
                num.innerHTML = Code();
            }
            showCode();
        num.onclick = function(){
            showCode();
        }
    })

