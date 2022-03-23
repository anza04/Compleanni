const FedericoAnzani = {anno: 2004, mese: 06, giorno: 14, nome:"Federico Anzani"};
const LorenzoColombo = {anno: 2004, mese: 05, giorno: 16, nome:"Lorenzo Colombo"};
const LeonardoBargna = {anno: 2004, mese: 08, giorno: 10, nome:"Leonardo Bargna"};
const AlessandroBroggi = {anno: 2004, mese: 11, giorno: 15, nome:"Alessandro Broggi"};
const NicoleBelcastro = {anno: 2004, mese: 04, giorno: 22, nome:"Nicole Belcastro"};
const AlessandraMenghi = {anno: 2004, mese: 03, giorno: 18, nome:"Alessandra Menghi"};

var db = [FedericoAnzani, LorenzoColombo, LeonardoBargna, AlessandroBroggi, NicoleBelcastro, AlessandraMenghi];

document.getElementById("cerca").addEventListener("click", ()=>{
    var i=0;
    var giornoIn = document.getElementById("giornoIn").value;
    var meseIn = document.getElementById("meseIn").value;
    var annoIn = document.getElementById("annoIn").value
    while(i<db.length)
    {
        if( db[i].giorno == giornoIn && db[i].mese == meseIn && db[i].anno == annoIn)
        {
            document.getElementById("results").innerText="Il " + giornoIn+"/"+meseIn+"/"+annoIn + " è il compleanno di: " + db[i].nome;
        }
        i=i+1;
    }
})

    