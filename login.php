<?php
include('public.php');
if(!empty($_GET['name'])){
    $file=file('text.txt');
    print_r($file);
    $arr=explode('|',$file[0]);
    $name=$_GET['name'];
    $psd=mdPass($_GET['password']);
    if($name==$arr[0] && $psd==$arr[1]){
         echo "<script>window.location.href='suc.html';</script>";
    }else if($name!=$arr[0]){
        echo "<script>alert('用户不存在!');window.location.href='index.html';</script>";
    }else if($psd!=$arr[1]){
        echo "<script>alert('密码不正确!');window.location.href='index.html';</script>";
    }
    else{
        echo "<script>alert('登录失败!');window.location.href='index.html';</script>";
    }
}
?>
