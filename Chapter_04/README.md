# **第四課：響應式設計 (RWD) — 跨裝置相容**
* 現代網頁開發中最重要的**響應式網頁設計 (Responsive Web Design, RWD)**。它利用了 `flex-wrap` 以及 `@media` 查詢來確保網頁在手機、平板與電腦上都能有良好的閱讀體驗。
  * 1\. Viewport Meta Tag: 在 HTML `<head>` 裡的 `meta name="viewport"` 是 RWD 的起點，它告訴手機瀏覽器「請照著裝置寬度來渲染網頁」。
  * 2\. Flexbox + min-width: 這是最簡單的響應式方法，不一定要寫很多 `@media`，靠 `flex-wrap` 就能達成自動換行。
  * 3\. Breakpoints (斷點): 像是 `600px` 就是一個斷點，讓網頁在不同大小的裝置間變身。


## **1\. 核心概念**

讓網頁在手機、平板與電腦上都能完美顯示。

## **2\. Viewport 設定**

必須在 \<head\> 加入這行，讓手機瀏覽器不縮放網頁：

\<meta name="viewport" content="width=device-width, initial-scale=1.0"\>

## **3\. 媒體查詢 (Media Queries)**

針對不同寬度撰寫專屬 CSS：

@media (max-width: 600px) { ... }

## **4\. 彈性佈局策略**

* 不要寫死寬度（如 width: 500px;）。  
* 使用百分比或 max-width: 100%;。  
* 使用 flex-wrap: wrap; 讓元件自動換行。
