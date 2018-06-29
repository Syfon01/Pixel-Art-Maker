// Select color input
let selectColor = function(){
        let color = $('#colorPicker').val(); 
        $(this).css('background-color', color);
}      

// Select size input
let sizeInput = function(){
        $("#pixelCanvas").children().remove();
       
                 
         for(let a = 1; a<=  $('#inputHeight').val(); a++){
             $("#pixelCanvas").append("<tr></tr>");
             for(let b =1; b<= $('#inputWeight').val(); b++){
         
             $("tr:last").append("<td></td>");
             }    
         }
}
// When size is submitted by the user, call makeGrid()
// Your code goes here
let makeGrid = function() {

sizeInput();

$("#pixelCanvas").find("td").click(selectColor);

};

$('#submit').on('click', function(event){
        event.preventDefault(); 
        makeGrid();
});


