const sideBarMenuButton = document.querySelector('.gnb-icon-button.is-menu');
const sideBar = document.querySelector('.sidebar');
const sideBarOverlay = document.querySelector('.overlay');

function openSidebar() {
  // 사이드바, 오버레이가 보이게
  // .is-active
  // classList
  sideBar.classList.add('is-active');
  sideBarOverlay.classList.add('is-active');
}

sideBarMenuButton.addEventListener('click', openSidebar);

function closeSidebar() {
  // .is-active 제거
  sideBar.classList.remove('is-active');
  sideBarOverlay.classList.remove('is-active');
}

sideBarOverlay.addEventListener('click', closeSidebar);
