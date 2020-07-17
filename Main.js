var canvas;
var ctx;


/*function for rgb for convenience*/
function rgb(r, g, b) { 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max){ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}


function main()
{	
	// init canvas
	canvas = document.createElement("canvas");
	document.body.appendChild(this.canvas);
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	
	// init ctx
	ctx = canvas.getContext("2d");
	

	var healthManager = new HealthManager();
	var hpController = new HPController(healthManager);
	hpController.input();

	var doomView = new DoomFaceView(hpController);
	var hpBarView = new HealthBarView(hpController);
	hpBarView.init();

	healthManager.addListener(doomView);
	healthManager.addListener(hpBarView);
}




