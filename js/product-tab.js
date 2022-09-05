(function () {
  const productTab = document.querySelector('.product-tab');
  const productTabButtonList = productTab.querySelectorAll(
    '.product-tab-item button',
  );

  // 현재 선택된 Tab State
  let currentActiveTab = productTab.querySelector(
    '.product-tab-item.is-active',
  );
  let disableUpdating = false;

  const TOP_HEADER_DESKTOP = 80 + 50 + 54;
  const TOP_HEADER_MOBILE = 50 + 40 + 40;

  // Product Tab Active 상태 변경
  function activeProductTab() {
    // 1. is-active
    const tabItem = this.parentNode;
    if (currentActiveTab !== tabItem) {
      tabItem.classList.add('is-active');
      if (currentActiveTab) {
        currentActiveTab.classList.remove('is-active');
      }
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

    disableUpdating = true;
    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth', // 부드럽게 이동
    });
    setTimeout(() => {
      disableUpdating = false;
    }, 1000);
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

  // 각 tabPanel y축 위치 저장 변수
  const productTabPanelPositionMap = {};

  // load, resize => tab panel 포지션 찾기
  function detectTabPanelPosition() {
    // 각각의 tabPanel의 y축 위치를 찾는다
    // productTabPanelPositionMap에 그 값을 업데이트
    productTabPanelList.forEach((panel) => {
      // id
      const id = panel.getAttribute('id');
      // y축 위치
      const position = window.scrollY + panel.getBoundingClientRect().top;
      productTabPanelPositionMap[id] = position;
    });

    updateActiveTabOnScroll();
  }

  // scroll
  function updateActiveTabOnScroll() {
    if (disableUpdating) {
      return;
    }

    // 스크롤 위치에 따라서 activeTab 업데이트
    // 1. 현재 유저가 얼마만큼 스크롤을 하느냐 => window.scrollY
    // 2. 각 tabPanel y축 위치 => productTabPanelPositionMap

    const scrolledAmount =
      window.scrollY +
      (window.innerWidth >= 768
        ? TOP_HEADER_DESKTOP + 80
        : TOP_HEADER_MOBILE + 8);

    let newActiveTab;
    if (
      scrolledAmount >= productTabPanelPositionMap['product-recommendation']
    ) {
      newActiveTab = productTabButtonList[4]; // 추천 버튼
    } else if (
      scrolledAmount >= productTabPanelPositionMap['product-shipment']
    ) {
      newActiveTab = productTabButtonList[3]; // 배송/환불 버튼
    } else if (
      scrolledAmount >= productTabPanelPositionMap['product-inquiry']
    ) {
      newActiveTab = productTabButtonList[2]; // 문의 버튼
    } else if (scrolledAmount >= productTabPanelPositionMap['product-review']) {
      newActiveTab = productTabButtonList[1]; // 리뷰 버튼
    } else {
      newActiveTab = productTabButtonList[0]; // 상품정보 버튼
    }

    // 끝까지 스크롤을 한 경우 newActiveTab = productTabButtonList[4]
    // window.scrollY + window.innerHeight === body의 전체 height
    // window.innerWidth < 1200 - orderCta, 56px
    const scrollHeight =
      parseInt((window.scrollY + window.innerHeight) / 10, 10) * 10;
    const bodyHeight =
      parseInt(
        (document.body.offsetHeight + (window.innerWidth < 1200 ? 56 : 0)) / 10,
        10,
      ) * 10;

    if (scrollHeight >= bodyHeight) {
      newActiveTab = productTabButtonList[4];
    }

    if (newActiveTab) {
      activeProductTab.call(newActiveTab);
    }
  }

  window.addEventListener('load', detectTabPanelPosition);
  window.addEventListener('resize', _.throttle(detectTabPanelPosition, 1000));
  window.addEventListener('scroll', _.throttle(updateActiveTabOnScroll, 300));
})();
