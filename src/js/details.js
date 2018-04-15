/* 
* @Author: Marte
* @Date:   2018-04-11 20:40:49
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-15 14:59:49
*/


require.config({
    // baseUrl:'lib',

    // 配置别名（虚拟路径）
    paths:{
        // 格式：别名:真实路径（基于baseUrl）
        jquery:'../lib/jquery-3.2.1',
        xzoom:'../lib/jquery.gdsZoom/jquery.gdsZoom',
        add:'jquery-addShopping'
    },

    // 配置依赖
    shim:{
        xzoom:['jquery'],
        common:['jquery'],
        common:['xzoom'],
        add:['xzoom'],
        add:['jquery']
    }
})

require(['jquery','add','xzoom','common'],function($,a){
    // jQuery(function($){
            $('#hander').load('header_current.html');
            $('#nav').load('nav_current.html');

             $('#footer').load('footer.html');

            $('.goods').gdsZoom({
                position:'right'
            });

            $('.smallList').on('click','img',function(){
                $('.goods img').attr({
                    src:this.src,
                    'data-big':this.dataset.big || this.src
                })
            })

             $('.carts').shoping({
                    endElement:".menu-a",
                     iconCSS:"",
                    iconImg:"../img/cart.png",
                     endFunction:function(element){
                     $("#num").html(parseInt($("#num").html())+1);
                     console.log(element);
                    return false;
                     }
                 })
        // });
    var params = location.search;
    var params = decodeURI(params.slice(1));
    var  goods = {};
    params = params.split('&');
    params.forEach(function(item){
        var arr = item.split('=');
        // console.log(arr);
        goods[arr[0]] = arr[1];
    });
    let buy = document.querySelector('.buy');
    let qty = document.querySelector('.qty');
    let price = document.querySelector('.price');  
    let zhekou = document.querySelector('.zhekou');
    let bfprice= document.querySelector('.bfprice');
    let fangda= document.querySelector('.fangda');
    let fangda2= document.querySelector('.fangda2');
    let sjgm =document.querySelector('.sjgm ');
    let shouji =document.querySelector('.shouji ');
     shouji.onmouseover=function(){
        sjgm.style.display='block';
    }
      shouji.onmouseout=function(){
        sjgm.style.display='none';
    }
     //用来拿数量
        let num; 
        qty.focus();
        qty.onblur = function(){ 
            var _qty=Number(qty.value);
            num = _qty;   
        }
      
     // //获取cookie
        let cookies = document.cookie;
        cookies = cookies.split('; ');
        cookies.forEach(item=>{
            let arr = item.split('=');
            if(arr[0]==='goodlist'){
                goodlist = JSON.parse(arr[1]);
            }
        })
    
    var goodlist = [];
    // 发起ajax请求
    // 根据id获取数据
            let xhr = new XMLHttpRequest();
            let status = [200,304];
            xhr.onreadystatechange = function(){
                if(status.includes(xhr.status)){
                    let data = JSON.parse(xhr.responseText);
                    console.log(data);
                    price.innerHTML='￥'+ data.price;
                    zhekou.innerHTML=(data.price/data.bfprice).toFixed(1) +'折';
                    bfprice.innerHTML= '参考价'+'<del>'+data.bfprice+'</del>';
                    fangda.src=data.imgurl;
                    fangda2.src=data.imgurl;
                  
                    buy.onclick=function(){
                        for(var i=0;i<goodlist.length;i++){

                            if(data.id==goodlist[i].id){
                                goodlist[i].qty++;
                                break;
                             }
                         }
                        if(i==goodlist.length){
                            good = {
                                id:data.id,
                                imgurl:data.imgurl,
                                name:data.cont,
                                qty:num,
                                price:data.price,
                                bfprice:data.bfprice,
                            }
                            goodlist.push(good);
                         } 
                         document.cookie='goodlist='+JSON.stringify(goodlist);
                        render();
                    }
                    
                    let shangpin1 = document.querySelector('.shangpin1');
                    let shangpin2 = document.querySelector('.shangpin2');
                    let xiaoji = document.querySelector('.xiaoji');
                    let xiaoji1 = document.querySelector('.xiaoji1');
                    var goodlist;
                    render();
                    function render(){
                         goodlist = Cookie.get('goodlist')||[];
                        if(typeof goodlist==='string'){
                        //* json字符串 -> 对象/数组：JSON.parse()
                        //
                        goodlist = JSON.parse(goodlist)
                        var total=0;
                        shangpin1.innerHTML=goodlist.map(item=>{
                            total+=item.price*item.qty;
                            return `
                                <li data-id=${item.id}>
                                    <img class="fl" src=${item.imgurl}> 
                                    <span>${item.name}</span></br>
                                    <span>&yen;${item.price}</span>
                                    <span>X${item.qty}</span>
                                </li>
                            `
                            }).join('')
                        xiaoji.innerHTML='小计：'+total;
                        xiaoji1.innerHTML='小计：'+total;
                        shangpin2.innerHTML=goodlist.map(item=>{
                            return `
                                <li data-id=${item.id}>
                                    <img class="fl" src=${item.imgurl}> 
                                    <span>${item.name}</span></br>
                                    <span>&yen;${item.price}</span>
                                    <span>X${item.qty}</span>
                                
                                </li>
                            `
                            }).join('')
                        }

                    }  
                }

            }
            xhr.open('get','../api/details.php?'+params,true);//readySate=1

            // 发起请求
            xhr.send();//readyState=2

             
             // 猜你喜欢
            let xihuan_b = document.querySelector('.xihuan_b');
             let xiangsi = document.querySelector('.xiangsi');
            let xhr2 = new XMLHttpRequest();//readySate=0
            let status2 = [200,304];
            // 当数据返回时触发
            xhr2.onreadystatechange = function(){
                // 3：接受数据（未接受完毕）
                // 4：数据接受完毕
                // console.log(xhr.readyState)
                if(status.includes(xhr2.status)){
                    let data = JSON.parse(xhr2.responseText)
                  xihuan_b.innerHTML = data.map(item=>{
                            return `
                                <li data-id=${item.id}>
                                    <img src=${item.imgurl}> 
                                    <p>${item.cont}</p>
                                    <span>&yen;${item.price}</span>
                                     <del><span>&yen;${item.bfprice}</span></del>
                                    <span class="fr">${(item.price/item.bfprice).toFixed(2)}折</span>
                                </li>
                            `
                        }).join('')
                    xiangsi.innerHTML = data.map(item=>{
                            return `
                                <li data-id=${item.id}>
                                    <img src=${item.imgurl}> 
                                    <p>${item.cont}</p>
                                    <span>&yen;${item.price}</span>
                                     <del><span>&yen;${item.bfprice}</span></del>
                                    <span class="fr">${(item.price/item.bfprice).toFixed(2)}折</span>
                                </li>
                            `
                        }).join('') 
                }

            }
            // 配置参数，建立与服务器的连接
            // get,post,put,delete
            xhr2.open('get','../api/details_xihuan.php',true);//readySate=1

            // 发起请求
            xhr2.send();





   
}) 

     