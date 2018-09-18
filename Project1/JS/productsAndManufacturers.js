// how do I organize this data
class Manufacturer {
  constructor(name, link, description, image) {
    this.name = name;
    this.link = link;
    this.description = description;
    this.logo = image;
  }
}

var admiralCraft = new Manufacturer("Admiral Craft", "www.admiralcraft.com",
  "Aluminum and S/S Cookware, Buffetware, Chafers, Flatware &amp; Kitchen Utensils,Gas and Electric Equipment",
  "http://www.hdsheldon.com/wp-content/uploads/2015/09/Adcraft-300x95.jpg",
  "http://www.hdsheldon.com/documents/Adcraft - LPL - 2018.xlsx")
var b = admiralCraft
var c = admiralCraft
var d = admiralCraft
var e = admiralCraft
var f = admiralCraft

var manufacturers = [admiralCraft, b, c, d, e, f]
var filterOptions = document.getElementsByClassName("filterOptions");
var companySquares = manufacturers.length

filterOptions[0].addEventListener("click", function() {
  addManufacturers(manufacturers)
})


function addManufacturers(manufacturers) {
  addListElement(companySquares)
  var logos = document.getElementsByClassName('logo');
  // we want to pass in a list of manufacturers
  // now we want to post the manufacturers
  // add Manufacturer Logo
  addName(manufacturers)
  addLogo(manufacturers)
}

function addListElement(companySquares) {
  for (var i = 0; i < companySquares; i++) {
    // create an li
    var li = document.createElement('li');
    // add logo class to the li
    li.classList.add("logo");
    // create an image element
    var img = document.createElement('img');
    // append the img element as a child to the li
    li.appendChild(img)
    console.log(li)
    // return the element inside the <ul id="logos">
    var logos = document.getElementById("logos");
    logos.appendChild(li)
  }
}


function addName(manufacturers) {
  var logos = document.getElementsByClassName('logo');
  for (var i = 0; i < logos.length; i++) {
    var textNode = document.createTextNode(manufacturers[i].name)
    logos[i].children[0].appendChild(textNode)
  }
}

function addLogo(manufacturers) {
  var logos = document.getElementsByClassName('logo');
  for (var i = 0; i < manufacturers.length; i++) {
    logos[i].children[0].src = manufacturers[i].logo
  }
}

// var data = [
//   "Admiral Craft", "Advance Tabco", "Allpoints", "Aurel",
//   "Beverage Air", "Blue Star", "Bon Chef", "Broaster",
//   "Carlisle", "Champion", "ChillTech", "Co-Rect Bar Products",
//   "Conair Hospitality", "Dormont Manufacturing Co.", "Edlund",
//   "Emeco", "Federal Industries", "Fisher Manufacturing Corp",
//   "Focus Food Service", "Globe Food Equipment",
//   "Hatco Corporation", "Homer Laughlin China",
//   "Howard McCray", "Jet-Tech", "Johnson-Rose", "K-Tech",
//   "Kold-Draft", "Old Hickory", "Ovention", "Piper", "Salvajor",
//   "San Jamar", "Service Ideas", "Silver King", "Smokaroma",
//   "Sunkist", "Tafco", "Tomlinson", "Update International",
//   "Vulcan", "Waring", "Weston", "Wolf", "Zesto"
// ]



// console.log(filterOptions)
// when a filter option is clicked on we want
// to adjust our logos around
