# 내일의 집

### Grid 시스템

| Mobile | Tablet | Desktop | Class      |
| ------ | ------ | ------- | ---------- |
| O      | X      | X       | .sm-only   |
| O      | O      | X       | .lg-hidden |
| X      | O      | X       | .md-only   |
| X      | O      | O       | .sm-hidden |
| X      | X      | O       | .lg-only   |
| O      | X      | O       | .md-hidden |

### GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>
  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="장바구니 페이지로 이동"
  >
    <i class="ic-cart"></i>
  </a>
  <div class="gnb-auth sm-hidden">
    <a>로그인</a>
    <a>회원가입</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a
    class="gnb-icon-button sm-hidden"
    href="/"
    aria-label="스크랩북 페이지로 이동"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a
    class="gnb-icon-button sm-hidden"
    href="/"
    aria-label="내 소식 페이지로 이동"
  >
    <i class="ic-bell"></i>
  </a>

  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="장바구니 페이지로 이동"
  >
    <i class="ic-cart"></i>
    <strong class="badge">20</strong>
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="마이메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="영소리" />
    </div>
  </button>
</div>
```

### Sidebar

- 로그인을 하지 않은 경우

```html
<div class="sidebar-auth">
  <a class="btn-outlined btn-40" href="/">로그인</a>
  <a class="btn-primary btn-40" href="/">회원가입</a>
</div>
```

- 로그인을 했을 경우

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" alt="영소리" />
    </div>
    <strong class="username">영소리</strong>
  </a>
</div>
```

# Review Card Variations

## 1. Review Card Header

| Avatar | Username | Rating | Timestamp | Vendor | Desc                           | ✅  |
| ------ | -------- | ------ | --------- | ------ | ------------------------------ | --- |
| O      | 필수     | 필수   | 필수      | 필수   | 유저 프로필 이미지가 있는 경우 |
| X      | 필수     | 필수   | 필수      | 필수   | 유저 프로필 이미지가 없는 경우 |

## 2. Review Card Body

| Image | Text Content | Desc                                  | ✅  |
| ----- | ------------ | ------------------------------------- | --- |
| X     | 필수         | 유저가 리뷰 이미지를 올리지 않은 경우 |
| O     | 필수         | 유저가 리뷰 이미지를 올린 경우        |

## 3. Review Card Footer

| Help Button | Helped | Desc                                | ✅  |
| ----------- | ------ | ----------------------------------- | --- |
| True        | O      | 사용자가 도움됨을 체크, 도움됨 1+   |
| False       | O      | 사용자가 도움됨을 미체크, 도움됨 1+ |
| False       | X      | 사용자가 도움됨을 미체크, 도움됨 X  |

# Inquiry Card Variations

| Public | Question        | Answer | Desc                     | ✅  |
| ------ | --------------- | ------ | ------------------------ | --- |
| X      | "비밀글입니다." | 미노출 | 문의가 비공개일 경우     |
| O      | 노출            | X      | 문의는 공개, 답변 미완료 |
| O      | 노출            | O      | 문의는 공개, 답변 완료   |
