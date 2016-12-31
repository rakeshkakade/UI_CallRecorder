/**
Note: Was planning for single page webapp
*/

$(document).ready(function (){
  /* for calls page */
  var $phoneNumber = $("input[name=phoneNumber]")[0];

  $(".numpad .digit").click(function(e){
    var digit = e.currentTarget.dataset.digit;
    $phoneNumber.value += digit;
  })

  /* for contacts and history page */
  var toggleActive = function(listItem){
    listItem.toggleClass("active");
    listItem.children(".details").toggleClass("active");
  }

  $(".list-group-item").click(function(){
    var prevSelection = $(".list-group-item.active");
    toggleActive(prevSelection);

    var currentSelection = $(this);
    toggleActive(currentSelection);
  })
});
