/* Get all the countries from Asia continent /region using Filter function */

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload=function(){
    let result = JSON.parse(request.response);
    
    let country = result.filter((Element)=>Element.region == 'Asia')

    let final = country.map((ele)=>{
        console.log(`CountryName:${ele.name.common}   Region:${ele.region}`)
    })
}
