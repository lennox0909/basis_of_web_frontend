# **前端開發從零到一學習地圖**

這份地圖將指引你從一名初學者成長為具備開發能力的網頁工程師。

## **🟦 Chapter_01：HTML5 (網頁的骨架)**

* **基礎標籤**：h1-h6, p, div, span, a, img。  
* **列表與表格**：ul, ol, li, table。  
* **表單元素**：input, button, form, select。  
* **語意化標籤**：header, nav, main, footer, section（對 SEO 很有幫助）。

## **🟨 Chapter_02：CSS3 (網頁的皮囊)**

* **選擇器 (Selectors)**：如何抓取 HTML 元素來上色。  
* **盒模型 (Box Model)**：理解 margin, border, padding, content。  
* **佈局系統 (Layout)**：  
  * **Flexbox**：目前最主流的排版方式（一維）。  
  * **Grid**：複雜網格排版（二維）。  
* **響應式設計 (RWD)**：使用 @media 讓網頁適應手機與平板。  
* **動畫特效**：transition, animation。

## **🟨 Chapter_03：JavaScript (網頁的靈魂)**

* **基礎語法**：變數 (let, const)、資料型別、運算子。  
* **流程控制**：`if...else`, `switch`, `for`, `while` 迴圈。  
* **函式 (Functions)**：封裝重複執行的程式碼。  
* **DOM 操作**：用 JS 選取並修改 HTML 內容與 CSS 樣式。  
* **非同步處理**：fetch, Promises, Async/Await（與後端溝通的關鍵）。

## **🟩 Chapter_04：進階工具與框架**

* **版本控制**：Git & GitHub。  
* **套件管理**：NPM / Yarn。  
* **前端框架**：React (推薦), Vue, 或 Angular。  
* **CSS 框架**：Tailwind CSS 或 Bootstrap。

## **🟩 Chapter_05：Fetch API 串接**

* **核心概念**：讓網頁具備抓取雲端資料的能力。  
* **Async / Await**：網路請求需要時間等待，使用非同步語法確保程式不會在等待時「卡死」：
  * async：標記函式為非同步。
  * await：暫停執行，直到資料傳回。
* **Fetch API**：React (推薦), Vue, 或 Angular。
  * `fetch(URL)`：向該 URL 發出請求。
  * `.json()`：將原始資料包轉譯為 JS 物件。
* **流程設計**：
  *  1. 發出請求 ->
     2. 顯示載入中 ->
     3. 成功拿到資料 ->
     4. 渲染到 HTML ->
     5. 錯誤處理 (Error Handling)。

**提示**：不要急著一次看完，我們會一課一課動手做！
