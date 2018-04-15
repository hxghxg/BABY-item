/* 
* @Author: Marte
* @Date:   2018-04-08 21:47:51
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-15 15:34:26
*/

// document.addEventListener('DOMContentLoaded',function(){ 
require.config({
    // baseUrl:'lib',

    // 配置别名（虚拟路径）
    paths:{
        // 格式：别名:真实路径（基于baseUrl）
        jquery:'../lib/jquery-3.2.1',
        min:'wySilder.min',
    },

    // 配置依赖
    shim:{
        min:['jquery'], 
        common:['jquery'],
    }
})

require(['jquery','common','min'],function($,a){
           // jQuery(function($){
                $('#hander').load('html/header.html');
                 $('#nav').load('html/nav.html');

                $('#footer').load('html/footer.html');

                $(".js-silder").silder({
                    auto: true,
                    speed: 20,
                    sideCtrl: true,
                    bottomCtrl: true,
                    defaultView: 0,
                    interval: 3000,
                    activeClass: "active",
                });
          
            // });
          
    
            let pinpai_b = document.querySelector('.pinpai_b');
            // 创建一个异步请求对象{} 
            let xhr = new XMLHttpRequest();//readySate=0
            let status = [200,304];
            // 当数据返回时触发
            xhr.onreadystatechange = function(){
                // 3：接受数据（未接受完毕）
                // 4：数据接受完毕
                // console.log(xhr.readyState)
                if(status.includes(xhr.status)){
                    let data = JSON.parse(xhr.responseText)
                    console.log(data)
                    pinpai_b.innerHTML = data.map(item=>{
                        return `
                            <li data-id=${item.id}>
                                <img src=${item.imgurl}>
                                <span>&yen;${item.price}</span>
                                <del><span>&yen;${item.bfprice}</span></del>
                                <p>${item.cont}</p>
                            </li>
                            `
                        }).join('')
                }

            }
            // 配置参数，建立与服务器的连接
            // get,post,put,delete
            xhr.open('get','api/index.php',true);//readySate=1

            // 发起请求
            xhr.send();//readyState=2

            // 右侧边tab切换
            let right_tl= document.querySelector('.right_tl');
            let right_tb= document.querySelector('.right_tb');
            let right_tr= document.querySelector('.right_tr');
            let right_tbr= document.querySelector('.right_tbr');
            right_tl.onmouseover =function(){
                right_tb.style.display='block';
                right_tbr.style.display='none';
                right_tl.style.background='#F9F9F9';
                right_tr.style.background='#fff';
            }
             right_tr.onmouseover =function(){
                right_tbr.style.display='block';
                right_tb.style.display='none';
                right_tr.style.background='#F9F9F9';
                 right_tl.style.background='#fff';
            }  

             // 右侧边tab切换下
            let tz= document.querySelector('.tz');
            let tz_cont= document.querySelector('.tz_cont');
            let tx= document.querySelector('.tx');
            let tx_cont= document.querySelector('.tx_cont');
            let wj= document.querySelector('.wj');
            let wj_cont= document.querySelector('.wj_cont');
            let yp= document.querySelector('.yp');
            let yp_cont= document.querySelector('.yp_cont');
            tz.onmouseover =function(){
                tz_cont.style.display='block';
                tz.style.background='#F9F9F9';
                tx.style.background='#fff';
                tx_cont.style.display='none';
                yp_cont.style.display='none';
                yp.style.background='#fff';
                wj.style.background='#fff';

            }
            tx.onmouseover =function(){
                tx_cont.style.display='block';
                tx.style.background='#F9F9F9';
                tz.style.background='#fff';
                tz_cont.style.display='none';
                yp_cont.style.display='none';
                yp.style.background='#fff';
                 wj.style.background='#fff';
            }
            wj.onmouseover =function(){
                wj.style.background='#F9F9F9';
                tz_cont.style.display='none';
                tx_cont.style.display='none';
                yp_cont.style.display='none';
                tx.style.background='#fff';
                tz.style.background='#fff';
                yp.style.background='#fff';
            }
             yp.onmouseover =function(){
                yp_cont.style.display='block';
                yp.style.background='#F9F9F9';
                tz.style.background='#fff';
                tz_cont.style.display='none';
                tx.style.background='#fff';
                tx_cont.style.display='none';
                wj.style.background='#fff';
            }


            // 右侧轮播图
            let right_c = document.getElementsByClassName('right_c')[0];
            let ul = right_c.children[0];

            // 复制第一张图片到最后
            ul.appendChild(ul.children[0].cloneNode(true));

            // 图片的数量
            let len = ul.children.length;

            // 索引值
            let index = 0;

            // 显示分页
            let page = document.createElement('div');
            page.className = 'page';
            for(let i=1;i<len;i++){
                let span = document.createElement('span');
                span.innerText = i;
                if(i===1){
                    span.classList.add('active');
                }

                // 把页码写入page
                page.appendChild(span);
            }

            // 把page写入right_c
            right_c.appendChild(page);


            // 获取图片的宽度
            let imgWidth;
            ul.querySelector('img').onload = function(){
                imgWidth = this.offsetWidth;

                // 1）设置ul宽度，达到水平排列的效果
                ul.style.width = imgWidth*len + 'px';
                
            }

            // 2）水平轮播效果
            let timer = setInterval(autoPlay,3000);


            // 移入移出
            right_c.onmouseenter = ()=>{
                clearInterval(timer);
            }

            right_c.onmouseleave = ()=>{
                timer = setInterval(autoPlay,3000);
            }

            // 点击分页切换
            right_c.onclick = e=>{
                if(e.target.parentNode.className === 'page'){
                    index = e.target.innerText-1;

                    show();
                }
            }


            function autoPlay(){
                index++;

                show();
            }


            function show(){
                if(index >= len){//0,1,2,3,4
                    ul.style.left = 0;
                    index = 1;
                }

                animate(ul,{left:-imgWidth*index});

                // 页码高亮
                for(let i=0;i<len-1;i++){//0,1,2,3
                    page.children[i].className = '';
                }

                if(index === len - 1){
                    page.children[0].className = 'active';
                }else{
                    page.children[index].className = 'active'
                }
            }

           pinpai_b.onclick = function(e){
                if(e.target.tagName.toLowerCase() === 'img'){
                     location.href="html/list.html";
                }

            } 
// })
})