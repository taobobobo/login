<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/4/1
 * Time: 19:35
 */
// print_r($_POST);
include('public.php');
if(!empty($_POST['name'])){
    $file=fopen('text.txt','w');
    $name=$_POST['name'];
    $password=mdPass($_POST['password']);
    $str=$name.'|'.$password;
    $result=fwrite($file,$str);
    if($result>0){
        echo "<script>alert('注册成功!');window.location.href='index.html';</script>";
    }else{
        echo "<script>alert('注册失败!');window.location.href='register.html';</script>";
    }
}