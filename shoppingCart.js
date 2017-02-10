//created a variable to hold our total 
var total = 0;
//created a blank object to hold properties (name, price) of the items that will be placed in my shopping cart
class groceryListItem {
  constructor(name, price){
	this.name = name;
	this.price = price;
    
	}
}

//created a blank array to hold my shopping cart items
var shoppingListArray = [];

//created a function called addItemToCart() to be accessed through my HTML onclick. this function takes the external form data into JavaScript to get input values. 
function addItemToCart(myFormObject){
    ////clearing out our total div by using the innerHTML method to reset our div to a blank string so the list doesn't grow exponentially
    document.getElementById("yourGrandTotal").innerHTML = '';
    //clearing out our unordered list by using innerHTML method to reset our UL to a blank string so the list doesn't grow exponentially
    document.getElementById("ShoppingList").innerHTML = '';
    //created variables called "itemName" & "itemPrice" to store the itemName and itemPrice of the formObj.elements
    var itemName = myFormObject.elements["itemName"].value;
    var itemPrice = myFormObject.elements["itemPrice"].value;
    //created a new variable. set this variable equal to a groceryListItem, taking in as parameters our previously defined itemName and itemPrice variables
    var itemNameAndPrice = new groceryListItem(itemName, itemPrice);
    //used push method to place the itemNameAndPrice inside the array
    shoppingListArray.push(itemNameAndPrice);
    //calls functions to calculate the total and updates HTML list
    calculateTotal();
    updateHTMLList();
}

//created a for loop wrapped in a function just for easy accessability within our addItemToCart function to add the value of every items.price contained within the shoppingListArray to the global variable "total"
function calculateTotal(){
    total=0;
   shoppingListArray.forEach(function(items) { 
//totals up our number and adds it to the div with the ID of "yourGrandTotal", javascript was displaying this output as a string, so I added Number() method to render it as a number
       total += Number(items.price); 
       //used toFixed method to render the total with 2 decimal places, concaconated with a string to add the $
       document.getElementById("yourGrandTotal").textContent = "$" + total.toFixed(2);
                                             });
}
//created a function to update our HTML list with list items that we assign through the createElement method 
function updateHTMLList(){
    shoppingListArray.forEach(function(items) {
        var itemName = document.createElement("li");
        //made items.price into a number with the Number method, then converted it back into a string to add/limit it to 2 decimal places with the toFixed method
                    itemName.textContent = items.name + ", $" + Number(items.price).toFixed(2);
        //adds itemName to div with the id of "ShoppingList" by means of the appendChild method
                    document.getElementById("ShoppingList").appendChild(itemName);
                    itemName.className = "namedItem";
                   
    });
}

var rice = new groceryListItem(Rice, 3.69);
