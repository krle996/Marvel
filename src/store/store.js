import Vue from 'vue';
import Vuex from 'vuex';
import movies from './modules/movies';
import comics from './modules/comics';
import games from './modules/games';
import characters from './modules/characters';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        movies,
        comics,
        games,
        characters
    }
})