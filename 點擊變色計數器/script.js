// 選取元素
const counterDisplay = document.getElementById('counter');
const button = document.getElementById('btn');

let count = 0;

// 隨機顏色邏輯
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 設定點擊事件
button.addEventListener('click', function () {
  count++;
  counterDisplay.textContent = count;
  counterDisplay.style.color = getRandomColor();
});