document.addEventListener('DOMContentLoaded', () => {
    // 按鈕點擊效果
    const clickButton = document.getElementById('clickButton');
    if (clickButton) {
        clickButton.addEventListener('mousedown', () => {
            // 可以在此添加更複雜的JS動畫，或依賴CSS的:active偽類
            console.log('按鈕被點擊');
        });
    }

    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.addEventListener('click', () => {
            submitButton.textContent = '處理中...';
            submitButton.disabled = true;
            setTimeout(() => {
                submitButton.textContent = '已提交!';
                submitButton.style.backgroundColor = '#27ae60'; // 更改為成功顏色
                // 模擬提交完成後恢復
                setTimeout(() => {
                    submitButton.textContent = '提交';
                    submitButton.disabled = false;
                    submitButton.style.backgroundColor = '#2ecc71'; // 恢復原色
                }, 2000);
            }, 1500);
        });
    }


    // 加載提示動畫
    const showLoaderButton = document.getElementById('showLoaderButton');
    const loader = document.querySelector('.loader');
    const loaderText = document.querySelector('.loader-container p');

    if (showLoaderButton && loader && loaderText) {
        showLoaderButton.addEventListener('click', () => {
            loader.style.display = 'block';
            loaderText.style.display = 'block';
            showLoaderButton.disabled = true;
            showLoaderButton.textContent = '正在加載...';

            setTimeout(() => {
                loader.style.display = 'none';
                loaderText.style.display = 'none';
                showLoaderButton.disabled = false;
                showLoaderButton.textContent = '顯示加載動畫 (3秒)';
            }, 3000);
        });
    }

    // 操作反饋 - 收藏物件
    const favoriteButton = document.getElementById('favoriteButton');
    if (favoriteButton) {
        favoriteButton.addEventListener('click', () => {
            favoriteButton.classList.toggle('favorited');
            const svgIcon = favoriteButton.querySelector('svg');
            if (favoriteButton.classList.contains('favorited')) {
                // 此處 fill 由 CSS 控制，JS 可用於更複雜的狀態管理或API調用
                console.log('已收藏');
            } else {
                console.log('取消收藏');
            }
        });
    }

    // 操作反饋 - 彈出消息
    const showMessageButton = document.getElementById('showMessageButton');
    const popupMessage = document.getElementById('popupMessage');

    if (showMessageButton && popupMessage) {
        showMessageButton.addEventListener('click', () => {
            popupMessage.classList.add('show');

            // 3秒後自動隱藏消息
            setTimeout(() => {
                popupMessage.classList.remove('show');
            }, 3000);
        });
    }
});
