function HealthBarView(controller)
{
	this.controller = controller;
	this.healthText = "";
}

HealthBarView.prototype.init = function()
{
	var outlineWidth = canvas.width/4;

	var top = 172;
	var offset = 170;
	
	//used to create the bar
	var inner = document.createElement("healthBar");
	inner.style.position = "absolute";
	inner.style.left = outlineWidth/4;
	inner.style.top = top.toString() + 'px';
	inner.style.width = "100px";
	inner.style.height = "21px";
	inner.style.background = "red";
	inner.style.display = "block";
	inner.id = "healthBar";
	document.body.appendChild(inner);
	
	// creates outline of bar
	var outline = document.createElement("healthBarOutline");
	outline.style.position = "absolute";
	outline.style.left = outlineWidth/4;
	outline.style.top = offset.toString() +'px';
	outline.style.width = (outlineWidth).toString()+"px";
	outline.style.height = "21px";
	outline.style.backgroundColor = 'transparent';
	outline.style.border = '0.12em solid white';
	outline.style.display = "block";
	outline.id = "healthBarOutline";
	document.body.appendChild(outline);

	//sets font
	ctx.font = "20px Lazer84";
}

HealthBarView.prototype.update = function(healthManager)
{	
	var health = healthManager.getHealth();
	
	var healthBar = (canvas.width/4)/(100/health);
	this.healthText = String(health);
	
	
	document.getElementById("healthBar").style.width = healthBar.toString() + "px";
	ctx.fillStyle = rgb(255,255,255);
	ctx.fillText(this.healthText, 160, 110);
}