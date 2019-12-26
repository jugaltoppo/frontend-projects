// the hard way
// $("li").click(function(){
//     if($(this).css("color")==="rgb(0, 0, 0)"){
//         $(this).css({
//             color:"grey",
//             textDecoration:"line-through"
//         });
//     }
//     else{
//         $(this).css({
//             color:"black",
//             textDecoration:"none"
//         });
//     }
// });


//same thing easier way
//check off specific todo by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("strikeThrough");
});


//deleting todo by pressing on 'x'
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(400,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add listener to text input
$("input[type='text']").keypress(function(event){
    if(event.which===13){
        var todoText=$(this).val();
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todoText + "</li>");
        $(this).val("");
    }
});

//fade in and out input field
$(".fa-edit").on("click",function(){
    $("input").fadeToggle("hideinput");
});
