/* eslint-disable */

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../src/components/home/Index.vue';
import Movies from '../src/components/content/Movies.vue';
import MoviePost from '../src/components/post/MoviePost.vue';
import Comics from '../src/components/content/Comics.vue';
import ComicPost from '../src/components/post/ComicPost.vue';
import Games from '../src/components/content/Games.vue';
import GamePost from '../src/components/post/GamePost.vue';
import Characters from '../src/components/content/Characters.vue';
import CharacterPost from '../src/components/post/CharacterPost.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/movies', component: Movies },
    { path: '/movies/:id', component: MoviePost },
    { path: '/comics', component: Comics },
    { path: '/comics/:id', component: ComicPost },
    { path: '/games', component: Games },
    { path: '/games/:id', component: GamePost },
    { path: '/characters', component: Characters },
    { path: '/characters/:id', component: CharacterPost }
]

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(from, to, savedPosition){
        return {
            x: 0,
            y: 0
        }
    }
})