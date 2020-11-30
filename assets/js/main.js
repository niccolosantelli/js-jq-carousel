
$("div img:nth-child(2)").addClass("foto2")


/*var next = $("i.fa-angle-right");
next.click(function () {
 $("img.active").hide();
 $("div img:nth-child(2)").show();
   next.click(function(){
     $("div img:nth-child(2)").hide();
     $("div img:nth-child(3)").show();
       next.click(function(){
        $("div img:nth-child(3)").hide();
        $("img.last").show();
    })
  })
})

/*var next = $("i.fa-angle-left");
next.click(function () {
 $("img.last").hide();
 $("div img:nth-child(3)").show();
   next.click(function(){
     $("div img:nth-child(3)").hide();
     $("div img:nth-child(2)").show();
       next.click(function(){
        $("div img:nth-child(2)").hide();
        $("img.active").show();
    })
  })
})*/

//prev.

var next = $(".next i");
next.click(function () {
  $("img.first").removeClass("active");
  $("img.first").next().addClass("active");
  

/*  next.click(function () {
    $("img.first").removeClass("active");
    $("img.first").next().addClass("active");



  })*/


})


/* usare next e prev piu usare if per farlo tornare al punto di partenza*/
