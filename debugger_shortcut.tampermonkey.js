// ==UserScript==
// @name         debugger_shortcut
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  debugger_shortcut
// @author       XT
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var statusDiv = document.createElement('div');
    statusDiv.style.position = 'fixed';
    statusDiv.style.bottom = '10px';
    statusDiv.style.right = '10px';
    statusDiv.style.backgroundColor = '#333';
    statusDiv.style.color = 'white';
    statusDiv.style.padding = '10px';
    statusDiv.style.zIndex = '10000';
    statusDiv.style.borderRadius = '5px';
    statusDiv.style.fontFamily = 'Arial, sans-serif';
    statusDiv.innerHTML = 'Loaded';
    document.body.appendChild(statusDiv);

    document.addEventListener('keydown', function(event) {
        if (event.key === 'F2') {
            statusDiv.innerHTML = 'debugger sucessful';
            debugger;
        }
    });

    // 显示脚本成功运行的信息
    console.log("Tampermonkey Loaded");
})();
