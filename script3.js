// Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload=function(){
    var data = JSON.parse(request.response);
    console.log(data);

    var country = data.filter((Element)=>Element.currencies?.USD?.name == 'United States dollar')
    console.log(country);
}

    
        
    
