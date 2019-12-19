<?php
$str_csv = file_get_contents('list.csv');

$tab_csv = explode(PHP_EOL, $str_csv);
$nb_elem = count($tab_csv); 
$i = 1;
while ($i < $nb_elem) {
	if ($tab_csv[$i] === $_POST['todo']){
		unset($tab_csv[$i]);
		$nb = $i;
	}
	if (isset($nb) && isset($tab_csv[$i]) && $tab_csv[$i] !== ''){
		$elem_csv = explode(';', $tab_csv[$i]);
		$elem_csv[0]--;
		$tab_csv[$i] = implode(';', $elem_csv);
	}
	$i++;
}

if ($nb_elem === 2)
	$str_csv = '';
else
	$str_csv = implode(PHP_EOL, $tab_csv);
file_put_contents('list.csv', $str_csv);
