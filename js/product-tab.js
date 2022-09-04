(function () {
  const productTab = document.querySelector('.product-tab');
  const productTabButtonList = productTab.querySelectorAll(
    '.product-tab-item button',
  );

  let currentActiveTab = productTab.querySelector(
    '.product-tab-item.is-active',
  );

  function activeProductTab() {
    // 1. is-active
    const tabItem = this.parentNode;
    if (currentActiveTab !== tabItem) {
      tabItem.classList.add('is-active');
      currentActiveTab.classList.remove('is-active');
      currentActiveTab = tabItem;
    }
  }

  productTabButtonList.forEach((button) => {
    button.addEventListener('click', activeProductTab);
  });
})();
