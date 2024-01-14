/@ Print the total population of countries using reduce function @/

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload=function(){
    let result = JSON.parse(request.response);

    let country = result.reduce((acc,ele)=>{
        return acc+ele.population},0)
        console.log(country);
    
}