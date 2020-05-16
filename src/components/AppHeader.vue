<template>
    <div class="header" :class="[headerClass]">
        <div class="header__content">
            <ul class="header__list" data-aos="fade-up">
                <li class="header__item">
                    <a href="#" v-scroll-to="'#home'">
                        {{ $t('header.home') }}
                    </a>
                </li>
                <li class="header__item">
                    <a href="#" v-scroll-to="'#education'">
                        {{ $t('header.education') }}
                    </a>
                </li>
                <li class="header__item">
                    <a href="#" v-scroll-to="'#experience'">
                        {{ $t('header.experience') }}
                    </a>
                </li>
                <li class="header__item">
                    <a href="#" v-scroll-to="'#skills'">
                        {{ $t('header.skills') }}
                    </a>
                </li>
                <li class="header__item">
                    <a href="#" v-scroll-to="'#about'">
                        {{ $t('header.about') }}
                    </a>
                </li>
                <li class="header__item">
                    <a href="#" v-scroll-to="'#portfolio'">
                        {{ $t('header.portfolio') }}
                    </a>
                </li>
                <li class="header__item">
                    <a href="#" v-scroll-to="'#contacts'">
                        {{ $t('header.contacts') }}
                    </a>
                </li>
            </ul>
            <div class="header__language"
                 @click="changeLangChooseVisibility">
                <img class="header__language_img" :src="currentLangImg" alt="">
                <span class="header__language_name">
                        {{ currentLangName }}
                    </span>
                <transition name="showLang">
                    <div class="header__language_choose"
                         v-if="isLanguageChooseShow">
                        <div class="header__language_choose-item" @click="changeLang('ru')"
                             v-if="$locale !== 'ru'">
                            <img src="./../../public/img/ru.png" alt="">
                            <span>Рус</span>
                        </div>
                        <div class="header__language_choose-item" @click="changeLang('en')"
                             v-if="$locale !== 'en'">
                            <img src="./../../public/img/eng.png" alt="">
                            <span>Eng</span>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="header-mobile__button">
                <input type="checkbox" id="checkbox" class="checkbox visuallyHidden" ref="checkbox">
                <label for="checkbox" @click="changeVisibilityOfMobileMenu">
                    <div class="hamburger hamburger-btn">
                        <span class="bar bar1"></span>
                        <span class="bar bar2"></span>
                        <span class="bar bar3"></span>
                        <span class="bar bar4"></span>
                    </div>
                </label>
            </div>
        </div>
        <transition name="animationMenuMobile">
            <div class="header-mobile" v-if="isMobileMenuOpened">
                <ul class="header-mobile__list">
                    <li class="header-mobile__item" @click="changeVisibilityOfMobileMenu">
                        <a href="#" v-scroll-to="'#home'">
                            {{ $t('header.home') }}
                        </a>
                    </li>
                    <li class="header-mobile__item" @click="changeVisibilityOfMobileMenu">
                        <a href="#" v-scroll-to="'#education'">
                            {{ $t('header.education') }}
                        </a>
                    </li>
                    <li class="header-mobile__item" @click="changeVisibilityOfMobileMenu">
                        <a href="#" v-scroll-to="'#experience'">
                            {{ $t('header.experience') }}
                        </a>
                    </li>
                    <li class="header-mobile__item" @click="changeVisibilityOfMobileMenu">
                        <a href="#" v-scroll-to="'#skills'">
                            {{ $t('header.skills') }}
                        </a>
                    </li>
                    <li class="header-mobile__item" @click="changeVisibilityOfMobileMenu">
                        <a href="#" v-scroll-to="'#about'">
                            {{ $t('header.about') }}
                        </a>
                    </li>
                    <li class="header-mobile__item" @click="changeVisibilityOfMobileMenu">
                        <a href="#" v-scroll-to="'#portfolio'">
                            {{ $t('header.portfolio') }}
                        </a>
                    </li>
                    <li class="header-mobile__item" @click="changeVisibilityOfMobileMenu">
                        <a href="#" v-scroll-to="'#contacts'">
                            {{ $t('header.contacts') }}
                        </a>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>

    import Vue from 'vue'
    import VueScrollTo from 'vue-scrollto'

    Vue.use(VueScrollTo, {
        container: "body",
        duration: 1000,
        easing: "ease",
        offset: -80,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true,
    })

    export default {
        data: () => ({
            isLanguageChooseShow: false,
            currentLangName: 'Рус',
            currentLangImg: 'img/ru.png',
            isMobileMenuOpened: false,
            headerClass: 'menu_inactive'
        }),
        mounted() {
            if (this.$i18n.locale !== 'ru') this.changeLang(this.$i18n.locale);
        },
        methods: {
            changeLangChooseVisibility() {
                let body = document.body;
                let oneClickCloseLangChoose = () => {
                    this.isLanguageChooseShow = false;
                };

                this.isLanguageChooseShow = !this.isLanguageChooseShow;
                if (this.isLanguageChooseShow) {
                    setTimeout(() => {
                        body.addEventListener('click', oneClickCloseLangChoose, {once: true})
                    }, 10)
                }
            },
            changeLang(val) {
                this.$i18n.locale = val;
                let changeLangData = (name, imgSrc) => {
                    this.currentLangName = name;
                    this.currentLangImg = imgSrc;
                };
                switch (val) {
                    case 'en':
                        changeLangData('Eng', 'img/eng.png');
                        break;
                    case 'ru':
                        changeLangData('Рус', 'img/ru.png');
                        break;
                    default:
                        changeLangData('Рус', 'img/ru.png');
                }
            },
            changeVisibilityOfMobileMenu() {
                this.$refs.checkbox.classList.toggle('checked')

                if (this.isMobileMenuOpened === false) {
                    this.isMobileMenuOpened = true
                    this.headerClass = 'menu_active';
                }
                else {
                    this.isMobileMenuOpened = false
                    this.headerClass = 'menu_inactive';
                }
            },
        },
        watch: {
            $locale() {
                this.changeLang(this.$i18n.locale);
            }
        }
    }
</script>

