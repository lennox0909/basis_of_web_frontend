// script.js

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const fetchBtn = document.getElementById('fetch-btn');
const themeBtn = document.getElementById('theme-btn');

// --- 核心功能：獲取隨機金句 (非同步請求) ---
async function getQuote() {
    // 1. 視覺回饋：停用按鈕並顯示載入中
    fetchBtn.disabled = true;
    quoteText.textContent = "正在連線到伺服器...";
    quoteAuthor.textContent = "";

    try {
        // 2. 向第三方 API 發送請求
        const response = await fetch('https://dummyjson.com/quotes/random');

        if (!response.ok) throw new Error('伺服器回應錯誤');

        // 3. 解析 JSON 資料
        const data = await response.json();

        // 4. 更新 DOM 渲染資料
        quoteText.textContent = `"${data.quote}"`;
        quoteAuthor.textContent = `— ${data.author}`;
    } catch (error) {
        quoteText.textContent = "哎呀！抓取資料時發生錯誤，請檢查網路連線。";
        console.error("Fetch Error:", error);
    } finally {
        // 5. 不論成功或失敗都重新啟用按鈕
        fetchBtn.disabled = false;
    }
}

// --- 事件監聽 ---
fetchBtn.addEventListener('click', getQuote);

// 深色模式切換
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeBtn.textContent = isDarkMode ? "切換為淺色模式" : "切換為深色模式";
});
