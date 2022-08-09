const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  //autoplay: true,
  //autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  //preventScrollOnTouch: true,
});

const userGallery = tns({
  container: '.user-gallery .slider-list',
  controls: false,
  gutter: 4, // 이미지 간격
  edgePadding: 16,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  responsive: {
    768: {
      controls: true,
      gutter: 6,
      edgePadding: 75,
    },
  },
});
