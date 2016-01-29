describe('Pizza', function() {
  it("will create a new pizza order with the given properties", function() {
    var testPizza = new Pizza ("small", "olives, peppers, onions", "sasage");
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.vegtableTopping).to.equal("olives, peppers, onions");
    expect(testPizza.meatTopping).to.equal("sasage");
    expect(testPizza.totalPrice).to.eql([]);
  });
});

describe('pizzaSize', function() {
  it("will give a price for the size of a pizza and alert if a size is not picked", function() {
    var testPizza = new Pizza("small");
    var totalPrice = [6];
    // debugger;
    expect(testPizza.totalPrice).to.equal("small", ([6]));
  });
});

describe('vegtableTopping', function() {
  it("will give a price for the size and add a dollar for each vegtableTopping picked", function() {
    var testPizza = new Pizza("small", "olives, peppers, onions");
    expect(testPizza.totalPrice).to.eql[9];
  });
});

describe('meatTopping', function() {
  it("will give a price for the size and add a dollar for each vegtableTopping and meatTopping picked", function() {
    var testPizza = new Pizza("small", "olives, peppers, onions", "sasage, pepperoni");
    // debugger;
    expect(testPizza.totalPrice).to.eql[13];
  });

});










































//
// describe("Pizza", function() {
//   it("will create a new pizza object", function() {
//     var testPizza = new Pizza("sm", "pepperoni");
//     expect(testPizza.pizzaSize).to.equal("sm");
//     expect(testPizza.pizzaToppings).to.equal("pepperoni");
//     expect(testPizza.pizzaPrice).to.equal(null);
//   });
//
// });
//
// describe("calcPizzaSize", function() {
//   it("will return right amount for selected pizza", function() {
//     var testPizza = new Pizza("xl", "pepperoni");
//     // expect(testPizza.calcPizzaSize()).to.equal(8);
//     // expect(testPizza.calcPizzaSize()).to.equal(12);
//     // expect(testPizza.calcPizzaSize()).to.equal(15);
//     expect(testPizza.calcPizzaSize()).to.equal(20);
//   });
// });
//
// describe("calcPizzaToppings", function() {
//   it("will return right amount for selected pizza", function() {
//     var testPizza = new Pizza("xl", ["pepperoni"]);
//     expect(testPizza.calcPizzaToppings()).to.equal(1);
//   });
//
//   it("will return right amount for selected pizza", function() {
//     var testPizza = new Pizza("xl", ["pepperoni", "black olives"]);
//     debugger;
//     expect(testPizza.calcPizzaToppings()).to.equal(2);
//   });
// });
