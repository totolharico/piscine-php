<?php
$str_csv = file_get_contents('list.csv');

$tab_csv = explode(PHP_EOL, $str_csv);

echo json_encode($tab_csv);