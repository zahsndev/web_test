$( function() 
{
  $('#button_result').click(function() 
  {
	result = 0;
    if($('#rad2').is(':checked')) { result += 1; }
    if($('#rad5').is(':checked')) { result += 1; }
    if($('#rad8').is(':checked')) { result += 1; }
    if($('#rad10').is(':checked')) { result += 1; }
    $('#button_result').after("<div id='space'> " + " النتيجة " + result + " من 5 " + " </div>");
    $('#button_result').prop( "disabled", true );
  });
} ); 


function gfg_Run() {
    number1 = Math.floor(Math.random() * 100);
    number2 = Math.floor(Math.random() * 100);
    number3 = Math.floor(Math.random() * 100);
    number4 = Math.floor(Math.random() * 100);
    maxNum = Math.max(number1, number2, number3, number4)
    minNum = Math.min(number1, number2, number3, number4)
    //document.write(max);
    $("#drag1").text(number1);
    $("#drag2").text(number2);
    $("#drag3").text(number3);
    $("#drag4").text(number4);
    
    $('#hiddenValues #maxNum').val(maxNum);
    $('#hiddenValues #minNum').val(minNum);
}


  
$( function() 
{
	gfg_Run()
	
	
  $( "#drag1" ).draggable();
  $( "#drop1" ).droppable(
  {
    drop :function()
    {
	  if( $("#drag1").text() ==  $('#hiddenValues #maxNum').val() )
	  {
        $( "section#dropZone img#result1t" ).show("10"); 
      }
      else 
      {
        $( "section#dropZone img#result1f" ).show("10"); 
      }
    }
  });
  
  
  $( "#drag2" ).draggable();
  $( "#drop1" ).droppable(
  {
    drop :function()
    {
	  if( $("#drag1").text() ==  $('#hiddenValues #maxNum').val() )
	  {
        $( "section#dropZone img#result1t" ).show("10"); 
      }
      else 
      {
        $( "section#dropZone img#result1f" ).show("10"); 
      }
    }
  });

  
  
} );  
/*$("document").ready(function() {
  $(".child").draggable({
    revert: true
  });

  $(".parent").droppable({
    accept: '.child',
    drop: function(event, ui) {
      $(this).append($(ui.draggable));
    }
  });
});

*/

/*
$(document).ready(function(){
	
  $("nav header p").eq(0).hover(function(){
    $("nav footer div").eq(0).slideDown("slow");
    $("nav footer div").eq(1).slideUp("slow");    
    $("nav footer div").eq(2).slideUp("slow");    
    $("nav footer div").eq(3).slideUp("slow");  
  });
  
  $("nav footer div").eq(0).mouseleave(function(){
    $("nav footer div").eq(0).slideUp("slow");
    $("nav footer div").eq(1).slideUp("slow");    
    $("nav footer div").eq(2).slideUp("slow");    
    $("nav footer div").eq(3).slideUp("slow");    
  });
  
   $("nav header p").eq(1).hover(function(){  
    $("nav footer div").eq(1).slideDown("slow");
    $("nav footer div").eq(0).slideUp("slow");    
    $("nav footer div").eq(2).slideUp("slow");    
    $("nav footer div").eq(3).slideUp("slow");  
  });
  
  $("nav footer div").eq(1).mouseleave(function(){
    $("nav footer div").eq(0).slideUp("slow");
    $("nav footer div").eq(1).slideUp("slow");    
    $("nav footer div").eq(2).slideUp("slow");    
    $("nav footer div").eq(3).slideUp("slow");    
  }); 
  
  
  $("nav header p").eq(2).hover(function(){
    $("nav footer div").eq(2).slideDown("slow");
    $("nav footer div").eq(0).slideUp("slow");    
    $("nav footer div").eq(1).slideUp("slow");    
    $("nav footer div").eq(3).slideUp("slow");  
  });
  
  $("nav footer div").eq(2).mouseleave(function(){
    $("nav footer div").eq(0).slideUp("slow");
    $("nav footer div").eq(1).slideUp("slow");    
    $("nav footer div").eq(2).slideUp("slow");    
    $("nav footer div").eq(3).slideUp("slow");    
  });
  
  
  $("nav header p").eq(3).hover(function(){
    $("nav footer div").eq(3).slideDown("slow");
    $("nav footer div").eq(0).slideUp("slow");    
    $("nav footer div").eq(1).slideUp("slow");    
    $("nav footer div").eq(2).slideUp("slow");  
  });
  
  $("nav footer div").eq(3).mouseleave(function(){
    $("nav footer div").eq(0).slideUp("slow");
    $("nav footer div").eq(1).slideUp("slow");    
    $("nav footer div").eq(2).slideUp("slow");    
    $("nav footer div").eq(3).slideUp("slow");    
  });  
    
  
});


function f1() {
  document.getElementsByTagName("nav div")[0].style.display = 'block'; 
}
*/
