/* Print the country which uses US Dollars as currency.*/

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload=function(){
    let data = JSON.parse(request.response);
    console.log(data);

    let country = data.filter((ele)=>ele.currencies?.USD)

    let final = country.map((ele)=>{
        console.log(`CountryName:${ele.name.common}`)
    })

}

    
        
    
