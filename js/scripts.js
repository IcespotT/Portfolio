// Custom Scripts
const langArr = {
  'title': {
    'en': 'Portfolio',
    'ua': 'Портфоліо',
  },
  'home': {
    'en': 'Home',
    'ua': 'Домашня сторінка',
  },
  'about': {
    'en': 'About me',
    'ua': 'Про мене',
  },
  'skills': {
    'en': 'Skills',
    'ua': 'Мої навички',
  },
  'portfolio': {
    'en': 'Portfolio',
    'ua': 'Портфоліо',
  },
  'contacts': {
    'en': 'Contacts',
    'ua': 'Контактні дані',
  },
  'denis': {
    'en': 'Dmitry',
    'ua': 'Дмитро',
  },
  'novik': {
    'en': 'Hryshko',
    'ua': 'Гришко',
  },
  'uxui': {
    'en': 'Frontend developer',
    'ua': 'Frontend розробник',
  },
  'years': {
    'en': '42 years old, Ukraine',
    'ua': '42 років, Україна',
  },
  'aboutp1': {
    'en': 'Hi, Im Oleksand – Frontend developer.',
    'ua': 'Привіт, я Олександр - Фронтенд розробник.',
  },
  'aboutp1ss': {
    'en': 'Im interested in frontend and everything connected with it.',
    'ua': 'Я цікавлюся розробкою сайтів і всім, що з ним пов`язано.',
  },
  'aboutp2': {
    'en': 'A self-taught frontend developer.',
    'ua': 'Фронтенд розробник самоучка.',
  },
  'aboutp3': {
    'en': 'Ready to implement excellent projects',
    'ua': 'Готовий реалізовувати відмінні проекти',
  },
  'aboutp3ss': {
    'en': 'with wonderful people.',
    'ua': 'з чудовими людьми.',
  },
  'iwork': {
    'en': 'I work in such programs and with such technologies as',
    'ua': 'Я працюю в таких програмах та з такими технологіями як',
  },
  'portfolio1': {
    'en': 'My pet projects',
    'ua': 'Мої пет-проекти',
  },
  'footertop': {
    'en': 'Want to know more or just chat?',
    'ua': 'Хочете дізнатися більше або просто поспілкуватися?',
  },
  'footertopss': {
    'en': 'You are welcome!',
    'ua': 'Ласкаво просимо!',
  },
  'send': {
    'en': 'Send message',
    'ua': 'Надіслати повідомлення',
  },
  'likeme': {
    'en': 'Like me on',
    'ua': 'Підписуйтесь на мене в',
  },
}
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()

const anchors = document.querySelectorAll('header a[href*="#"]')

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      anchorId = this.getAttribute('href')
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth'
      })
    })
  }
}

const ua = document.querySelector('.lang__link_ua')
const en = document.querySelector('.lang__link_en')
const allLang = ['ua', 'en']

ua.addEventListener('click', () => {
  let lang = 'ua'
  location.href = window.location.pathname + '#' + lang
  location.reload()
})
en.addEventListener('click', () => {
  let lang = 'en'
  location.href = window.location.pathname + '#' + lang
  location.reload()
})

let hash = window.location.hash

function changeLanguage() {
  hash = hash.substring(1)
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#ua'
    location.reload()
  }
  console.log(hash)
  for(let key in langArr) {
    document.querySelector('.lng-' + key).innerHTML = langArr[key][hash]
  }
}



changeLanguage()