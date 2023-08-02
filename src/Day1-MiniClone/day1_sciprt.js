banner = [
  {
    category: '개발',
    title: '30대<br />비전공자의<br />개발자<br />커리어 전환기',
  },
  {
    category: '산업백서',
    title: '성장하는<br />주니어 일잘러는<br />어떻게 되나요?<br />',
  },
  {
    category: 'IT',
    title:
      '무자격증 지방대<br />문과생이라도<br />IT 취업과<br />이직은 하고 싶어',
  },
  {
    category: '연구',
    title:
      '3년차<br />제약회사 연구원이<br />알려주는<br />자소서&amp;면접 노하우',
  },
];

const category1 = document.querySelector('.banner_new-box-icon');
const p = document.querySelector('.banner_new-box-text p');
const btn = document.querySelectorAll('.banner-btn');

let idx = 0;
let idxMax = banner.length;

changeBanner = (idx) => {
  category1.innerText = banner[idx].category;
  p.innerHTML = banner[idx].title;
};

setInterval(() => {
  idx = (idx + 1) % idxMax;
  changeBanner(idx);
}, 2000);

const eventHandler = (e) => {
  if (e.target.classList.contains('left')) {
    idx = (idx - 1 + idxMax) % idxMax;
  } else {
    idx = (idx + 1) % idxMax;
  }
  changeBanner(idx);
};

btn.forEach((x) => {
  x.addEventListener('click', eventHandler);
});
