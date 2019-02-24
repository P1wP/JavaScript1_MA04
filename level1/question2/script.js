


// get all elements in header and section
var header = document.querySelector('header');
var section = document.querySelector('section');
        
// get JSON object developer.mozilla.org tutorial
var requestURL = 'https://jsonplaceholder.typicode.com/todos';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
            
    var res = request.response;
    populateHeader(res);
    toDoElements(res);   
};
        
function populateHeader(result) {
   var myH1 = document.createElement('h1');
   myH1.textContent = "TODO CARDS";
   header.appendChild(myH1);                    // append to html header

   var myPara = document.createElement('p');
   myPara.textContent = "Almost powerd by pure JavaScript";
   header.appendChild(myPara);                  // append to html heade
    
   
   
}
        
function toDoElements(result) {
    
    //make btns
    
   var amount = 14;                             // TOTAL NUMBER OF BUTTONS
   var count = 0;
   var btnContainer = document.createElement('div');
   btnContainer.setAttribute('ID', "btns");
   for (count; count < amount; count++) {
       var userNumb = count + 1;
       var button = document.createElement('button');
       button.textContent = "USER " + userNumb;
       

       // add ID to btn
       button.setAttribute('ID', "btn" + count);
       btnContainer.appendChild(button);
       section.appendChild(btnContainer);
       
    }
   
   
   // show and hide cards by users
   // USER 1    
   document.getElementById('btn0').addEventListener('click', function() {
        var hide = document.getElementsByClassName("1");
        for (var i=0; i < hide.length; i++){
            if (hide[i].style.display === "none") {
                hide[i].style.display = "inline-block";
            } else {
                hide[i].style.display = "none";
            }
            
        }     
   }, false);
    
    /* Plan to code the rest of the buttons. maybe in a for loop. to shorten code. */
       
       
    
    // MAKE ALL CARDS
    for (var i = 0; i < result.length; i++) {
        // Create HTML tags
        var container = document.createElement('article');
        var userIDs = document.createElement('h2');
        var idNr = document.createElement('p');
        var myTitle = document.createElement('p');
        var complete = document.createElement('p');
        var myDiv = document.createElement('div');




        // Add value from JSON to HTML
        userIDs.textContent = 'USERID: ' +result[i].userId;
        idNr.textContent = 'ID: ' + result[i].id;
        myTitle.textContent = 'TITLE: ' + result[i].title;
        complete.textContent = result[i].completed;

        // Append all to aricle element(container). 
        container.appendChild(userIDs);
        container.appendChild(idNr);
        container.appendChild(myTitle);
        container.appendChild(myDiv);
        myDiv.appendChild(complete);
        
        // append all to section parrent element(<section>) in index.html
        section.appendChild(container);
        
        // Add Class to div complete/uncomplete
        var trueFalse = result[i].completed;
        myDiv.setAttribute("CLASS", trueFalse);
        
        // Replace paragraph in myDiv
        if (complete.textContent === 'true'){
            complete.textContent = "Complete";
        }else {
            complete.textContent = "Uncomplete";
        }
        
        

        // Add ID to Article
        var articles = result[i].userId;
        container.setAttribute("CLASS", articles);
        
       
       
       

    }
}