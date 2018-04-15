/* 
* @Author: Marte
* @Date:   2018-04-12 20:34:43
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-14 20:45:15
*/
document.addEventListener('DOMContentLoaded',function(){
      jQuery(function($){
            $('#hander').load('header_current.html');
             $('#footer').load('footer.html');
        });
 // 获得cookie
    function getcookie(){ 
        var goodlist=[];
        var cookie=document.cookie;
        // cookie=cookie.slice(9)
        cookie=cookie.split('; ');
        
        cookie.forEach(function(item){
            var arr=item.split('=');
           
            if(arr[0]=='goodlist'){
                goodlist=JSON.parse(arr[1]);
               
            }
        });
        return goodlist ; 
    }
    let carlist=document.querySelector('.carlist');
    let xiaoji2=document.querySelector('.xiaoji2');
    let zongjie=document.querySelector('.zongjie');
    
    // 读取cookie
    function duqu(){
        var goodlist=getcookie();
        let t_price=0;
        let t_qty=0;
        let t_save=0;
       carlist.innerHTML=goodlist.map(item=>{
           t_price+=item.price*item.qty;
           t_qty+=item.qty;
           t_save+=item.bfprice-item.price;
            return `
                <li data-id=${item.id}>
                    <img class="fl" src=${item.imgurl}> 
                    <span class="name">${item.name}</span>
                    <span class="price">${item.price}</span>
                    <del><span>${item.bfprice}</span></del>
                    <input type="number" value="${item.qty}" class="qty" min="0"/>
                    <span class="xiaoji">${item.price*item.qty}</span>
                    <button class="shanchu">删除</button> 
                </li>
                `
                 }).join('') 
             xiaoji2.innerHTML='小计：'+ t_price;
             zongjie.innerHTML='共有<span>'+t_qty+ '</span>件商品，已优惠<span>'+t_save+'</span>元，总计(不含运费):<span>'+t_price+'</span>';
    }
    duqu();
    // 给父级绑定事件
    
    carlist.onclick=function(e){
        e=e||window.event;
        var target=e.target||e.srcElement;
        // 当点击的为删除按钮时
        if(target.className ==='shanchu'){
            var currentli=target.parentNode;
            var id=currentli.getAttribute('data-id')
            var goodlist=getcookie();
            for(let i=0;i<goodlist.length;i++){
                if(id==goodlist[i].id){
                    goodlist.splice(i,1);
                }
            }
            document.cookie='goodlist='+JSON.stringify(goodlist);
            duqu(); 
           
        }
    }
    let quren=document.querySelector('.quren');
    quren.onclick=function(e){
        e=e||window.event;
        var target=e.target||e.srcElement;
         if(target.className ==='btn'){
            var now = new Date();
            now.setDate(now.getDate()-10);

            // 清除cookie：利用设置过期时间达到删除效果
            document.cookie = 'goodlist=null;expires='+now.toUTCString();
             duqu(); 
         }
    }
      
    // 购买了同样商品的用户还购买了
    let hot_b=document.querySelector('.hot_b');
      let xhr = new XMLHttpRequest();//readySate=0
            let status = [200,304];
            // 当数据返回时触发
            xhr.onreadystatechange = function(){
                // 3：接受数据（未接受完毕）
                // 4：数据接受完毕
                // console.log(xhr.readyState)
                if(status.includes(xhr.status)){
                    let data = JSON.parse(xhr.responseText)
                 hot_b.innerHTML = data.map(item=>{
                            return `
                                <li data-id=${item.id}>
                                    <img src=${item.imgurl}> 
                                    <p>${item.cont}</p>
                                    <span>&yen;${item.price}</span>
                                     <del><span>&yen;${item.bfprice}</span></del>
                                </li>
                            `
                        }).join('')
                }

            }
            // 配置参数，建立与服务器的连接
            // get,post,put,delete
            xhr.open('get','../api/car.php',true);//readySate=1

            // 发起请求
            xhr.send();
})