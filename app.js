'use strict';

// array to hold all of our Goats to track
Goat.allGoats = [];
var Totalcounter=0;
var table1= document.getElementById("table1");
// create objects for our Goats
function Goat(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    this.numberImageClicks=0;
    Goat.allGoats.push(this);
  
}

new Goat('Cruiser', 'img/cruisin-goat.jpg');
new Goat('Kissing', 'img/kissing-goat.jpg');
new Goat('Sassy', 'img/sassy-goat.jpg');
new Goat('Smiling', 'img/smiling-goat.jpg');
new Goat('Sweater', 'img/sweater-goat.jpg');

// need event listenter to track clicks of Goat images
var imgContainer1 = document.getElementById('goat-pic1');
var imgContainer2 = document.getElementById('goat-pic2');
var imgContainer3 = document.getElementById('goat-pic3');

function checkclicks()
{

    if(Totalcounter<=5)
    {
        imgContainer1.addEventListener('click', randomGoat);
        imgContainer2.addEventListener('click', randomGoat);
        imgContainer3.addEventListener('click', randomGoat);
        
    }
    else
    {
        addvotes();
        imgContainer1.removeEventListener('click', randomGoat);
        imgContainer2.removeEventListener('click', randomGoat);
        imgContainer3.removeEventListener('click', randomGoat);
    }
}


// display random goat images
function randomGoat() {
 
    checkclicks();
    var randomIdx = Math.floor(Math.random() * Goat.allGoats.length);
console.log(Goat.allGoats[randomIdx].filepath);
    this.src = Goat.allGoats[randomIdx].filepath;

    if(Goat.allGoats[randomIdx].filepath ===this.getAttribute('src'))
    {
        
        Goat.allGoats[randomIdx].numberImageClicks += 1;
        Totalcounter+=1;
    }
      

    
}
function addvotes()
{
    for(var i=0;i< Goat.allGoats.length;i++)
    {
        var row = document.createElement("tr");
        row.innerHTML = `<td>${Goat.allGoats[i].numberImageClicks} votes for ${Goat.allGoats[i].name}</td>`;
        table1.appendChild(row); 
         
        
        
    }
}

randomGoat();