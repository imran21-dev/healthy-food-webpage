

const gridImgArray = [
  {url : "images/chicken-skewers-with-slices-sweet-peppers-dill.jpg"},
  {url : "images/crispy-fried-chicken-plate-with-salad-carrot.jpg"},
  {url : "images/delicious-fried-chicken-plate.jpg"},
  {url : "images/thai-food-tom-yum-kung-river-prawn-spicy-soup.jpg"},
  {url : "images/front-view-meat-cutlets-long-formed-with-lemon-slices.jpg"},
  {url : "images/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg"},


]


const foodName = [
{name : "Chicken Skewers",
  rating : "⋆ 5.0"
},
{name : "Crispy Fried Chicken",
  rating : "⋆ 4.9"
},
{name : "Fried Chicken",
  rating : "⋆ 5.0"
},
{name : "Spicy Soup",
  rating : "⋆ 4.9"
},
{name : "Meat Cutlets",
  rating : "⋆ 4.8"
},
{name : "Penne Pasta",
  rating : "⋆ 4.5"
}
]
const foodPrice = [
       {price : "$20.50"},
       {price : "$12.50"},
       {price : "$14.50"},
       {price : "$10.00"},
       {price : "$30.00"},
       {price : "$20.00"},
]










function checkAllProjects(){
  const showCase = document.getElementById("product-container")
  // const showCaseSingle = document.getElementById("product-cart")
  const scDiv = document.createElement("div")
  
 for (let index=0 ; index<6 ; index++) {



  const firstUrl = gridImgArray[index]
  const firstUrlLink = firstUrl.url
  const scDiv = document.createElement("div")
    const newProductCart= scDiv.classList.add("product-cart") 
        scDiv.innerHTML= `<img src=${firstUrlLink}>`
        scDiv.style.display = "block"



        const foodName1 = foodName[index]
        const foodNameInfo =foodName1.name
        const foodRateInfo = foodName1.rating
        const foodNameDiv = document.createElement("div")          
        const foodNameh4 = document.createElement("h4") 
              foodNameh4.innerText = foodNameInfo 
        const foodNameh5 = document.createElement("h5")
               foodNameh5.innerText = foodRateInfo 
               foodNameDiv.appendChild(foodNameh4)
               foodNameDiv.appendChild(foodNameh5)
         foodNameDiv.classList.add("product-cart-sec1")
         scDiv.appendChild(foodNameDiv)
        
         const foodPriceDiv = document.createElement("div")
         const button = document.createElement("BUTTON")
               button.innerText = "Add To Cart"
               button.classList.add("product-btn")
               foodPriceDiv.classList.add("product-cart-sec2")
               foodPriceDiv.appendChild(button)
             

                scDiv.appendChild(foodPriceDiv)

                const firstPrice = foodPrice[index]
                const mainFoodPrice = firstPrice.price

         const foodPriceh3 = document.createElement("h3")  
                foodPriceh3.innerText = mainFoodPrice  
                foodPriceDiv.appendChild(foodPriceh3)   


        
      showCase.appendChild(scDiv) 

 }


 
 


 
}










function getData(event){
    event.preventDefault()
    const email = event.target.email.value
    
    const paragraph = document.createElement("p")
    paragraph.innerText = "Your email : " + email

    const pDiv = document.getElementById("script-p")
     pDiv.appendChild(paragraph)
   
    
    console.log(paragraph)
}



