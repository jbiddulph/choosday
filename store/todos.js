export const state = () => ({
    all: []
})

export const actions = {
    async fetchTodos({ commit }) {
        let token = this.$auth.token
        const response = await axios.get('http://choosapi.test/api/todos', {
            token
        })
        console.log(response.data)
    }
}
export const mutations = {
 
}
export const getters = {
    
}