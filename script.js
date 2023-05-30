function addToCart(cardId) {

  var cardElement = document.getElementById(cardId);   
  var productName = cardElement.querySelector(".productName").innerHTML;   
  var productPrice = cardElement.querySelector(".productPrice").innerHTML;    
  
  console.log(productName + " " + productPrice);
  
  let product = {
  name: productName,
  price: productPrice, 
  quantity: 1   };
}