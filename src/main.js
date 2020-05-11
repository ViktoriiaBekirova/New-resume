import Vue from 'vue'
import App from './App.vue'

import VueI18n from 'vue-i18n'

import './scss/main.scss'

Vue.config.productionTip = false;
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: (window.navigator ? (window.navigator.language) : 'en').substr(0, 2).toLowerCase(),
    messages: {
        "en": {
            header: {
                home: 'home',
                education: 'education',
                experience: 'experience',
                skills: 'skills ',
                about: 'about me',
                portfolio: 'portfolio',
                contacts: 'contacts'
            },
            main: {
                education: 'education / advanced courses',
                experience: 'experience',
                skills: 'key skills and knowledge',
                about: 'about me',
                portfolio: 'work examples',
                hello: 'hello',
                myNameIs: 'my name is',
                name: 'viktoria bekirova',
                myProfession: 'i\'m frontend-developer',
                open: 'open',
                infoCourse: 'IT-Sukhorukov Academy, course: “ Frontend developer ”',
                infoCourse2: 'IT-Sukhorukov Academy, course: “ HTML, CSS ”',
                university: 'Novosibirsk State Technical University',
                faculty: 'faculty: “ Aircraft ”, specialization: “ Management in technical systems ”',
                faculty2: 'faculty: “ Automation and Computer Engineering ”, specialization: “ Automation and Control ”',
                freelance: 'Freelance',
                june: 'june',
                december: 'december',
                january: 'january',
                april: 'april',
                untilNow: 'until now',
                rusoft: 'LTD “ Rusoft ”',
                may: 'may',
                adaptiveCrossBrowser: 'Adaptive, cross-browser code',
                workExperience: 'Experience with',
                aboutText: 'I prepare valid, adaptive, and cross-browser code. I mostly write on Vue but also have some experience working with React. I enjoy collaborating with a team and brainstorming ideas. I am always happy to learn something new about web development and improve my code'
            }
        },
        "ru": {
            header: {
                home: 'главная',
                education: 'образование',
                experience: 'опыт',
                skills: 'навыки',
                about: 'обо мне',
                portfolio: 'портфолио',
                contacts: 'контакты'
            },
            main: {
                education: 'образование / дополнительные курсы',
                experience: 'опыт работы',
                skills: 'ключевые навыки и знания',
                about: 'обо мне',
                portfolio: 'примеры работ',
                hello: 'привет',
                myNameIs: 'меня зовут',
                name: 'виктория бекирова',
                myProfession: 'я frontend-разработчик',
                open: 'открыть',
                infoCourse: 'IT-Академия Сухорукова, курс: “ Frontend developer ”',
                infoCourse2: 'IT-Академия Сухорукова, курс: “ HTML, CSS ”',
                university: 'Новосибирский государственный технический университет',
                faculty: 'факультет : “ Летательных аппаратов ”, специализация: “ Управление в технических системах ”',
                faculty2: 'факультет: “ Автоматики и вычислительной техники ”, специализация: “ Автоматизация и управление ”',
                freelance: 'Фриланс',
                june: 'июнь',
                december: 'декабрь',
                january: 'январь',
                april: 'апрель',
                untilNow: 'по настоящее время',
                rusoft: 'ООО “ Русофт ”',
                may: 'май',
                adaptiveCrossBrowser: 'Адаптивная, кроссбраузерная верстка',
                workExperience: 'Опыт работы с',
                aboutText: 'Делаю валидную адаптивную и кроссбраузерную верстку. В основном пишу на Vue, есть небольшой опыт работы с React. Нравится работать в команде, совершенствовать свой код и узнавать новое из мира веб-разработки'
            }
        }
    }
});

Object.defineProperty(Vue.prototype, '$locale', {
    get: function () {
        return i18n.locale
    },
    set: function (locale) {
        i18n.locale = locale
    }
});

new Vue({
    i18n,
    render: h => h(App),
}).$mount('#app');
