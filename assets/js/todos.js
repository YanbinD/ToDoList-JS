
//check off Todos by clicking 
const black = "rgb(0, 0, 0)"
// https://stackoverflow.com/questions/9714498/toggle-div-color-on-click
$("li").click( function() {
	if ($(this).css("color") === black) {
		// $(this).css("color", "grey")
		$(this).css({
			'text-decoration': "line-through",
			"color": "grey"
		 })
	}
	else 
		// $(this).css("color", "black")
		$(this).css({
			'text-decoration': "",
			"color": "black"
		 })
});