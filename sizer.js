 // 获取所有筛选按钮和内容元素
 var filterButtons = document.querySelectorAll('.filter-btn');
 var scrollContents = document.querySelectorAll('.scroll-content');
 
 // 为每个筛选按钮添加点击事件
 filterButtons.forEach(function(button) {
     button.addEventListener('click', function() {
         // 移除所有按钮的激活状态
         filterButtons.forEach(function(btn) {
             btn.classList.remove('active');
         });
         // 为当前点击的按钮添加激活状态
         this.classList.add('active');
 
         // 获取当前筛选类型
         var filterType = this.getAttribute('data-type');
 
         // 遍历所有内容元素，显示或隐藏
         scrollContents.forEach(function(content) {
             // 获取元素类型（从嵌套的 img 元素类名中提取）
             var imgElement = content.querySelector('[class^="img-"]');
             if (!imgElement) {
                 console.warn('元素缺少 img 子元素：', content);
                 return; // 跳过该元素
             }
 
             var className = imgElement.className;
             var itemType = className.split('-')[1].replace(/\d+/g, ''); // 提取类型
 
             // 根据筛选类型显示或隐藏元素
             if (filterType === '全部' || filterType === itemType) {
                 content.style.display = ''; // 显示
             } else {
                 content.style.display = 'none'; // 隐藏
             }
         });
     });
 });
 
 // 默认选中“全部”按钮
 document.querySelector('.filter-btn[data-type="全部"]').click();
 