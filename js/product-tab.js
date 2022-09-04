(function () {
  const productTab = document.querySelector('.product-tab');
  const productTabButtonList = productTab.querySelectorAll(
    '.product-tab-item button',
  );

  // 현재 선택된 Tab State
  let currentActiveTab = productTab.querySelector(
    '.product-tab-item.is-active',
  );

  const TOP_HEADER_DESKTOP = 80 + 50 + 54;
  const TOP_HEADER_MOBILE = 50 + 40 + 40;

  // Product Tab Active 상태 변경
  function activeProductTab() {
    // 1. is-active
    const tabItem = this.parentNode;
    if (currentActiveTab !== tabItem) {
      tabItem.classList.add('is-active');
      currentActiveTab.classList.remove('is-active');
      currentActiveTab = tabItem;
    }
  }

  // 선택된 Tab Panel 로 스크롤 => window.scrollBy({top:x, left:y})
  function scrollToTabPanel() {
    const tabPanelId = this.parentNode.getAttribute('aria-labelledby');
    const tabPanel = document.querySelector(`#${tabPanelId}`);

    // ?? 얼마나 스크롤을 시켜야 하는가 => element.getBoundingClientRect()
    // window.innerWidth 현재 창의 가로너비
    const scrollAmount =
      tabPanel.getBoundingClientRect().top -
      (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE);

    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth', // 부드럽게 이동
    });
  }

  productTabButtonList.forEach((button) => {
    button.addEventListener('click', activeProductTab);
    button.addEventListener('click', scrollToTabPanel);
  });

  // 사전정보 : 각 tabPanel의 y축 위치 (문서의 시작점에서 얼마나 아래에 있는지)
  // 찾는 요소의 Y축 위치 값 = window.scrollY + element.getBoundingClientRect().top
  const productTabPanelIdList = [
    'product-spec',
    'product-review',
    'product-inquiry',
    'product-shipment',
    'product-recommendation',
  ];
  const productTabPanelList = productTabPanelIdList.map((tabPanelId) =>
    document.querySelector(`#${tabPanelId}`),
  );
  const productTabPanelPositionMap = {};

  function detectTabPanelPosition() {
    // 각각의 tabPanel의 y축 위치를 찾는다
    // productTabPanelPositionMap에 그 값을 업데이트
    // {
    // product-spec: 1000,
    // product-review: 5000,
    // product-inquiry: 7000,
    // product-shipment: 8000,
    // product-recommendation: 10000
    // }
    productTabPanelList.forEach((panel) => {
      // id
      const id = panel.getAttribute('id');
      // y축 위치
      const position = window.scrollY + panel.getBoundingClientRect().top;
      productTabPanelPositionMap[id] = position;
    });
    console.log(productTabPanelPositionMap['product-spec']);
  }

  window.addEventListener('load', detectTabPanelPosition);
  window.addEventListener('resize', detectTabPanelPosition);
})();
