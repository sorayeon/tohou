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
