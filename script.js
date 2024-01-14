// Get all the countries with a population of less than 2 lakhs using Filter function //

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload=function(){
    let result = JSON.parse(request.response);
    
    let country = result.filter((Element)=>Element.population < 200000);
    let final = country.map((ele)=>{
        return ele.name.common
    })
    console.log(final);
}
