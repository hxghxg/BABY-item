

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
    
            $('#hander').load('header_current.html');
            $('#nav').load('nav_current.html');
            $('#footer').load('footer.html');
         

              // 获取页面元素
            var countDown = document.getElementById('countDown');

            // 1）指定结束时间
            var end = '2018-5-1 14:50:40';

            // 进入如页面直接显示倒计时
            showTime();

            // 2）不断拿当前时间跟结束时间对比，计算差值
            var timer = setInterval(showTime,1000);
            function showTime(){
                // 获取当前时间，并计算差值(ms)
                var offset = Date.parse(end) - Date.now();

                // 转换成秒
                offset = Math.floor(offset/1000);

                // 5）倒计时结束时
                if(offset <= 0){
                    // 停止定时器
                    clearInterval(timer);
                    // * 隐藏倒计时
                    countDown.style.display = 'none';
                }

                // 3）把差值转换成《剩余时间》
                // 计算剩余时间
                var sec = offset%60;//50,5
                var min = Math.floor(offset/60)%60;
                var hour = Math.floor(offset/60/60)%24;
                var day = Math.floor(offset/60/60/24);

                // 补0操作
                sec = sec<10 ? '0'+sec : sec;
                min = min<10 ? '0'+min : min;
                hour = hour<10 ? '0'+hour : hour;
                // 倒计时写入页面
                countDown.innerHTML ='距离结束仅剩  '+ day + '天'+hour+'时'+min+'分'+sec+'秒';

            }

            /*
                ajax
                    * 发起一个ajax请求
                        1) new XMLHttpRequest()
                        4) onreadystatechange
                        2) open(type,url,async)
                        3) send()
            
                    *接受数据属性
                        * responseText 
             */
            
            let biqiang_b = document.querySelector('.biqiang_b');
            // 创建一个异步请求对象{} 
            let xhr2 = new XMLHttpRequest();//readySate=0
            let status2 = [200,304];
            // 当数据返回时触发
            xhr2.onreadystatechange = function(){
                // 3：接受数据（未接受完毕）
                // 4：数据接受完毕
                // console.log(xhr2.readyState)
                if(status2.includes(xhr2.status)){
                    let data2 = JSON.parse(xhr2.responseText)
               
                    biqiang_b.innerHTML = data2.map(item=>{
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
            xhr2.open('get','../api/list_bq.php',true);//readySate=1

            // 发起请求
            xhr2.send();//readyState=2



            let goodslist = document.querySelector('.goodslist');
            let zhekou = document.querySelector('.zhekou');
            let jiage = document.querySelector('.jiage');
            console.log(jiage);
            let xhr = new XMLHttpRequest();
            let status = [200,304];
            xhr.onreadystatechange = function(){
                if(status.includes(xhr.status)){
                    let data = JSON.parse(xhr.responseText);
                    show();
                    function show(){ 
                        goodslist.innerHTML = data.map(item=>{
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

                   // 价格排序 
                   jiage.onclick=function(){
                        for(var i=0;i<data.length;i++){
                            for( j=0;j<data.length-1;j++){
                                if(Number(data[j].price)>Number(data[j+1].price)){
                                    var temp = data[j];
                                    data[j] = data[j+1];
                                    data[j+1] = temp;
                                }
                            }
                        }
                        show();
                   } 
                   // 折扣排序
                   zhekou.onclick=function(){
                        for(var i=0;i<data.length;i++){
                            for( j=0;j<data.length-1;j++){
                                if(Number(data[j].price/data[j].bfprice)>Number(data[j+1].price/data[j+1].bfprice)){
                                    var temp = data[j];
                                    data[j] = data[j+1];
                                    data[j+1] = temp;
                                }
                            }
                        }
                        show();  
                   }
                    
                }

            }
            xhr.open('get','../api/list.php',true);
            xhr.send();


        goodslist.onclick = function(e){
            if(e.target.tagName.toLowerCase() === 'img'){
                let id = e.target.parentNode.dataset.id
                location.href="details.html?id="+id;
            }

        } 
       biqiang_b.onclick = function(e){
            if(e.target.tagName.toLowerCase() === 'img'){
                let id = e.target.parentNode.dataset.id
                location.href="details.html?id="+id;
            }

        } 
})
            
 