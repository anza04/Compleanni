var db = [
    {anno: 2004, mese: 06, giorno: 14, nome:"Federico Anzani"},
    {anno: 2004, mese: 05, giorno: 16, nome:"Lorenzo Colombo"},
    {anno: 2004, mese: 08, giorno: 10, nome:"Leonardo Bargna"}, 
    {anno: 2004, mese: 10, giorno: 15, nome:"Alessandro Broggi"},
    {anno: 2004, mese: 04, giorno: 22, nome:"Nicole Belcastro"},
    {anno: 2004, mese: 03, giorno: 18, nome:"Alessandra Menghi"},
    {anno: 1971, mese: 06, giorno: 06, nome:"Alessandro Anzani"},
    {anno: 1971, mese: 11, giorno: 13, nome:"Cristina Montorfano"},
    {anno: 2004, mese: 01, giorno: 15, nome:"Stefano Fasola"},
    {anno: 2012, mese: 01, giorno: 15, nome:"Giacomo Anzani"},
    {anno: 1996, mese: 06, giorno: 13, nome:"Rebecca Meroni"},
    {anno: 1999, mese: 01, giorno: 08, nome:"Elisa Meroni"}
];

document.getElementById("cerca").addEventListener("click", ()=>{
    var i=0;
    var trovato=0;
    var giornoIn = document.getElementById("giornoIn").value;
    var meseIn = document.getElementById("meseIn").value;
    var annoIn = document.getElementById("annoIn").value

    document.getElementById("results").innerText="";

    while(i<db.length)
    {
        if( db[i].giorno == giornoIn && db[i].mese == meseIn)
        {
            document.getElementById("results").innerText="Il " + giornoIn+"/"+meseIn+"/"+annoIn + " è il compleanno di: " + db[i].nome;
            trovato=1;
        }
        i=i+1;
    }

    if(trovato==0)
    {
        document.getElementById("results").innerText="Il " + giornoIn+"/"+meseIn+"/"+annoIn + " non è il compleanno di nessuno ";
    }
})


/*
var vet = ["Federico Anzani 24/3/2004", "Leonardo Bargna 10/8/2004"];

const oggi = new Date();
var giorno = oggi.getDate();
var mese = oggi.getMonth()+1;

for(i=0;i<vet.length;i++)
{
    nome_cognome_data = vet[i].split(' ');

    giorno_mese_anno = nome_cognome_data[2].split('/');

    if(giorno_mese_anno[0]==giorno && giorno_mese_anno[1]==mese)
    {
        alert("Oggi è il compleanno di "+nome_cognome_data[0]+" "+nome_cognome_data[1]+"!!!");
    }    
}
*/

    