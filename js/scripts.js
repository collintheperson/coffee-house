// buisness logic

function coffee(country, flavor, roast){
  this.country= country;
  this.flavor= flavor;
  this.roast=roast;
}

coffee.prototype.newCoffee= (function(){
  return this.country + this.flavor + this.roast

});

//user logic
$(function()  {
  $("#coffee").submit(function(event)  {
    event.preventDefault();

    var flavor = parseInt($("input:radio[name=flavor]:checked").val());
    var location = parseInt($("input:radio[name=location]:checked").val());
    var roast = parseInt($("input:radio[name=roast]:checked").val());
    var finalCost= new coffee(flavor, location, roast);
    $(".price").text(finalCost.newCoffee());
  });
});
