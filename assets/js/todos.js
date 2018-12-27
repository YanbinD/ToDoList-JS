
// JQuery only allow to add a listener to the elements that exist when page load 
// instead, the listener can be added to the element that is for sure on the page 
// and then specify the element in that element for triggering event 
//check off Todos by clicking 
// https://stackoverflow.com/questions/9714498/toggle-div-color-on-click

// const black = "rgb(0, 0, 0)"
// $("ul").on("click", "li", function() {
// 	if ($(this).css("color") === black) {
// 		// $(this).css("color", "grey")
// 		$(this).css({
// 			textDecoration: "line-through",
// 			color: "gray"
// 		 });
// 	}
// 	else 
// 		$(this).css({
// 			'text-decoration': none,
// 			"color": "black"
// 		 })
// });

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});


$("ul").on("click", "span",function (e) {
	$(this).parent().fadeOut(500, function () {	// `this` here refers to the <span> 
		$(this).remove(); // `this` here corresponds to the <li> not the <span> 
	});
	e.stopProgagation(); 
	// since the trash icon is inside the <li>  
	// if the icon is clicked, it will cause any event listener for its 
	// parent element to be trigger 
	// if there is a event listener for the UL and body, the icon click will 
	// cause the Event Listener for UL to BODY to be triggered 
}); 

const newTodo = "<li> "
$("input[type='text'").keypress(function(e) {
	if (e.which === 13) {
		const todoList = $(this).val();
		$(this).val("")  //clear the input field  
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoList + " </li>"); //create an new li and added to the todolist ul
	}
});