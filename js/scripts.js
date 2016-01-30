function Pizza (pizzaSize, toppingsList) {
  this.pizzaSize = pizzaSize;
  this.toppingsList = toppingsList;
};

Pizza.prototype.toppingsList = function(topping) {
  var toppings = ["Artichoke hearts", "Bell Peppers", "Mushrooms", "Onions", "Red Onions", "Sun Dried Tomatoes", "Pepperoni", "Sausage", "Canadian Bacon", "Bacon", "BBQ chicken", "Proscuitto"];
  var toppingsList = ["nil"];
  for (var i = 1; i < toppings.length; i++) {
    if (toppings[i] = topping) {
      this.toppingsList.push(toppings[i]);
    }
  }
  return this.toppingsList;
};


Pizza.prototype.sizeAndPrice = function() {
  return this.pizzaSize + " with " + this.toppingsList;
};

Pizza.prototype.pricer = function(){
  var price = 6
    if (this.pizzaSize === "jumbo") {
    price += 6;
  } else if (this.pizzaSize === "large") {
    price += 4;
  }else if (this.pizzaSize === "medium") {
    price += 2;
  }

  if (this.toppingsList.length >= 8) {
    price += 8;
  } else if (this.toppingsList.length >= 5) {
    price += 4;
  } else if (this.toppingsList.length >= 3) {
    price += 2;
  } else if (this.toppingsList.length >= 1) {
    price += 1;
  }
  return price;
};


$(document).ready(function() {
  $("form.pizza-form").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("select#pizza-size").val();
    var inputtedToppings = $("input:checked").val();
    var newPizza = new Pizza(inputtedSize, inputtedToppings);

    $(".result").text(newPizza.sizeAndPrice() + " with " + inputtedToppings +  " will be $" + newPizza.pricer() + ".00");
  });
})
