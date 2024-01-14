/Print the following details name, capital, flag using forEach function/

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload=function(){
    let data = JSON.parse(request.response);
    console.log(data);

   let res =  data.forEach((element) =>{console.log(`Name is:${element.name.common}: Capital is: ${element.capital}:Flag is: ${element.flags.png
   }`)    
    });
    

}