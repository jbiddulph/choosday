<template>
    <div>
        <h1>start</h1>
        
        <h2>Todos</h2>
        <h3>match</h3>
        {{todos}}
        <h3>No match</h3>
        {{allTodos}}
        <div class="todos">
            <div v-for="todo in todos" :key="todo.id" class="todo">
                {{ todo.title }}
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios')
import { mapActions } from 'vuex'

export default {
    name: "Todos",
    data () {
        return {
            // userid: this.$store.state.auth.user.id,
            token: this.$auth.state.accessToken
        }
    },
    methods: {
        // ...mapActions(['fetchTodos'])
        async asyncData () {
        //const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        const response = await axios.get('http://choosapi.test/api/todos?token=' + this.store.state.accessToken)
        
        const data = this.response.data
        const titles = data.map(({ title }) => title)
        return {
            todos
        }
        }
    },
    computed: {
        // todos() {
        //     //return this.$store.state.todos.all
        //     return this.$store.state.todos.all.filter(todo => todo.id === this.userid)
        // },
        // allTodos() {
        //     return this.$store.state.todos.all.filter(todo => todo.id !== this.userid)
        // }
    }
}
</script>

<style lang="scss" scoped>
.todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}
.todo {
    border: 1px solid #ccc;
    background-color: #ffcc99;
    padding:1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}
</style>
