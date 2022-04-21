<?php
include "classes.php";

//$oZaposlenik1 = new Nastavnik();
//$oZaposlenik2 = new Nastavnik();
//$oZaposlenik3 = new Nastavnik();
//$oZaposlenik4 = new Nastavnik();

//var_dump($oZaposlenik1);
//var_dump($oZaposlenik2);
//var_dump($oZaposlenik3);
//var_dump($oZaposlenik4);

//echo "Hello".$oZaposlenik1 -> getIme().$oZaposlenik1 -> getPrezime()."(".$oZaposlenik1 -> getOib().")";
//echo $oZaposlenik1 -> Hello();
$nastavnik = new Nastavnik("Pero","Peric","82500702575");
$nastavnik -> Radi();
$predavac = new Predavac("Pero","Peric",12345678901);
$predavac -> DrziNastavu();
$asistent = new Asistent("Pero","Peric",12345678901);
$asistent -> DrziNastavu();
$asistent -> PripremiNastavu();
$asistent -> CuvajIspit();
$nastavnik -> provjera();

?>