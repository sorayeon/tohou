const sectionHeaderIconButton = document.querySelector(
  '#product-shipment .product-section-header.sm-only .icon-button',
);
// const productShipment = document.querySelector('#product-shipment');

function showFullSection() {
  // product-shipment + is-open
  // productShipment.classList.add('is-open');
  const section = this.parentNode.parentNode;
  section.classList.add('is-open');
}

sectionHeaderIconButton.addEventListener('click', showFullSection);
