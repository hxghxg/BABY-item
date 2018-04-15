/* 
* @Author: Marte
* @Date:   2018-04-09 17:49:49
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-15 15:40:26
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

require(['jquery'],function($,a){

             $('#footer').load('footer.html');

            let username = document.querySelector('#username');
            let password = document.querySelector('#password');
            let btnReg = document.querySelector('.btnReg');
            let txt = username.nextElementSibling;
            let tex =password.nextElementSibling;

            // 失去焦点验证用户是否可注册
            username.onblur = function(){
                let _username = username.value;
                if(!/^1[3-8]\d{9}$/i.test(_username)){
                    txt.innerHTML =' 手机号格式错误';
                        return false;
                }
                ajax({
                    url:'../api/reg.php',
                    data:{username:_username},
                    success:function(data){
                        // data：fail,success
                        if(data === 'success'){
                            txt.innerHTML = '';
                        }else{
                            txt.innerHTML ='该手机号已注册'
                        }
                    }
                })
            }
             password.onblur = function(){
                let _password = password.value;
                if(!/^[A-Za-z0-9@#]{6,16}$/i.test(_password)){
                    tex.innerHTML ='密码为6-16位字符，可包含数字、字母和特殊字符';
                        return false;
                }
             }
            // 注册
            btnReg.onclick = function(){
                let _username = username.value;
                let _password = password.value;

                ajax({
                    url:'../api/reg.php',
                    data:{
                        username:_username,
                        password:_password,
                        type:'reg'

                    },
                    success:function(data){
                        console.log(data)
                        if(data == 'success'){
                            console.log(666);
                            location.href="login.html"
                        }
                    }
                })
            }
        }) 