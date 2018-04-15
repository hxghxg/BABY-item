/* 
* @Author: Marte
* @Date:   2018-04-10 21:22:14
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-11 11:34:04
*/
/* 
* @Author: Marte
* @Date:   2018-04-08 21:47:51
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-10 18:03:19
*/

document.addEventListener('DOMContentLoaded',function(){ 
            
            /*
                倒计时
                    1）指定结束时间
                    2）不断拿当前时间跟结束时间对比，计算差值
                    3）把差值转换成《剩余时间》
                    4）拼接时间格式，写入页面
                    5）倒计时结束时
                        * 停止定时器
                        * 替换购买按钮
                        * 隐藏倒计时
             */
            
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
            let xhr = new XMLHttpRequest();//readySate=0
            let status = [200,304];
            // 当数据返回时触发
            xhr.onreadystatechange = function(){
                // 3：接受数据（未接受完毕）
                // 4：数据接受完毕
                // console.log(xhr.readyState)
                if(status.includes(xhr.status)){
                    let data = JSON.parse(xhr.responseText)
               
                    biqiang_b.innerHTML = data.map(item=>{
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
            xhr.open('get','../api/list_bq.php',true);//readySate=1

            // 发起请求
            xhr.send();//readyState=2

})