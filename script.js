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
div.appendChild(h2)

h2.textContent = "New York City"

const p = document.createElement("p")
//console.log(p);
div.appendChild(p)

p.innerText = "New York is awesome"

const main = document.querySelector(".main")
main.lastElementChild.appendChild(div)


for(element of blogs){
  console.log(element)
}



  // Part 8


  // Part 9




});
