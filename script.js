
//Muuttujat
//Suomen COVID tilastot löytyvät numerolla 118. Numeroa vaihtamalla saadan eri maiden tilastoja.
var countryid = 118;

const fiButton = document.getElementById("fi")

const usButton = document.getElementById("us")

const seButton = document.getElementById("se")

const noButton = document.getElementById("no")

//Kuuntelijat


fiButton.addEventListener("click", changeCountryFI);

usButton.addEventListener("click", changeCountryUS);

seButton.addEventListener("click", changeCountrySE);

noButton.addEventListener("click", changeCountryNO);










window.onload = function(){
    

    getStats();
}

    


function getStats(){
    //Valitaan tarvittavat tiedot. Maata voi vaihtaa käyttämällä countryid muuttujaa
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/' + countryid)
    
    .then(function(response) { return response.json() })


    .then(function(data) {
        let cases = data.location.latest.confirmed;
        let deaths = data.location.latest.deaths;
        let population = data.location.country_population;
        let country = data.location.country;

        document.getElementById('cases').innerHTML = "Tartunnat: " + cases;
        document.getElementById('deaths').innerHTML = "Kuolemat: " + deaths;
        document.getElementById('population').innerHTML = "Väkiluku: " + population;
        document.getElementById('country').innerHTML = "Maa: " + country;
    

        
    })

    .catch(function() {
        console.log("Virhe ladattaessa tietoja!");
    })
       

}


function changeCountryFI(){
    countryid = 118;
   getStats();
   
   
}
function changeCountryUS(){
    countryid = 250;
   getStats();
   
   
}
function changeCountrySE(){
    countryid = 238;
    getStats();
    
}
function changeCountryNO(){
    countryid = 202;
    getStats();
    
}
