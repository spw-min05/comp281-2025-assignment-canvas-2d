function getContext(canavasId) {
	const canvas = document.querySelector(canavasId);
	const ctx = canvas.getContext("2d");

	return ctx;
}

const FPS = {
	lastTime : 0,
	deltaTime : 0,
	fps : 0,
	update : function() {
		const currentTime = performance.now();
		this.deltaTime = currentTime - this.lastTime;
		this.fps = (1000 / this.deltaTime).toFixed(2);
		this.lastTime = currentTime;
		return this.fps;
	},
	show : function(ctx, x, y, color = "green", font = "14px Tahoma") {
		ctx.fillStyle = color;
		ctx.font = font;
		ctx.fillText(`FPS: ${this.fps}`, x, y);
	},
};

let keys = {};
document.addEventListener("keydown", function(event) {
	keys[event.key] = true; // บันทึกปุ่มที่กด
});
document.addEventListener("keyup", function(event) {
	keys[event.key] = false; // ลบปุ่มที่ปล่อย
});

let mouse = { x: 0, y: 0, isDown: false };
document.addEventListener("mousemove", function(event) {
	mouse.x = event.offsetX; // ใช้ offsetX เพื่อให้ได้ตำแหน่งสัมพัทธ์กับ canvas
	mouse.y = event.offsetY; // ใช้ offsetY เพื่อให้ได้ตำแหน่งสัมพัทธ์กับ canvas
});
document.addEventListener("mousedown", function(event) {
	mouse.isDown = true; // ตั้งค่าว่าเมาส์กดอยู่
});

let touch = { x: 0, y: 0, isDown: false };
document.addEventListener("touchmove", function(event) {
	const touchEvent = event.touches[0]; // ใช้ touch แรก (นิ้วแรก)
	touch.x = touchEvent.pageX - ctx.canvas.offsetLeft; // คำนวณตำแหน่งสัมพัทธ์กับ canvas
	touch.y = touchEvent.pageY - ctx.canvas.offsetTop; // คำนวณตำแหน่งสัมพัทธ์กับ canvas
});

export { getContext, FPS, keys, mouse, touch };