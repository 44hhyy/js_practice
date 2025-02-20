function setup() {
  // 描画領域のセットアップ
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255);
}

function draw() {
  background(0);
  const step = 100;

  //楕円 二重ループ
  if (mouseIsPressed) {
    for (let y = 0; y <= height; y += step) {
      for (let x = 0; x <= width; x += step) {
        const d = dist(x, y, mouseX, mouseY);
        const size = d / 20;
        colorMode(HSB, 360, 100, 100);

        // ゲーミング
        let hueValue = (d + frameCount * 5) % 360;
        fill(hueValue, 100, 100);
        ellipse(x, y, size, size);
      }
    }
  }
}
