var basicTimeline = anime.timeline({
    autoplay: false,
  });
 
  var pathEls = $(".check");
  for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute("stroke-dashoffset", offset);
    
  }
  
  basicTimeline
    .add({
      targets: ".text",
      duration: 1,
      opacity: "0",
    })
    .add({
      targets: ".button",
      duration: 1300,
      height: 10,
      width: 300,
      backgroundColor: "#c2ffc2",
      border: "0",
      borderRadius: 100
    })
    .add({
      targets: ".progress-bar",
      duration: 2000,
      backgroundColor: "#58ce74",
      width: 300,
      easing: "linear"
    })
    .add({
      targets: ".button",
      width: 0,
      duration: 1
    })
    .add({
      targets: ".progress-bar",
      width: 180,
      height: 180,
      delay: 500,
      borderRadius: 100,
      backgroundColor: "#2F9E41",
  
    })
   
    .add({
      targets: pathEl,
      strokeDashoffset: [offset, 0],
      duration: 300,
      easing: "easeInOutSine"
    });
    

 
  
  
  $(".button").click(function() {
    basicTimeline.play();
  });

  $(".text").click(function() {
    basicTimeline.play();
  });

  $("#svg").click(function() {
    basicTimeline.play();
  });

