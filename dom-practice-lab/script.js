// Menu data structure
let menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)'

mainEl.innerHTML = '<h1>SEI ROCKS</h1>'

mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add('flex-around');

for (link of menuLinks) {
  let newAnchor = document.createElement('a')
  newAnchor.setAttribute('href', link.href)
  newAnchor.textContent = link.text
  topMenuEl.appendChild(newAnchor)
}