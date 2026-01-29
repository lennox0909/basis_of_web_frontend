// script.js

// 選取 DOM 元素
const display = document.getElementById('number');
const btn = document.getElementById('addBtn');
let count = 0;

// 監聽點擊動作
btn.addEventListener('click', () => {
    count++; // 數值加 1
    display.textContent = count; // 更新畫面的文字內容

    // 邏輯判斷：滿 10 次將文字變為紅色
    if (count >= 10) {
        display.style.color = 'red';
    }
});
