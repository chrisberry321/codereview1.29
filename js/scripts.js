function Pizza(pizzaSize, toppingsList) {
  this.pizzaSize = pizzaSize;
  this.toppingsList = toppingsList;
};

Pizza.prototype.toppingsList = function(topping) {
  var toppings = ["Artichoke hearts", "Bell Peppers", "Mushrooms", "Onions", "Red Onions", "Sun Dried Tomatoes", "Pepperoni", "Sausage", "Canadian Bacon", "Bacon", "BBQ chicken", "Proscuitto"];
  var toppingsList = [];
  for (var i = 0; i < toppings.length; i++) {
    if (toppings[i] = topping) {
      this.toppingsList.push(toppings[i]);
    }
  }
  return this.toppingsList;
};


Pizza.prototype.fullDetails = function() {
  return this.pizzaSize + ' with ' + this.toppingsList;
};

Pizza.prototype.pricer = function(){
  var price = 6 //base price = 10

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


$(function() {
  $("form.pizza-form").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("select#pizza-size").val();
    var inputtedToppings = $("input:checked").val();
    var newPizza = new Pizza(inputtedSize, inputtedToppings);

    $(".result").text(newPizza.fullDetails() + " with " + this.toppingsList +  " will be $" + newPizza.pricer() + ".00");
  });


})






























// function Pizza(pizzaSize, vegtableTopping, meatTopping, totalPrice) {
//   this.pizzaSize = pizzaSize;
//   this.vegtableTopping = vegtableTopping;
//   this.meatTopping = meatTopping;
//   this.totalPrice = [];
// }
//
//   Pizza.prototype.totalPrice = function() {
//     return this.pizzaSize + 'with' + this.vegtableTopping + 'and' + this.meatTopping;
//
//     Pizza.prototype.pizzaSize = function() {
//       var totalPrice = 6;
//       if (this.pizzaSize === "jumbo") {
//         totalPrice += 8;
//       }else if(this.pizzaSize === "large") {
//         totalPrice += 4;
//       }else if(this.pizzaSize === "medium") {
//         totalPrice += 2;
//       }else if(this.pizzaSize === "small") {
//         totalPrice =+ 0;
//       }else {
//         return alert("Need to pick a pizza size")
//       }
//
//     };
//       if (this.vegtableTopping.length > 3) {
//         totalprice += 3;
//       } else if (this.vegtableTopping.length > 2) {
//         totalprice += 2;
//       } else fi (this.vegtableTopping.length > 0) {
//            totalPrice +=1;
//          }
//
//       return price;
//     };
//       if (this.meatTopping.length > 3) {
//         totalprice += 5;
//       } else if (this.vegtableTopping.length > 2) {
//         totalprice += 3;
//       } else if (this.meatTopping.length > 0) {
//            totalprice +=2;
//           }
//
//       return price;
//     };
//
//     Pizza.prototype.vegtableTopping = function(topping) {
//       var addedvegtables = ["Artichoke hearts", "Bell Peppers", "Mushrooms", "Onions", "Red Onions", "Sun Dried Tomatoes"]
//       var vegtableTopping = [];
//       for (i =0; i < addedvegtables.length; i++) {
//         if (addedvegtables[i] = topping) {
//           this.vegtableTopping.push(addedvegtables[i])
//         }
//       }
//       return this.vegtableTopping
//     };
//
//     Pizza.prototype.meatTopping = function(topping2) {
//       var addedmeats =["Pepperoni", "Sausage", "Canadian Bacon", "Bacon", "BBQ chicken", "Proscuitto"]
//       var meatTopping = [];
//       for (i =0; i < addedmeats.length; i++) {
//         if (addedmeats[i] = topping2) {
//           this.meatTopping.push(addedmeats[i])
//         }
//       }
//       return this.meatTopping
//     };
//     return totalPrice
//
//   };
//
// $(document).ready(function() {
//   $("form.pizza-form").submit(function(event) {
//     event.preventDefault();
//
//     var inputtedSize = $("select#pizza-size").val();
//     var inputtedToppings = $("input:checked").val();
//     // var inputtedDelivery = $("select#delivery-option").val();
//
//     var newPizza = new Pizza(inputtedSize, inputtedToppings, inputtedDelivery);
//
//     $(".result").text(newPizza.fullDetails() + " with " + inputtedToppings +  " will be $" + newPizza.pricer() + ".00");
//   });
// })
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //
// //
// // function Contact(firstName,lastName) {
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// //   this.addresses = [];
// // };
// //
// // function Address(street, city, state) {
// //   this.street = street;
// //   this.city = city;
// //   this.state = state;
// // };
// //
// // Contact.prototype.fullName = function() {
// //   return this.firstName + " " + this.lastName;
// // }
// //
// // Address.prototype.fullAddress = function() {
// //   return this.street + ", " + this.city + ", " + this.state;
// // }
// //
// //
// //
//
//
//
//
//
//
//
//
//
// //
// // function Pizza(pizzaSize, pizzaToppings) {
// //   this.pizzaSize = pizzaSize;
// //   this.pizzaToppings = pizzaToppings;
// //   this.pizzaPrice = null;
// // }
// //
// // Pizza.prototype.calcPizzaSize = function () {
// //   if(this.pizzaSize === "sm") {
// //     return this.pizzaPrice += 8;
// //   } else if(this.pizzaSize === "md") {
// //     return this.pizzaPrice += 12;
// //   } else if(this.pizzaSize === "lg") {
// //     return this.pizzaPrice += 15;
// //   } else
// //     return 20;
// // };
// //
// // Pizza.prototype.calcPizzaToppings = function () {
// //   for(var i = 0; i < this.pizzaToppings.length; i++) {
// //     this.pizzaPrice += 1;
// //   }
// //   return this.pizzaPrice;
// // };
// // //
// //
// // $(function() {
// //   $("form#add-pizza").submit(function(event) {
// //     event.preventDefault();
// //
// //     var inputtedPizzaSize = $(this).find("input.new-size").val();
// //     var inputtedPizzaToppings = $(this).find("input.new-toppings").val();
// //     var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaToppings);
// //
// //
// //     console.log("Your new pizza is: " + newPizza);
// //   });
// //
// //
// //
// //
// // });
