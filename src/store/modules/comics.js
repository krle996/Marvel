/* eslint-disable */
import Vue from 'vue';

const comics = {
    namespaced: true,
    state: {
        homeComics: null,
        comics: null,
        comicPost: null
    },
    getters: {
        getHomeComics(state) {
            return state.homeComics;
        },

        getAllComics(state) {
            return state.comics;
        },

        getComicPost(state) {
            return state.comicPost;
        }
    },
    mutations: {
        getHomeComics(state, comics) {
            state.homeComics = comics;
        },

        getAllComics(state, comics) {
            state.comics = comics;
        },

        getComicPost(state, post) {
            state.comicPost = post;
        },

        clearPost(state) {
            state.comicPost = null;
        }

    },
    actions: {
        getHomeComics({ commit }, payload) {
            Vue.http.get(`comics.json?orderBy="$key"&limitToLast=${payload.limit}`)
                .then(response => response.json())
                .then(response => {
                    const comics = [];
                    for (let key in response) {
                        comics.push({
                            ...response[key],
                            id: key
                        })
                    }
                    commit("getHomeComics", comics.reverse())
                })
        },

        getAllComics({ commit }) {
            Vue.http.get('comics.json')
                .then(response => response.json())
                .then(response => {
                    const comics = [];
                    for (let key in response) {
                        comics.push({
                            ...response[key],
                            id: key
                        })
                    }
                    commit("getAllComics", comics.reverse())
                })
        },

        getComicPost({ commit }, payload) {
            Vue.http.get(`comics.json?orderBy="$key"&equalTo="${payload}"`)
                .then(response => response.json())
                .then(response => {
                    let post = {};
                    for (let key in response) {
                        post = {
                            ...response[key]
                        }
                    }
                    commit("getComicPost", post)
                })

        }
    }
}

export default comics;

