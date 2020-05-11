<template>
    <div class="slider-content" data-aos="zoom-in">
        <ul class="controls" id="customize-controls">
            <li class="prev" data-controls="prev">
                <img src="../../public/img/left.png"/>
            </li>
            <li class="next" data-controls="next">
                <img src="../../public/img/right.png"/>
            </li>
        </ul>
        <tiny-slider class="slider" v-bind="tinySliderOptions">
            <div class="slider__block">
                <a href="https://infintec.net/" target="_blank">
                    <img src="../../public/img/ift.jpg"/>
                    <div class="mask">
                        <p>{{ $t('main.open') }}</p>
                    </div>
                </a>
            </div>
            <div class="slider__block">
                <a href="https://medical.bekirova.ru/" target="_blank">
                    <img src="../../public/img/medical.jpg"/>
                    <div class="mask">
                        <p>{{ $t('main.open') }}</p>
                    </div>
                </a>
            </div>
            <div class="slider__block">
                <a href="https://ircle.bekirova.ru/" target="_blank">
                    <img src="../../public/img/ircle.jpg"/>
                    <div class="mask">
                        <p>{{ $t('main.open') }}</p>
                    </div>
                </a>
            </div>
            <div class="slider__block">
                <a href="https://zvintauge.bekirova.ru/" target="_blank">
                    <img src="../../public/img/vintage.jpg"/>
                    <div class="mask">
                        <p>{{ $t('main.open') }}</p>
                    </div>
                </a>
            </div>
            <div class="slider__block">
                <a href="https://sale-promo.bekirova.ru/" target="_blank">
                    <img src="../../public/img/sale-promo.jpg"/>
                    <div class="mask">
                        <p>{{ $t('main.open') }}</p>
                    </div>
                </a>
            </div>
            <div class="slider__block">
                <a href="https://investment-promo.bekirova.ru/" target="_blank">
                    <img src="../../public/img/investment-promo.jpg"/>
                    <div class="mask">
                        <p>{{ $t('main.open') }}</p>
                    </div>
                </a>
            </div>
            <div class="slider__block">
                <a href="https://payment-for-services.bekirova.ru/" target="_blank">
                    <img src="../../public/img/payment-for-services.jpg"/>
                    <div class="mask">
                        <p>{{ $t('main.open') }}</p>
                    </div>
                </a>
            </div>
            <div class="slider__block">
                <a href="https://apartments.bekirova.ru/" target="_blank">
                    <img src="../../public/img/apartments.jpg"/>
                    <div class="mask">
                        <p>{{ $t('main.open') }}</p>
                    </div>
                </a>
            </div>
            <div class="slider__block">
                <a href="https://form.bekirova.ru/" target="_blank">
                    <img src="../../public/img/form.jpg"/>
                    <div class="mask">
                        <p>{{ $t('main.open') }}</p>
                    </div>
                </a>
            </div>
            <div class="slider__block">
                <a href="https://amst.bekirova.ru/" target="_blank">
                    <img src="../../public/img/amst.jpg"/>
                    <div class="mask">
                        <p>{{ $t('main.open') }}</p>
                    </div>
                </a>
            </div>
            <div class="slider__block">
                <a href="https://zoon.bekirova.ru/" target="_blank">
                    <img src="../../public/img/zoon.jpg"/>
                    <div class="mask">
                        <p>{{ $t('main.open') }}</p>
                    </div>
                </a>
            </div>
            <div class="slider__block">
                <a href="https://kitchen-master.bekirova.ru/" target="_blank">
                    <img src="../../public/img/master-kitchen.jpg"/>
                    <div class="mask">
                        <p>{{ $t('main.open') }}</p>
                    </div>
                </a>
            </div>
            <div class="slider__block">
                <a href="https://business-casual.bekirova.ru/" target="_blank">
                    <img src="../../public/img/business-casual.jpg"/>
                    <div class="mask">
                        <p>{{ $t('main.open') }}</p>
                    </div>
                </a>
            </div>
            <div class="slider__block">
                <a href="https://duck-hunt.bekirova.ru/" target="_blank">
                    <img src="../../public/img/duck-hunt.jpg"/>
                    <div class="mask">
                        <p>{{ $t('main.open') }}</p>
                    </div>
                </a>
            </div>
        </tiny-slider>
    </div>
</template>

<script>
    import VueTinySlider from 'vue-tiny-slider';

    export default {

        components: {
            'tiny-slider': VueTinySlider
        },
        data() {
            return {
                tinySliderOptions: {
                    items: 3,
                    swipeAngle: false,
                    mouseDrag: true,
                    nav: false,
                    controlsContainer: "#customize-controls",
                    speed: 400,
                    responsive: {
                        320: {
                            items: 1,
                            edgePadding: 50
                        },
                        768: {
                            items: 3
                        },
                        1280: {
                            items: 5
                        }
                    }
                }
            }
        }
    }
</script>
