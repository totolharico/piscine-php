<?php

echo $_POST['todo'];

$list = ['1'=>'lol', '2'=>'mdr', '3'=>'xd'];

$fp = fopen('list.csv', 'w');


fputcsv($fp, $list);

fclose($fp);