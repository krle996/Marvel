/* eslint-disable */
import Vue from 'vue';

const movies = {
    namespaced: true,
    state: {
        homeMovies: null,
        movies: null,
        moviePost: null
    },
    getters: {
        getHomeMovies(state) {
            return state.homeMovies;
        },

        getAllMovies(state) {
            return state.movies;
        },

        getMoviePost(state) {
            return state.moviePost;
        },
    },
    mutations: {
        getHomeMovies(state, movies) {
            state.homeMovies = movies;
        },

        getAllMovies(state, movies) {
            state.movies = movies;
        },

        getMoviePost(state, post) {
            state.moviePost = post;
        },

        clearPost(state) {
            state.moviePost = null;
        },

    },
    actions: {
        getHomeMovies({ commit }, payload) {
            Vue.http.get(`movies.json?orderBy="$key"&limitToLast=${payload.limit}`)
                .then(response => response.json())
                .then(response => {
                    const movies = [];
                    for (let key in response) {
                        movies.push({
                            ...response[key],
                            id: key
                        })
                    }
                    commit("getHomeMovies", movies.reverse())
                })
        },

        getAllMovies({ commit }) {
            Vue.http.get('movies.json')
                .then(response => response.json())
                .then(response => {
                    const movies = [];
                    for (let key in response) {
                        movies.push({
                            ...response[key],
                            id: key
                        })
                    }
                    commit("getAllMovies", movies.reverse())
                })
        },

        getMoviePost({ commit }, payload) {
            Vue.http.get(`movies.json?orderBy="$key"&equalTo="${payload}"`)
                .then(response => response.json())
                .then(response => {
                    let post = {};
                    for (let key in response) {
                        post = {
                            ...response[key]
                        }
                    }
                    commit("getMoviePost", post)
                })
        },
    }
}

export default movies;

