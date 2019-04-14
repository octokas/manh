$( document ).ready(function() {
    // selection of the navigation elements
    var nav = document.querySelector('nav');

    // data from the JSON file set for retrieval
    var requestURL = 'menus-data.json';

    // creation of new request object instance from the XMLHttpRequest constructor
    var request = new XMLHttpRequest();

    // opening new request
    request.open('GET', requestURL);

    // setting responseType to JSON so that XHR knows the server returns JSON
    request.responseType = 'json';

    // then converted into JS object
    request.send();

    // waiting for the response to return from the server, then deals with it
    request.onload = function() {
        var verticalMenu = request.response;
        populateHeader(verticalMenu);
        showHeroes(verticalMenu);
      }
    /* 
        here we are storing the response to our request (available in the response property)
        in a variable called verticalMenu, this variable will not contact the JS object based
        on the JSON, and then we are passing the object to two functional calls, the first one
        filling the header and the second one with information for each part of the section
    */

    function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
    }

});