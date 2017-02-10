//created a global variable called "total" that will be used in our counter/total function
var total = 0;

//Initialized Objects on our shopping list and gave them all name properties and price properties
var condiment = {
  name: "Chipotle Mayo",
  price: 3.79
};
var protein = {
  name: "Spicy Chik'n Patty",
  price: 3.33
};
var produce = {
  name: "Cilantro",
  price: 1.15
};
var dessert = {
  name: "Dark Chocolate Bar",
  price: 2
};

//created an array called shoppingCart to contain the objects on our shopping list
var shoppingCart = [condiment, protein, produce, dessert];

//created a div element called receiptPaper to contain our shopping list and placed it within the body of our HTML
var receiptPaper = document.createElement("div");

//gave receiptPaper an id of receiptContainer and placed it within the body of the DOM using the appendChild method
receiptPaper.id = "receiptContainer";
document.body.appendChild(receiptPaper);

// gave our receiptPaper a background color of pink to differentiate it from the rest of the page
receiptContainer.style = "background-color: pink;"

// I don't think this variable is necessary  so I commented it out -> var receiptContent = document.getElementById("receiptContainer");

//created a variable called shoppingList and initialized it to create an unordered list. used the appendChild method to place the shopping list inside of our parent div element with the id receiptContainer. preemptively set the background color of the 
var shoppingList = document.createElement("ul");
receiptContainer.appendChild(shoppingList);

shoppingList.style = "background-color: blue;"


//created a forEach loop for our shoppingCart array to perform specific tasks for every item on our shopping list

shoppingCart.forEach(function(items) {
    
    //created a variable called shoppingListItem, gave it the value of a list item element, & used the textContent method to place each span within that list item but it is not showing up in the DOM so I commented it out for now
    //var shoppingListItem = document.createElement("li");
    //shoppingListItem.textContent = "nameSpan" + "priceSpan"
                    
                //console.log(items.name + ", $" + items.price.toFixed(2)); <- don't need this console.log anymore since we are placing these values in spans 
              
   //every time this forEach iterates, it reassigns the global variable "total" to the total price of all the shopping list objects
    total += items.price;
    
    //Created a variable to represent our item name,known as itemName, created a blank element called "textContent". used the appendChild method to add content to our empty element. used className property to give our itemName a class of "nameSpan"
                    var itemName = document.createElement("span");
                    itemName.textContent = items.name;
                    receiptContainer.appendChild(itemName);
                    itemName.className = "nameSpan";
    //Created a variable to represent our item price,known as itemPrice, created a blank element called "textContent". used the appendChild method to add content to our empty element. used className property to give our itemPrice a class of "priceSpan". used the toFixed method to set/limit the decimal places in our output to 2.
                    var itemPrice = document.createElement("span");
                    itemPrice.textContent = "$" + items.price.toFixed(2);
                    receiptContainer.appendChild(itemPrice); 
                    itemPrice.className = "priceSpan";
    
                
});
//created a variable called displayTotal and used the createElement method to initialize it as a paragraph element
var displayTotal = document.createElement("p");

// gave the displayTotal element content using the textContent method and assigned it a string we want to display + the value of our previously defined global variable "total"
displayTotal.textContent = "Your grand total is $" + total;

//used the appendChild method to place our displayTotal within the receiptContainer div element
receiptContainer.appendChild(displayTotal);
                    
// commented out a requirement from Lab 7, most likely unnecessary in our final document, because the displayTotal variable that was just defined previously will already display our total for us

//console.log("Your total is $" + total.toFixed(2));

//created a div element called shoppingCart to contain our list and placed it within the body of our document. gave shoppingCart an id of receiptContainer and placed it within the body of the DOM using the appendChild method
var shoppingCart = document.createElement("div");
shoppingCart.id = "shoppingCart";
document.body.appendChild(shoppingCart);
// gave our receiptPaper a background color of pink to differentiate it from the rest of the page
shoppingCart.style = "background-color: pink;"


var Rice = new 