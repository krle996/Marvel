/* eslint-disable */
import Vue from 'vue';

const characters = {
    namespaced: true,
    state: {
        homeCharacters: null,
        characters: null,
        characterPost: null
    },
    getters: {
        getHomeCharacters(state) {
            return state.homeCharacters;
        },

        getAllCharacters(state) {
            return state.characters;
        },

        getCharacterPost(state) {
            return state.characterPost;
        }
    },
    mutations: {
        getHomeCharacters(state, characters) {
            state.homeCharacters = characters;
        },

        getAllCharacters(state, characters) {
            state.characters = characters;
        },

        getCharacterPost(state, post) {
            state.characterPost = post;
        },

        clearPost(state) {
            state.characterPost = null;
        }

    },
    actions: {
        getHomeCharacters({ commit }, payload) {
            Vue.http.get(`characters.json?orderBy="$key"&limitToFirst=${payload.limit}`)
                .then(response => response.json())
                .then(response => {
                    const characters = [];
                    for (let key in response) {
                        characters.push({
                            ...response[key],
                            id: key
                        })
                    }
                    commit("getHomeCharacters", characters)
                })
        },

        getAllCharacters({ commit }) {
            Vue.http.get('characters.json')
                .then(response => response.json())
                .then(response => {
                    const characters = [];
                    for (let key in response) {
                        characters.push({
                            ...response[key],
                            id: key
                        })
                    }
                    commit("getAllCharacters", characters)
                })
        },

        getCharacterPost({ commit }, payload) {
            Vue.http.get(`characters.json?orderBy="$key"&equalTo="${payload}"`)
                .then(response => response.json())
                .then(response => {
                    let post = {};
                    for (let key in response) {
                        post = {
                            ...response[key]
                        }
                    }
                    commit("getCharacterPost", post)
                })
        }
    }
}

export default characters;

