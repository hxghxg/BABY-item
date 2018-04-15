<?php
    // 连接数据库
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'h5_1801';

    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    //获取查询结果集（集合）
    $result = $conn->query("select * from list limit 1,8");
    // 获取数据（使用查询结果集）
    $res = $result->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集，避免资源浪费
    $result->close();

    // 关闭数据库，避免资源浪费
    $conn->close();

    // var_dump($res);

    echo json_encode($res,JSON_UNESCAPED_UNICODE); 
?>
