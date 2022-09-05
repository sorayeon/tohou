(function () {
  const orderCta = document.querySelector('.order-cta');

  // console.log(orderCta.children); /** 자식 요소 */
  // console.log(orderFormModal.previousElementSibling); /** 이전 형제요소 */
  // console.log(orderFormModal.nextElementSibling); /** 다음 형제요소 */

  const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children;

  // const orderCtaBuyButton = orderCta.querySelector('.btn-primary');
  // const orderCtaBookmarkButton = orderCta.querySelector('.btn-ghost');

  const orderFormModal = document.querySelector('.order-form-modal');
  const orderFormModalOverlay = document.querySelector('.overlay');

  function openOrderFormModal() {
    orderFormModal.classList.add('is-open');
    orderFormModalOverlay.classList.add('is-active');
  }
  function closeOrderFormModal() {
    orderFormModal.classList.remove('is-open');
    orderFormModalOverlay.classList.remove('is-active');
  }

  orderCtaBuyButton.addEventListener('click', openOrderFormModal);

  orderFormModalOverlay.addEventListener('click', closeOrderFormModal);

  function toggleOrderCtaBookmark() {
    // 1. 버튼 is-active 클래스 추가
    // 2. 자식요소 icon 클래스 변경 -> ic-bookmark vs. ic-bookmark-filled
    // 3. 카운트 숫자 값을 변경
    const [icon, countSpan] = this.children;
    const count = Number(countSpan.innerHTML.replaceAll(',', ''));

    let newCount = count;

    if (this.classList.contains('is-active')) {
      // 활성화 된 상태이니 -> 비활성화 (ic-bookmark)
      icon.classList.replace('ic-bookmark-filled', 'ic-bookmark');
      --newCount;
    } else {
      // 비활성화 된 상태이니 -> 활성화 (ic-bookmark-filled)
      icon.classList.replace('ic-bookmark', 'ic-bookmark-filled');
      ++newCount;
    }

    countSpan.innerHTML = newCount.toLocaleString();
    countSpan.setAttribute(
      'aria-label',
      `북마크 ${newCount.toLocaleString()}회`,
    );
    this.classList.toggle('is-active');
  }

  orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark);
})();
