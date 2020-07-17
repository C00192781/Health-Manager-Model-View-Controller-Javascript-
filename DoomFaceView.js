function DoomFaceView(controller)
{
	this.controller = controller;
}



DoomFaceView.prototype.update = function()
{
	ctx.clearRect(0,0,200,200);
	var faceImg = this.controller.getFaceImage();
	var faceImgFrame = this.controller.getFaceImageFrame();

	// This is a Sprite Animation
	// img = Source Image object = Sprite Sheet
	// sx = Source x = Frame Index * Frame Width
	// sy = Source Y
	// sw = Source Width = Frame Width
	// sh = Source Height = Frame Height
	// dx = Destination x
	// dy = Destination y
	// dw = Destination width = Frame Width
	// dh = Destination height = Frame Height
	/////////// context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
	ctx.drawImage(faceImg, faceImgFrame*92, 0, 92, 92, 40, 20, 92, 92);
}
