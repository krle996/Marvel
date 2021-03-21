<template>
    <div>
        <carousel
        :adjustableHeight="true"
        :per-page="1"
        :autoplay="true"
        :mouseDrag="true"
        :autoplayTimeout="2000"
        :paginationEnabled="true"
        :loop="false"
        paginationPosition="bottom-overlay"
        paginationActiveColor="orange"
        paginationColor="white"
        >
            <slide v-for="(slide, index) in slides" :key="index" class="c_responsive">
                <div
                class="slider_bck"
                :style="{'background':`url(${slide.bck})`}"
                >
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Slide1 from '../../assets/pictures/slider/6.jpg';
import Slide2 from '../../assets/pictures/slider/2.jpg';
import Slide3 from '../../assets/pictures/slider/4.jpg';
import Slide4 from '../../assets/pictures/slider/5.jpg';

export default {
    data(){
        return {
            slides: [
                {
                    title: 'Movies',
                    bck: Slide1
                },
                {
                    title: 'Characters',
                    bck: Slide2
                },
                {
                    title: 'Games',
                    bck: Slide3
                },
                {
                    title: 'Comics',
                    bck: Slide4
                }
            ]
        }
    },
    components: {
        Carousel,
        Slide
    }
}
</script>

<style scoped>
    .slider_bck {
        height: 720px;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        position: relative;
    }

    /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  
  .slider_bck {
        height: 720px;
    }
  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  
  .slider_bck {
        height: 520px;
    }
  
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  
  .slider_bck {
        height: 420px;
    }
  
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
  
  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  
  .slider_bck {
        height: 320px;
    }
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  
  .slider_bck {
        height: 220px;
    }
  
}
</style>