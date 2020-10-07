function myFunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("state").innerHTML = "You selected: " + x;


  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://covid-19-global-tracker-with-regional-data.p.rapidapi.com/api/covid/regionalDataByCountry/US",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid-19-global-tracker-with-regional-data.p.rapidapi.com",
      "x-rapidapi-key": "705314089bmsh937500f2cfcffc1p1a50a8jsn1209ec5c3b61",
      "x-authorization": "6179002e-6646-4852-be37-572758a58cbb"
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response.data[0].casesCount);
    for (i = 0; i < response.data.length; i++) {
      // console.log(response.data[i].casesCount);

      if (x == response.data[i].regionName) {
        console.log(response.data[i].casesCount);
        document.getElementById("cases").innerHTML = "Confirmed Cases: " + response.data[i].casesCount;
        document.getElementById("deceased").innerHTML = "Total Deaths: " + response.data[i].deceasedCount;
        document.getElementById("recovered").innerHTML = "Recovered Cases: " + response.data[i].recoveredCount;
      }

    }
    console.log(response);

  });

}

function newFunction() {
  var settings2= 
{ "async": true,
"crossDomain": true,
"url": "https://covid-19-global-tracker-with-regional-data.p.rapidapi.com/api/covid/globalData",
"method": "GET",
"headers": {
    "x-rapidapi-host": "covid-19-global-tracker-with-regional-data.p.rapidapi.com",
    "x-rapidapi-key": "09d06cecffmsh87ca121083d57d0p1ebd57jsn0be05f50ffbf",
    "x-authorization": "6179002e-6646-4852-be37-572758a58cbb"
}
}

$.ajax(settings2).done(function (response) { 

  $("#totalUSCases").text(response.data[0].casesCount)
  $("#totalUSDeaths").text(response.data[0].deceasedCount);
  $("#recUSCount").text(response.data[0].recoveredCount)
})

}
newFunction();

