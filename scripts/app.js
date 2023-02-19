$(function(){
  //   Week4 Assignment Task2
  $('#reserve-button').click(function (){
    $('#reserveModal').modal('toggle');
  });
//   Week4 Assignment Task3
  $('#login-Btn').click(function (){
    $('#loginModal').modal('toggle');
  });

  $("#carousel-button").click(function(){
    if ($("#carousel-button").children("span").hasClass('fa-pause')) 
        {
        $("#mycarousel").carousel('pause');
        $("#carousel-button").children("span").removeClass('fa-pause');
        $("#carousel-button").children("span").addClass('fa-play');
    }
    else if ($("#carousel-button").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carousel-button").children("span").removeClass('fa-play');
        $("#carousel-button").children("span").addClass('fa-pause'); 
    }
  });

});
// $(document).ready(function(){

//   $("#carousel-button").click(function(){
//     if ($("#carousel-button").children("span").hasClass('fa-pause')) 
//         {
//         $("#mycarousel").carousel('pause');
//         $("#carousel-button").children("span").removeClass('fa-pause');
//         $("#carousel-button").children("span").addClass('fa-play');
//     }
//     else if ($("#carousel-button").children("span").hasClass('fa-play')){
//         $("#mycarousel").carousel('cycle');
//         $("#carousel-button").children("span").removeClass('fa-play');
//         $("#carousel-button").children("span").addClass('fa-pause'); 
//     }
//   });
// //   Week4 Assignment Task2
//   $('#reserve-button').click(function (){
//     $('#reserveModal').modal('toggle');
//   });
// //   Week4 Assignment Task3
//   $('#login-Btn').click(function (){
//     $('#loginModal').modal('toggle');
//   });
// });
