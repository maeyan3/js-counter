$(function(){
  var count =0;
  $('#plusBtn').on('click', function(){
      count++;
      console.log(count);
      display();
  });

  $('#minusBtn').on('click', function(){
      count--;
      display();
  });

  $('#resetBtn').on('click', function(){
      count=0;
      display();
  });

  function display(){
    $('#display').text(count);
  }
});
