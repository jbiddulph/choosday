// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//     state: {
//         venues: [],
//         users: [],
//         currentUser: {name: 'John Biddulph'}
//     },
//     mutations: {
//         SET_USERS(state, users){
//             state.users = users
//         }
//     },
//     actions: {
//         async loadUsers({commit}) {
//             let response = await Api().get('/users')
//             let users = response.data.data
//             commit('SET_USERS', users.map(u => u.attributes))
//         }
//     }
// })