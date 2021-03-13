$(document).ready(function(){
  var hoverMenu = $(".selected")

  hoverMenu.mouseenter(function(){
    $(this).parents().find(">.menu").toggleClass("active");
  })

})
