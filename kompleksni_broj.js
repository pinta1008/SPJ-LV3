function KompleksniBroj(realni, imaginarni)
{
    this.realni = realni;
    this.imaginarni = imaginarni;
}
var oKompl1 = new KompleksniBroj(4,2);
var oKompl2 = new KompleksniBroj(3,4);
var oKompl3 = new KompleksniBroj(6,9);
var oKompl4 = new KompleksniBroj(1,5);
var oKompl5 = new KompleksniBroj(8,7);

var _kb = 
{
    ispisiKompleksniBroj : function(komplBr)
    {
        return "z = " + komplBr.realni + "+" + komplBr.imaginarni + "i";
    },
    zbroji : function(kBr1,kBr2)
    {
        return "z = " + parseInt(kBr1.realni + kBr2.realni) + "+" + parseInt(kBr1.imaginarni + kBr2.imaginarni) + "i";
    },
    pomnozi : function(num1, num2)
    {
        var real = (num1.realni * num2.realni) - (num1.imaginarni * num2.imaginarni);
        var imaginary = (num1.realni * num2.realni) + (num1.imaginarni * num2.imaginarni);
        return "z = " + parseInt(real) + "+" + parseInt(imaginary) + "i";
    }
}
console.log(_kb.pomnozi(oKompl1,oKompl2));
function prikaziRez()
{
    var realprvi = document.getElementById('realniPrvi').value;
    var imagprvi = document.getElementById('imaginarniPrvi').value;
    var realdrugi = document.getElementById('realniDrugi').value;
    var imagdrugi = document.getElementById('imaginarniDrugi').value;

    var operacija = document.getElementById('operacija');
    var izbor = operacija.value;

    if(izbor == "Zbrajanje")
    {
        var kb1 = new KompleksniBroj(parseInt(realprvi),parseInt(imagprvi));
        var kb2 = new KompleksniBroj(parseInt(realdrugi),parseInt(imagdrugi));
        var rez = _kb.zbroji(kb1,kb2);
        document.getElementById('treci').value = rez;

    }
    else if(izbor == "Mnozenje")
    {
        var kb1 = new KompleksniBroj(parseInt(realprvi),parseInt(imagprvi));
        var kb2 = new KompleksniBroj(parseInt(realdrugi),parseInt(imagdrugi));
        var rez = _kb.pomnozi(kb1,kb2);
        document.getElementById('treci').value = rez;
    }
}
