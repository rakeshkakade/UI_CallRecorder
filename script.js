/**
Note: Was planning for single page webapp
*/

$(document).ready(function (){
  /* common */
  var toggleActive = function(listItem){
    listItem.toggleClass("active");
    listItem.children(".details").toggleClass("active");
  }

  /* for calls page */
  var $phoneNumber = $("input[name=phoneNumber]")[0];

  $(".numpad .digit").click(function(e){
    var digit = e.currentTarget.dataset.digit;
    $phoneNumber.value += digit;
  })

  /* for calling page */
  $(".btn-recording").click(function(e){
    var $currentSelection = $(this);
    var $icon = $currentSelection.children(".glyphicon");
    var $text = $currentSelection.children('#text');

    toggleActive($currentSelection);
    $icon.toggleClass("glyphicon-record").toggleClass("glyphicon-stop");
    if ($currentSelection.hasClass("active")) {
      $text.html("Stop Recording");
    } else {
      $text.html("Record");
    }
  })

  /* for contacts and history page */
  $(".list-group-item").click(function(){
    var $prevSelection = $(".list-group-item.active");
    toggleActive($prevSelection);

    var $currentSelection = $(this);
    toggleActive($currentSelection);
  })
});
