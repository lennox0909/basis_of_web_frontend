# **第四課：響應式設計 (RWD) — 跨裝置相容**

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