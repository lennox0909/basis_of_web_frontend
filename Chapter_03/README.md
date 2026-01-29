# **第三課：JS 互動邏輯 — 網頁的靈魂**
* HTML 負責定義 ID（如 `number` 和 `addBtn`），這些 ID 是 JS 用來尋找目標的「鉤子」。
* 透過 `addEventListener` 監聽點擊事件，並動態修改 DOM 的屬性。
  * DOM 操作：document.getElementById 讓我們能控制 HTML 標籤。
  * 事件監聽：click 是最常用的事件，讓按鈕具備功能。
  * 邏輯控制：if 判斷式讓網頁能根據當前狀態（count）做出不同的反應。

## **1\. 核心概念**

JavaScript 讓網頁具備處理邏輯與回應使用者行為的能力。

## **2\. DOM 操作**

DOM (Document Object Model) 是網頁的接口。JS 透過它來抓取與修改 HTML。

* document.getElementById('id')：抓取特定元素。

## **3\. 事件監聽 (Event Listener)**

網頁會「監聽」使用者的動作：

* click：點擊。  
* input：輸入。

## **4\. 變數與邏輯**

* let：宣告會變動的變數。  
* count++：將數值加 1。  
* textContent：修改標籤內的文字。
