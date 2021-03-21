/* eslint-disable */
import Vue from 'vue';

const games = {
    namespaced: true,
    state: {
        homeGames: null,
        games: null,
        gamePost: null
    },
    getters: {
        getHomeGames(state) {
            return state.homeGames;
        },

        getAllGames(state) {
            return state.games;
        },

        getGamePost(state) {
            return state.gamePost;
        }
    },
    mutations: {
        getHomeGames(state, games) {
            state.homeGames = games;
        },

        getAllGames(state, games) {
            state.games = games;
        },

        getGamePost(state, post) {
            state.gamePost = post;
        },

        clearPost(state) {
            state.gamePost = null;
        }

    },
    actions: {
        getHomeGames({ commit }, payload) {
            Vue.http.get(`games.json?orderBy="$key"&limitToLast=${payload.limit}`)
                .then(response => response.json())
                .then(response => {
                    const games = [];
                    for (let key in response) {
                        games.push({
                            ...response[key],
                            id: key
                        })
                    }
                    commit("getHomeGames", games.reverse())
                })
        },

        getAllGames({ commit }) {
            Vue.http.get('games.json')
                .then(response => response.json())
                .then(response => {
                    const games = [];
                    for (let key in response) {
                        games.push({
                            ...response[key],
                            id: key
                        })
                    }
                    commit("getAllGames", games.reverse())
                })
        },

        getGamePost({ commit }, payload) {
            Vue.http.get(`games.json?orderBy="$key"&equalTo="${payload}"`)
                .then(response => response.json())
                .then(response => {
                    let post = {};
                    for (let key in response) {
                        post = {
                            ...response[key]
                        }
                    }
                    commit("getGamePost", post)
                })
        }
    }
}

export default games;

