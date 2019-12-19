<?php

$str_csv = file_get_contents('list.csv');

$tab_csv = explode(PHP_EOL, $str_csv);

$id = count($tab_csv);

$str_csv = $id . ';' . $_POST['todo'] . PHP_EOL;
 
file_put_contents('list.csv', $str_csv, FILE_APPEND);

echo json_encode($str_csv);