function Printer(nivo_tonera,dvostranoIspisivanje)
{
    this.nivo_tonera = nivo_tonera;
    this.dvostranoIspisivanje = dvostranoIspisivanje;
    this.ukupanBrojStranica = 0;
    if(this.nivo_tonera > 100)
    {
        this.nivo_tonera = 100;
    }
    if(this.nivo_tonera < 1)
    {
        this.nivo_tonera = 1;
    }
}
var oSamsung = new Printer(50,false);
var oEpson = new Printer(30,false);
var oCannon = new Printer(23,true);
var oHP = new Printer(40,true);

Printer.prototype.dodajBoju = function(dodaj)
{
    if(parseInt(this.nivo_tonera) + dodaj >100) 
    {
        this.nivo_tonera = 100;
    }
    else
    {
        this.nivo_tonera += dodaj;
    }
}
Printer.prototype.printaj = function(brStr)
{
    var permBrStr = brStr;
    while(brStr != 0)
    {
        brStr -= 1;
    
    if(this.dvostranoIspisivanje == true)
    {
        this.nivo_tonera = this.nivo_tonera -brStr*0.2;
        if(permBrStr%2 == 0)
        {
            this.ukupanBrojStranica +=1;
        }
        else if(brStr%2 !=0)
        {
            this.ukupanBrojStranica += Math.round(brStr/2) +1;
            
        }
    }
    else if(this.dvostranoIspisivanje == false)
    {
        this.nivo_tonera -= 0.1;
        this.ukupanBrojStranica +=1;
    }
}
}
Printer.prototype.dajUkupanBrojStranica = function()
{
    console.log(this.ukupanBrojStranica);
}
Printer.prototype.dajToner = function()
{
    console.log(this.nivo_tonera);
}
oCannon.dajToner();
oCannon.printaj(5);
oCannon.dajUkupanBrojStranica();
oCannon.dajToner();