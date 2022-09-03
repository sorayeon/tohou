const reviewLikeButtonList = document.querySelectorAll(
  '.review-card-footer button',
);

const HELPFUL = '도움됨';
const NOT_HELPFUL = '도움이 돼요';
// const checkIcon = `<i class="ic-check" aria-hidden></i>`;
function toggleReviewLikeButton() {
  const isLiked = this.classList.contains('btn-primary');
  // console.log(isLiked, this.innerHTML);

  // 1. btn 클래스 btn-primary <-> btn-outlined
  this.classList.toggle('btn-primary');
  this.classList.toggle('btn-outlined');
  // 2. 텍스트 변경 : 도움됨 <-> 도움이 돼요
  if (isLiked) {
    // 비활성화
    this.innerHTML = NOT_HELPFUL;
  } else {
    // 활성화
    this.innerHTML = HELPFUL;

    const checkIcon = document.createElement('i');
    checkIcon.classList.add('ic-check');
    checkIcon.setAttribute('aria-hidden', true);
    // this.appendChild(checkIcon); // 해당 요소에 가장 마지막 자식으로 들어감
    this.prepend(checkIcon);
  }
  // 3. count : n명에게 도움이 되었습니다.
  const textElement = this.nextElementSibling; // 버튼의 다음 형제요소
  const reviewCardFooter = this.parentNode;
  if (textElement) {
    // n명 => n값을 업데이트
    const countSpan = textElement.querySelector('span');
    const count = Number(countSpan.innerHTML.replaceAll(',', ''));
    let newCount = count;
    if (isLiked) {
      // 비활성화 count - 1
      --newCount;
      if (newCount === 0) {
        reviewCardFooter.removeChild(textElement);
      } else {
        countSpan.innerHTML = newCount.toLocaleString();
      }
    } else {
      // 활성화 count + 1
      ++newCount;
      countSpan.innerHTML = newCount.toLocaleString();
    }
  } else {
    if (!isLiked) {
      // 앞으로 활성화가 됩니다. => 1명에게 도움
      const newTextElement = document.createElement('p');
      newTextElement.innerHTML = `<strong><span>1</span>명</strong>에게 도움이
      되었습니다.`;

      reviewCardFooter.appendChild(newTextElement);
    } else {
      reviewCardFooter.removeChild();
    }
  }
}

reviewLikeButtonList.forEach((button) =>
  button.addEventListener('click', toggleReviewLikeButton),
);
