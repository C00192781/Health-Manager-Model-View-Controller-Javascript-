function HealthManager()
{
	that = this;
	// We set up the health and give it a value
	this.health = 100;
	// We set up a maximum health
	this.maximumHealth = 100;
	// We set up an array of listeners
	this.listeners = [];
	// We will have an animation which will cycle through the 
	// different faces in the Sprites Sheet.
	// We need a variable to store the current frame of this animation.
	this.faceImgFrame = 1;
	this.faceImg = new Image(); // We create new img element
	this.faceImg.src = 'Expression.png'; // We set the source path
	
}

// adds a listener to the array of listeners
HealthManager.prototype.addListener=function(handler)
{
	this.listeners.push(handler);  
}

HealthManager.prototype.getHealth = function()
{
	return this.health;
}

// update face depending on the percentages of health
// There are different health images
HealthManager.prototype.setHealth = function(health)
{
	this.health = health;

	// If the health exceeds 100, we set it to 100
	if (this.health > this.maximumHealth)
	{
		this.health = 100;
	}

	if (this.health <= 0)
	{
		this.faceImgFrame = 0;
	}
	else if (this.health >= 1 && this.health <=20)
	{
		this.faceImgFrame = 1;
	}
	else if (this.health >= 21 && this.health <=30)
	{
		this.faceImgFrame = 2;
	}
	else if (this.health >= 31 && this.health <=40)
	{
		this.faceImgFrame = 3;
	}
	else if (this.health >= 41 && this.health <=50)
	{
		this.faceImgFrame = 4;
	}
	else if (this.health >= 51 && this.health <=60)
	{
		this.faceImgFrame = 5;
	}
	else if (this.health >= 61 && this.health <=70)
	{
		this.faceImgFrame = 6;
	}
	else if (this.health >= 71 && this.health <=80)
	{
		this.faceImgFrame = 7;
	}
	else if (this.health >= 81 && this.health <=90)
	{
		this.faceImgFrame = 8;
	}
	else if (this.health >= 91)
	{
		this.faceImgFrame = 9;
	}
	
	
	this.updateListeners();
}

// used to return the image
HealthManager.prototype.getFaceImage = function()
{
	return this.faceImg;
}

//used to return a particular frame
HealthManager.prototype.getFaceImageFrame = function()
{
	return this.faceImgFrame;
}

// iterates through listeners and updates them
HealthManager.prototype.updateListeners = function()
{
	for (var i = 0; i < this.listeners.length; i++)
	{
		this.listeners[i].update(this);
	}
}


