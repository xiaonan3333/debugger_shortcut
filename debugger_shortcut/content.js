(function() {
    'use strict';

    // 创建UI元素，显示脚本状态
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
    statusDiv.innerHTML = '脚本已加载 - 等待按键操作';
    document.body.appendChild(statusDiv);

    // 监听按键事件
    document.addEventListener('keydown', function(event) {
        // 检查按下的是不是 'F2' 键
        if (event.key === 'F2') {
            // 更新UI，提示按键被按下
            statusDiv.innerHTML = 'F2 键被按下！';
            debugger;
        }
    });

    console.log("按键监听浏览器插件已加载。");
})();
