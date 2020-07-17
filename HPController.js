
function HPController(model)
{
	this.model = model;
}

HPController.prototype.input=function()
{
	that = this;
	
	// Handle button and text.
    var btn = document.getElementById("hpButton"); 
    var txtBox = document.getElementById("txtInput"); 

    txtBox.onkeydown = function(e) {
    	var k = e.which;
    	// numeric inputs can come from the keypad or the numeric row at the top 
    	// can also press backspace 
    	// when k is between 48 to 57 (0 to 9)
    	// when k is between 96 and 105 (numpad 0 to numpad 9)
    	// when k = 8 (backspace)
    	if (((k < 48 && K > 8) || k > 57) && (k < 96 || k > 105)) 
    	{
        	e.preventDefault();
        	return false;
    	}
	};
    btn.addEventListener("click", function(e)
	{
	    var currentHp = txtBox.value;
		that.setHealth(currentHp);
            
	});
}

HPController.prototype.setHealth = function(health)
{
	this.model.setHealth(health);
}

HPController.prototype.getFaceImage = function()
{
	return this.model.getFaceImage();
}

HPController.prototype.getFaceImageFrame = function()
{
	return this.model.getFaceImageFrame();
}

HPController.prototype.getHealth = function()
{
	return this.model.getHealth();
}
