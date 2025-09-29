import { getContext, FPS } from "./utils-module.js";

// กำหนดชื่อเรื่องของเอกสาร HTML
document.title = "A01 - App Graphics 2D";
// กำหนดให้ฟังก์ชัน main ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
document.addEventListener("DOMContentLoaded", main);

// ฟังก์ชันหลักที่ใช้ในการเริ่มต้นแอปพลิเคชัน ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
function main(ev) {
	// เข้าถึง context ของ canvas ที่มี id เป็น "myCanvas"
	const ctx = getContext("#myCanvas");

	// กำหนดค่าเริ่มต้นสำหรับแอปพลิเคชันในรูปแบบของอ็อบเจกต์ config
	const config = {
		width : 800,
		height : 600,
		bgColor : "white",
		debug : true,
	};

	// กำหนดขนาดของ canvas ตามค่า config
	ctx.canvas.width = config.width;
	ctx.canvas.height = config.height;

	// ตัวแปรตำแหน่งเมฆ
	let cloud1X = 25, cloud2X = 225, cloud3X = 475;
	let lastTime = performance.now();

	function draw() {
	// อัปเดตตำแหน่งเมฆใน draw
	const now = performance.now();
	const dt = (now - lastTime) / 1000;
	lastTime = now;
	const speed = 30; // px/sec
	cloud1X -= speed * dt;
	cloud2X -= speed * dt;
	cloud3X -= speed * dt;
	if (cloud1X < -60) cloud1X = 800;
	if (cloud2X < -60) cloud2X = 800;
	if (cloud3X < -60) cloud3X = 800;


		// ใช้ FPS สำหรับการวัดอัตราเฟรมต่อวินาที
		FPS.update();

		// กำหนดสีพื้นหลังของ canvas และใช้ fillRect เพื่อเติมสีพื้นหลัง
		ctx.fillStyle = config.bgColor;
		ctx.fillRect(0, 0, config.width, config.height);

		// วาดรูปจากส่วนนี้ไป **แนะนำให้วาดจากรูปที่อยู่ด้านหลังไปด้านหน้าตามลำดับ**
		// ใช้ภาพจาก MP1-app-graphics-2d.jpg เป็นแนวทางในการวาดรูป แต่จะวาดอย่างไรก็ได้ตามต้องการ

		// TODO:

		//ท้องฟ้า
	ctx.fillStyle = "rgba(116, 233, 233, 1)"; 
	ctx.fillRect(0, 0, 800, 300); //วาดท้องฟ้า

		//ภูเขา
	ctx.beginPath();
	ctx.moveTo(0, 250);
	ctx.quadraticCurveTo(150, 150, 370, 300); 
	ctx.lineTo(370, 300); // ลากลงมาด้านล่างสุด
	ctx.lineTo(0, 300); // ลากกลับไปด้านล่างซ้าย
	ctx.closePath(); // ปิด path
	ctx.fillStyle = "#5bf660ff";
	ctx.fill(); 
	ctx.strokeStyle = "Green";
	ctx.lineWidth = 3; 
	ctx.stroke(); 

		// วาด ภูเขา2
	ctx.beginPath(); 
	ctx.moveTo(325, 270); 
	ctx.bezierCurveTo(450, 150, 600, 290, 800, 220); // วาด curve แบบ bezier
	ctx.lineTo(800, 300); // ลากลงมาด้านล่างสุดของ
	ctx.lineTo(370, 300); // ลากกลับไปด้านล่างซ้าย
	ctx.closePath(); // ปิด path
	ctx.fillStyle = "#5bf660ff";
	ctx.fill(); 
	ctx.strokeStyle = "Green"; 
	ctx.lineWidth = 3;
	ctx.stroke(); 

		//เส้นขอบภูเขา
	ctx.beginPath(); 
	ctx.moveTo(0, 300); // เริ่มเส้น
	ctx.lineTo(800, 300); // จุดต่อไปเส้น
	ctx.strokeStyle = "#000000"; 
	ctx.lineWidth = 3; 
	ctx.stroke(); 

		//พระอาทิตย์
	ctx.beginPath(); // เริ่มเส้นทางใหม่
	ctx.arc(700, 100, 50, 0, Math.PI * 2); // วาดวงกลม
	ctx.fillStyle = "#f1df1fff"; 
	ctx.fill(); // เติมสีวงกลม
	ctx.strokeStyle = "#cc8238ff"; 
	ctx.stroke(); 
	ctx.restore();


		//ท้องนา
	ctx.fillStyle = "rgba(56, 145, 9, 1)"; 
	ctx.fillRect(0, 302, 800, 300); 


	// ต้นไม้(ลำต้น)
	ctx.beginPath();
	ctx.rect(100, 300, 40, 120);
	ctx.fillStyle = "#8B5A2B"; 
	ctx.fill();
	ctx.strokeStyle = "#000000"; 
	ctx.lineWidth = 2;
	ctx.stroke();

	//ใบไม้ 
	ctx.beginPath();
	ctx.moveTo(120, 220); // ยอดสามเหลี่ยม
	ctx.lineTo(80, 300); // ฐานซ้าย
	ctx.lineTo(160, 300); // ฐานขวา
	ctx.closePath();
	ctx.fillStyle = "#228B22";
	ctx.fill();
	ctx.strokeStyle = "#000000ff";
	ctx.lineWidth = 2;
	ctx.stroke();

	//ใบไม้2
	ctx.beginPath();
	ctx.moveTo(120, 240); 
	ctx.lineTo(70, 320);
	ctx.lineTo(170, 320); 
	ctx.closePath();
	ctx.fillStyle = "#228B22";
	ctx.fill();
	ctx.strokeStyle = "#000000ff";
	ctx.lineWidth = 2;
	ctx.stroke();

	//ใบไม้3
	ctx.beginPath();
	ctx.moveTo(120, 260);
	ctx.lineTo(70, 340);
	ctx.lineTo(170, 340);
	ctx.closePath();
	ctx.fillStyle = "#228B22";
	ctx.fill();
	ctx.strokeStyle = "#000000ff";
	ctx.lineWidth = 2;
	ctx.stroke();


		// วาดพื้นที่แม่น้ำ
	ctx.beginPath();
	ctx.moveTo(370, 300);
	ctx.bezierCurveTo(370, 490, 400, 400, 200, 602); // ขอบซ้าย
	ctx.lineTo(480, 602);
	ctx.bezierCurveTo(570, 500, 490, 400, 550, 300); // ขอบขวา
	ctx.closePath();
	ctx.fillStyle = "#5bf6ff";
	ctx.fill();
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 2.5;
	ctx.stroke();

	
		//บ้าน
	ctx.beginPath();
	ctx.rect(600, 400, 175, 125); 
	ctx.fillStyle = "#dc57f4ff"; 
	ctx.fill();
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 2.5;
	ctx.stroke();

		//หลังคาบ
	ctx.beginPath();
	ctx.moveTo(575, 400); 
	ctx.lineTo(687.5, 325);
	ctx.lineTo(800, 400);
	ctx.closePath();
	ctx.fillStyle = "#000000ff";
	ctx.fill();
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 2.5;
	ctx.stroke();

		// ประตู
	ctx.beginPath();
	ctx.rect(640, 448, 40, 75);
	ctx.fillStyle = "#fcd318ff";
	ctx.fill();
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 2.5;
	ctx.stroke();

		// ลูกบิดประตู
	ctx.beginPath();
	ctx.arc(675, 490, 2.5, 0, Math.PI * 2); // ลูกบิดประตู
	ctx.fillStyle = "#000000";
	ctx.fill();

		// วาดหน้าต่างบ้าน
	ctx.beginPath();
	ctx.rect(720, 425, 40, 40); 
	ctx.fillStyle = "#87CEEB";
	ctx.fill();
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 2.5;
	ctx.stroke();

		//เส้นแบ่งหน้าต่าง
	ctx.beginPath();
	ctx.moveTo(720, 445);
	ctx.lineTo(760, 445);
	ctx.moveTo(740, 425);
	ctx.lineTo(740, 465);
	ctx.strokeStyle = "#000000";
	ctx.lineWidth = 2.5;
	ctx.stroke();


		// เมฆ
		ctx.beginPath();
		ctx.moveTo(cloud1X, 55);
		ctx.bezierCurveTo(cloud1X + 5, 40, cloud1X + 25, 40, cloud1X + 35, 55);
		ctx.bezierCurveTo(cloud1X + 45, 70, cloud1X + 25, 80, cloud1X + 10, 70);
		ctx.bezierCurveTo(cloud1X - 5, 70, cloud1X - 5, 60, cloud1X, 55);
		ctx.closePath();
		ctx.fillStyle = "#ffffff";
		ctx.fill();
		ctx.strokeStyle = "#000000";
		ctx.lineWidth = 2.5;
		ctx.stroke();

		// เมฆ2
		ctx.beginPath();
		ctx.moveTo(cloud2X, 80);
		ctx.bezierCurveTo(cloud2X + 10, 65, cloud2X + 40, 65, cloud2X + 50, 80);
		ctx.bezierCurveTo(cloud2X + 60, 95, cloud2X + 40, 105, cloud2X + 15, 95);
		ctx.bezierCurveTo(cloud2X, 95, cloud2X, 85, cloud2X, 80);
		ctx.closePath();
		ctx.fillStyle = "#ffffff";
		ctx.fill();
		ctx.strokeStyle = "#000000";
		ctx.lineWidth = 2.5;
		ctx.stroke();

		// เมฆ3
		ctx.beginPath();
		ctx.moveTo(cloud3X, 50);
		ctx.bezierCurveTo(cloud3X + 10, 35, cloud3X + 40, 35, cloud3X + 50, 50);
		ctx.bezierCurveTo(cloud3X + 60, 65, cloud3X + 40, 75, cloud3X + 15, 65);
		ctx.bezierCurveTo(cloud3X, 65, cloud3X, 55, cloud3X, 50);
		ctx.closePath();
		ctx.fillStyle = "#ffffff";
		ctx.fill();
		ctx.strokeStyle = "#000000";
		ctx.lineWidth = 2.5;
		ctx.stroke();


		// เขตสิ้นสุดของการวาดรูป


		// แสดงข้อความ FPS บน canvas ถ้า config.debug เป็น true
		if (config.debug) FPS.show(ctx, 10, 28);

		// ใช้ requestAnimationFrame เพื่อเรียกใช้ฟังก์ชัน draw ต่อไป
		requestAnimationFrame(draw);
	}
	// เริ่มต้นการวาดภาพบน canvas
	draw();
}