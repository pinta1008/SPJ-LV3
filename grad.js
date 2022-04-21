function Grad(nazivGrada, brojStanovnika,Latituda,Longituda)
{
    this.nazivGrada = nazivGrada;
    this.brojStanovnika = brojStanovnika;
    this.Latituda = Latituda;
    this.Longituda = Longituda;
}
var oVirovitica = new Grad("Virovitica",21291,45.83,17.38);
var oSlatina = new Grad("Slatina",14819,45.42,17.42);
var oBjelovar = new Grad("Bjelovar",36433,45.53,16.50);
var oOsijek = new Grad("Osijek",96848,45.33,18.41);
var oZagreb = new Grad("Zagreb",769944,45.82,15.97);

Grad.prototype.dajVelicinuGrada = function()
{
    if(this.brojStanovnika < 30000)
    {
        console.log("Grad ima manje od 30000 stanovnika");
    }
    else if(this.brojStanovnika > 30000 && this.brojStanovnika < 200000)
    {
        console.log("Grad ima vise od 30tisuca, a manje od 200tisuca stanovnika");

    }
    else
    {
        console.log("Grad ima vise od 200tisuca stanovnika");
    }
}
oVirovitica.dajVelicinuGrada();

function dajUdaljenost(grad1,grad2)
{
    lat1 = grad1.Latituda;
    lng1 = grad1.Longituda;
    lat2 = grad2.Latituda;
    lng2 = grad2.Longituda;
    function deg2rad(deg)
    {
    return deg * (Math.PI/180);
    }
    function square(x)
    {
    return Math.pow(x,2);
    }
    var r = 6371;
    lat1 = deg2rad(lat1);
    lat2 = deg2rad(lat2);
    var lat_dif = lat2 - lat1;
    var lng_dif = deg2rad(lng2-lng1);
    var a = square(Math.sin(lat_dif/2)) + Math.cos(lat1) * Math.cos(lat2) * square(Math.sin(lng_dif/2));
    var d = 2*r*Math.asin(Math.sqrt(a));
    console.log(d);
    return d;
    

}
dajUdaljenost(oVirovitica,oZagreb);



