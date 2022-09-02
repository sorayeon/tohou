const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button',
);
const gnbSearchHistoryList = gnbSearchHistory.querySelector(
  '.search-history-list',
);

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
    gnbSearchHistory.classList.remove('is-active');
    window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside);
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);

function deleteAllSearchHistoryItems() {
  // gnbSearchHistoryList 안에 들어있는 모든 li를 삭제해!
  gnbSearchHistoryList.innerHTML = '';
  gnbSearchHistory.classList.remove('is-active');
}

deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems);
