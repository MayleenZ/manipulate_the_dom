let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
const title = document.querySelector("#main-title")
console.log(title);

title.innerHTML = "Doms Homepage"

  // Part 2

body = document.querySelector("body")
body.style.backgroundColor = "#7DB9B6";


  // Part 3
const root = document.querySelector("html")
console.log(root);

const domFavList = document.querySelector("#favorite-things")
console.log(domFavList);

const lastLi = domFavList.lastElementChild
console.log(lastLi);
lastLi.remove()

  // Part 4
const specialTitle = document.querySelectorAll(".special-title")

for (element of specialTitle) {
  console.log(element);
  element.style.fontSize = "2em"
}

  // Part 5

  const pastList = document.querySelector("#past-races")
  console.log(pastList);

  const LA = pastList.firstElementChild
  //console.log(LA);
  const chicago = LA.nextElementSibling.nextElementSibling.nextElementSibling
  //console.log(chicago);
  chicago.remove()

  // Part 6
const li = document.createElement("li")
pastList.append(li)
li.innerText = "New York City"

  // Part 7
//div, h1, p
const blogs = document.querySelectorAll(".blog-post")
console.log(blogs);

const div = document.createElement("div")
console.log(div);

div.setAttribute("class", "blog-post purple")

const h2 = document.createElement("h2")
//console.log(h2);
div.append(h2)

h2.textContent = "New York City"

const p = document.createElement("p")
//console.log(p);
div.append(p)

p.innerText = "New York is awesome"

const main = document.querySelector(".main")
main.append(div)

const newBlogs = document.querySelectorAll(".blog-post")
console.log(newBlogs);



  // Part 8

  // Query select the #quote-titleID element and add a click event handler. That event handler should use the function randomQuote whenever #quote-title is clicked.

document.querySelector("#quote-title").addEventListener("click", randomQuote)


  // Part 9

const classes = document.getElementsByClassName("blog-post")
console.log(classes);

const classesArray = [...classes]
console.log(classesArray);


const oneClass = classes[0]
const twoClass = classes[1]
const threeClass = classes[2]
const fourClass = classes[3]
const fiveClass = classes[4]
const sixClass = classes[5]



for (let i = 0; i < classesArray.length; i++){
  console.log(classesArray[i]);
}



function toggP(){
  oneClass.classList.toggle("purple")
  twoClass.classList.toggle("purple")
  threeClass.classList.toggle("purple")
  fourClass.classList.toggle("purple")
  fiveClass.classList.toggle("purple")
  sixClass.classList.toggle("purple")
}

function toggR(){
  oneClass.classList.toggle("red")
  twoClass.classList.toggle("red")
  threeClass.classList.toggle("red")
  fourClass.classList.toggle("red")
  fiveClass.classList.toggle("red")
  sixClass.classList.toggle("red")
}



    document.addEventListener("mouseout", toggP)
    document.addEventListener("mouseenter", toggR)




});
