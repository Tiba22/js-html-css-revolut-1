$(document).ready(function(){
  var features = $(".features")
  var plans =$(".plans")
  var about = $(".about")
  var help = $(".help")

  features.mouseenter(function(){
    $(this).parents().find(".features-content").addClass("active");
  })

  features.mouseleave(function(){
    $(this).parents().find(".features-content").removeClass("active");
  })

  plans.mouseenter(function(){
    $(this).parents().find(".plans-content").addClass("active");
  })

  plans.mouseleave(function(){
    $(this).parents().find(".plans-content").removeClass("active");
  })

  about.mouseenter(function(){
    $(this).parents().find(".about-content").addClass("active");
  })

  about.mouseleave(function(){
    $(this).parents().find(".about-content").removeClass("active");
  })

  help.mouseenter(function(){
    $(this).parents().find(".help-content").addClass("active");
  })

  help.mouseleave(function(){
    $(this).parents().find(".help-content").removeClass("active");
  })

})
