// get element
// navbar
let bar= document.getElementById("bar");
let navLinks= document.getElementById("links-icons");
let links =Array.from(document.querySelectorAll(".link"));
let navValue=false;
// signboard
let signboardImg= document.getElementById("signboard-img");
let signboardTitle= document.getElementById("signboard-title");
let signboardOffer= document.getElementById("signboard-offer");
let signboardElement=[
  {
  name:"capriccosa",
  offer:"40%",
},
{
  name:"carbonara",
  offer:"38%",
},
{
  name:"dlablo",
  offer:"50%",
}
];
// menu
let menuBar=Array.from(document.querySelectorAll(".link-menu"));
let menuContent= document.getElementById('content');
let burgerBtn=document.getElementById('burger-btn');
let pizzaBtn=document.getElementById('pizza-btn');
let signboardStart=0;
let pizza = [
  {
    name:"capriccosa",
    src:".gif",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"180 LE",
    category:'pizza'
  },
  {
    name:"carbonara",
    src:".gif",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"200 LE",
    category:'pizza'
  },
  {
    name:"dlablo",
    src:".gif",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"150 LE",
    category:'pizza'
  },
  {
    name:"margherita",
    src:".gif",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"210 LE",
    category:'pizza'
  },
  {
    name:"pepperoni",
    src:".gif",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"100 LE",
    category:'pizza'
  },
  {
    name:"prosciutto",
    src:".gif",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"130 LE",
    category:'pizza'
  },
  {
    name:"saporita",
    src:".gif",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"190 LE",
    category:'pizza'
  },
  {
    name:"vicent",
    src:".gif",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"150 LE",
    category:'pizza'
  }
];
let burger = [
  {
    name:"diablo",
    src:".png",
    pra:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ",
    price:"100 LE",
    category:'burger'
  },
  {
    name:"florence",
    src:".png",
    pra:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ",
    price:"250 LE",
    category:'burger'
  },
  {
    name:"marghrita",
    src:".png",
    pra:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ",
    price:"150 LE",
    category:'burger'
  },
  {
    name:"milano",
    src:".png",
    pra:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ",
    price:"200 LE",
    category:'burger'
  },
  {
    name:"roma",
    src:".png",
    pra:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ",
    price:"90 LE",
    category:'burger'
  },
  {
    name:"venetia",
    src:".png",
    pra:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ",
    price:"100 LE",
    category:'burger'
  },
  {
    name:"verona",
    src:".png",
    pra:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ",
    price:"130 LE",
    category:'burger'
  },
  {
    name:"vincent",
    src:".png",
    pra:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ",
    price:"140 LE",
    category:'burger'
  }
];
// function to add and remove active from element
function addActive(arr){
  for(let i=0;i<arr.length;i++){
    arr[i].onclick=()=>{
      for(let n=0;n<arr.length;n++){
        arr[n].classList.remove("active");
      };
      arr[i].classList.add("active");
    };
  };
};
// function to add item in menu
function items (item){
  let mainBox=document.createElement('div');
  mainBox.id="boxes";
  for(let i=0 ;i<item.length;i++){
    let box =document.createElement('div');
    box.className="box-item";
    let img=document.createElement('img');
    img.src=`image/${item[i].category}/${item[i].name}${item[i].src}`;
    box.appendChild(img);
    let title = document.createElement('h3');
    title.className='title'
    let titleText = document.createTextNode(item[i].name);
    title.appendChild(titleText);
    box.appendChild(title);
    let pra = document.createElement('p');
    pra.className='pra';
    let praText=document.createTextNode(item[i].pra);
    pra.appendChild(praText);
    box.appendChild(pra);
    let price=document.createElement('p');
    price.className='price';
    let priceText=document.createTextNode(item[i].price);
    price.appendChild(priceText);
    box.appendChild(price);
    let order=document.createElement('a');
    order.href='#'
    order.className='order order-now btn';
    let orderText= document.createTextNode('Order Now');
    order.appendChild(orderText);
    box.appendChild(order);
    mainBox.appendChild(box);
    menuContent.appendChild(mainBox);
  }
};
// nav bar
// show and hide navbar mobile
bar.onclick=()=>{
  navValue=!navValue;
  if(navValue === true){
    navLinks.style.right="10px";
    navLinks.style.opacity="1";

    bar.classList.add("active");
  }else{
    navLinks.style.right="0";
    navLinks.style.opacity="0";
    bar.classList.remove("active");
  };
};
// add active to links of navbar
addActive(links);
// signboard
setInterval(()=>{
  signboardImg.src=`image/pizza/${signboardElement[signboardStart].name}.gif`;
  signboardTitle.innerHTML=`${signboardElement[signboardStart].name}`;
  signboardOffer.innerHTML=`${signboardElement[signboardStart].offer} off`;
  signboardStart++
  if(signboardStart == signboardElement.length){
    signboardStart=0;
  }
},7000)
// menu
items(pizza);
burgerBtn.onclick=()=>{
  let boxes =document.getElementById('boxes');
  boxes.remove();
  items(burger);
};
pizzaBtn.onclick=()=>{
  let boxes =document.getElementById('boxes');
  boxes.remove();
  items(pizza);
};
console.log('this wep site made by mohamed adel');
