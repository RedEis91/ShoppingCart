var total = 0;

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

var shoppingCart = [condiment, protein, produce, dessert];

shoppingCart.forEach(function(items) {
                     console.log(items.name + ", $" + items.price.toFixed(2));
                     total += items.price;
});

console.log("Your total is $" + total.toFixed(2));

