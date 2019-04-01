<?php
function mdPass($psd){
    define('K','kfhakfhakjfabkj23md><?13da');
    $str=K.$psd.K;
    $str=md5($str);
    $str=substr($str,3,-2);
    $str=sha1($str);
    $str=substr($str,2,-3);
    return md5($str);
}
?>