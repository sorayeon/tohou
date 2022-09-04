(function () {
  const gnbSearch = document.querySelector('.gnb-search');
  const gnbSearchInput = gnbSearch.querySelector('input');
  const gnbSearchHistory = gnbSearch.querySelector('.search-history');

  const deleteAllButton = gnbSearchHistory.querySelector(
    '.search-history-header button',
  );
  const gnbSearchHistoryList = gnbSearchHistory.querySelector(
    '.search-history-list',
  );
  const deleteButtonList =
    gnbSearchHistoryList.querySelectorAll('.delete-button');

  function closeGnbSearchHistory() {
    gnbSearchHistory.classList.remove('is-active');
    window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside);
  }

  function openGnbSearchHistory() {
    // 체크 => gnbSearchHistoryList 안에 li가 0개 => 실행 X
    if (gnbSearchHistoryList.children.length == 0) {
      return;
    }

    if (!gnbSearchHistory.classList.contains('is-active')) {
      window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside);
    }
    gnbSearchHistory.classList.add('is-active');
  }

  function closeGnbSearchHistoryOnClickingOutside(e) {
    if (!gnbSearch.contains(e.target)) {
      closeGnbSearchHistory();
    }
  }

  gnbSearchInput.addEventListener('focus', openGnbSearchHistory);

  function deleteAllSearchHistoryItems() {
    // gnbSearchHistoryList 안에 들어있는 모든 li를 삭제해!
    gnbSearchHistoryList.innerHTML = '';
    closeGnbSearchHistory();
  }

  deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems);

  function deleteSearchHistoryItem(e) {
    e.stopPropagation(); // 이벤트 전파 막는 함수
    // li 삭제
    const itemToDelete = this.parentNode;
    gnbSearchHistoryList.removeChild(itemToDelete);

    if (gnbSearchHistoryList.children.length == 0) {
      closeGnbSearchHistory();
    }
  }

  deleteButtonList.forEach((deleteButton) => {
    deleteButton.addEventListener('click', deleteSearchHistoryItem);
  });
})();
