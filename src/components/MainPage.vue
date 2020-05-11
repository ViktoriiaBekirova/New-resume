<template>
    <div class="main">
        <app-header></app-header>
        <section class="main-section" id="home">
            <div class="wrapper">
                <div class="main-section__content" data-aos="fade-left">
                    <h1 class="style-title">{{$t('main.hello')}},</h1>
                    <h2 class="style-title">{{$t('main.myNameIs')}}</h2>
                    <h2 class="style-title">{{$t('main.name')}},</h2>
                    <h2 class="style-title">{{$t('main.myProfession')}}</h2>
                </div>
            </div>
        </section>
        <section class="education-section" id="education">
            <div class="wrapper">
                <div data-aos="fade-right">
                    <h3 class="title-section">{{ $t('main.education') }}</h3>
                    <h4 class="title-data">2017</h4>
                    <p class="title-info">{{$t('main.infoCourse')}}</p>
                    <h4 class="title-data">2017</h4>
                    <p class="title-info">{{$t('main.infoCourse2')}}</p>
                    <h4 class="title-data">2014</h4>
                    <p class="title-info">{{$t('main.university')}},</p>
                    <p class="title-info">{{$t('main.faculty')}}</p>
                    <h4 class="title-data">2012</h4>
                    <p class="title-info">{{$t('main.university')}},</p>
                    <p class="title-info">{{$t('main.faculty2')}}</p>
                </div>
            </div>
        </section>
        <section class="experience-section" id="experience">
            <div class="wrapper">
                <div data-aos="fade-left">
                    <h3 class="title-section">{{ $t('main.experience') }}</h3>
                    <h4 class="title-data">{{$t('main.january')}} 2018 - {{$t('main.may')}} 2018</h4>
                    <p class="title-info">{{$t('main.freelance')}}</p>
                    <h4 class="title-data">{{$t('main.june')}} 2018 - {{$t('main.december')}} 2018</h4>
                    <p class="title-info">"Lebedev Studio", Junior frontend - developer</p>
                    <h4 class="title-data">{{$t('main.january')}} 2019 - {{$t('main.april')}} 2019</h4>
                    <p class="title-info">{{$t('main.freelance')}}</p>
                    <h4 class="title-data">{{$t('main.april')}} 2019 - {{$t('main.untilNow')}}</h4>
                    <p class="title-info">{{$t('main.rusoft')}}, Frontend - developer</p>
                </div>
            </div>
        </section>
        <section class="skills-section" id="skills">
            <div class="wrapper">
                <div data-aos="fade-right">
                    <h3 class="title-section">{{ $t('main.skills') }}</h3>
                    <ul class="title-list">
                        <li>&#8212; HTML, CSS</li>
                        <li>&#8212; SASS, SCSS, LESS</li>
                        <li>&#8212; {{ $t('main.adaptiveCrossBrowser') }}</li>
                        <li>&#8212; Smartgrid, Bootstrap, Foundation for emails</li>
                        <li>&#8212; JavaScript(ES5, ES6)</li>
                        <li>&#8212; JQUERY</li>
                        <li>&#8212; JQUERY UI</li>
                        <li>&#8212; {{$t('main.workExperience')}} Gulp, Webpack</li>
                        <li>&#8212; {{$t('main.workExperience')}} Git</li>
                        <li>&#8212; {{$t('main.workExperience')}} Vue + Nuxt, Vue CLI</li>
                        <li>&#8212; {{$t('main.workExperience')}} React.js</li>
                        <li>&#8212; Photoshop, Zeplin, Adobe XD, Figma</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="about-section" id="about">
            <div class="wrapper">
                <div data-aos="fade-left">
                    <h3 class="title-section">{{ $t('main.about') }}</h3>
                    <p class="title-info">{{ $t('main.aboutText') }}</p>
                </div>
            </div>
        </section>
        <section class="portfolio-section " id="portfolio">
            <div class="wrapper">
                <h3 class="title-section" data-aos="fade-left">{{ $t('main.portfolio') }}</h3>
            </div>
            <app-slider></app-slider>
        </section>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from "./AppHeader"
    import AppSlider from "./AppSlider"
    import AppFooter from "./AppFooter"

    import AOS from 'aos/dist/aos.js';

    AOS.init({
        duration: 1000
    });

    export default {
        components: {
            AppHeader,
            AppSlider,
            AppFooter
        }
    }
</script>
