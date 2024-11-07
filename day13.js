const newCard=document.querySelector("div")
newCard.id="kohlicard"
newCard.innerHTML=`<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL60oNSL_RbdJUgChubOcZMBGhqcZi9OSsIw&s height="200px" width="200px"/>
<p>Kohli</p> <button>Explore More</button>`
newCard.style.border="2px solid black";
newCard.style.backgroundColor="lightblue";
newCard.style.display="inline-block";
newCard.style.padding="10px"
newCard.style.textAlign="center"

const card=document.querySelector("section")
card.id="chicken"
card.innerHTML=`<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrYR1UTiZ3QRm8oR_bQTnH3GFVgJBUCZtVRw&s height="200px" width="200px"/>
<p>Chicken</p>
<button>Explore More</button>`
card.style.border="2px solid black"
card.style.backgroundColor="lightblue";
card.style.display="inline-block";
card.style.padding="10px"
card.style.textAlign="center"

const card1=document.createElement("div")
card1.id="Rangerover"
card1.innerHTML=`<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hFSnZ-P3LN1sroj7wtIfWpXo6dYxVuw7Iw&s  height="200px" width="200px"/>
<p>Rangerover</p>
<button>Explore More</button>`
card1.style.border="2px solid black"
card1.style.backgroundColor="lightblue";
card1.style.display="inline-block";
card1.style.padding="10px"
card1.style.textAlign="center"
document.body.appendChild(card1)

const card2=document.createElement("section")
card2.id="Ring"
card2.innerHTML=`<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQpDNRWYXjLpxwH5bzy0F9cBFzzDA9pa9xA&s  height="200px" width="200px"/>
<p>Ring</p>
<button>Explore More</button>`
card2.style.border="2px solid black"
card2.style.backgroundColor="lightblue";
card2.style.display="inline-block";
card2.style.padding="10px"
card2.style.textAlign="center"
document.body.appendChild(card2)



