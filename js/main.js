
// global function
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
function items (item){
  for(let i=0 ;i<item.length;i++){
    let box =document.createElement('div');
    box.className="box-item";
    let img=document.createElement('img');
    img.src=`image/${item[i].category}/${item[i].name}.gif`;
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
    order.className='order btn';
    order.href=""
    let orderText= document.createTextNode('Order Now');
    order.appendChild(orderText);
    box.appendChild(order);
    boxes.appendChild(box);
  }
};
// nav bar
let bar= document.getElementById("bar");
let navLinks= document.getElementById("links-icons");
let navValue=false;
// array of links
let links =Array.from(document.querySelectorAll(".link"));
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
let signboardStart=0;
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
// let menuBar=Array.from(document.querySelectorAll(".link-menu"));
// addActive(menuBar);
let pizza = [
  {
    name:"capriccosa",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"180 LE",
    category:'pizza'
  },
  {
    name:"carbonara",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"200 LE",
    category:'pizza'
  },
  {
    name:"dlablo",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"150 LE",
    category:'pizza'
  },
  {
    name:"margherita",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"210 LE",
    category:'pizza'
  },
  {
    name:"pepperoni",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"100 LE",
    category:'pizza'
  },
  {
    name:"prosciutto",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"130 LE",
    category:'pizza'
  },
  {
    name:"saporita",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"190 LE",
    category:'pizza'
  },
  {
    name:"vicent",
    pra:"Classic marinara sauce, authentic old-world pepperoni, all-natural...",
    price:"150 LE",
    category:'pizza'
  }
];
let boxes= document.getElementById('boxes');
items(pizza);
let boxItem=document.getElementsByClassName('box-item');
// menuBar[1].onclick=()=>{
//   for(let n = 0 ;n<boxItem.length;n++){
//     boxItem[0].remove()
//   }
// }
// for(let i =0 ; i<menuBar.length;i++){
//   menuBar[i].onclick=()=>{
//     console.log(menuBar[i])
//   };
// };