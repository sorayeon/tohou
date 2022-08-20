const drawerMenuButtonList = document.querySelectorAll(
  '.sidebar-nav .drawer-menu-button',
);

function toggleDrawerMenu() {
  // drawerMenuButton를 감싸고 있는 .drawer-menu 한테 is-open 토글
  const drawerMenu = this.parentNode;
  drawerMenu.classList.toggle('is-open');
}

// forEach
drawerMenuButtonList.forEach((button) => {
  // console.log(item.textContent);
  button.addEventListener('click', toggleDrawerMenu);
});
