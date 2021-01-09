<template>
  <div>
    <v-form v-model="valid">
        <v-text-field type="text" 
            :rules="[required('name')]"
            name="name" 
            placeholder="JBlogs"
            v-model="loginInfo.name"
            v-if="hasName" />
        <v-text-field type="email" 
            name="email" 
            placeholder="timothy@timothy.com"
            :rules="[required('email'), emailFormat()]"
            v-model="loginInfo.email" />
        <v-text-field :type="showPassword ? 'text' : 'password'" 
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            counter="true"
            :rules="[required('password'), minLength('password', 6)]"
            placeholder="1234567"
            name="password"
            v-model="loginInfo.password" />
        <v-btn @click="submitForm(userInfo)" :disabled="!valid">
            {{buttonText}}
        </v-btn>
    </v-form>
  </div>
</template>

<script>
import validations from '@/utils/validations'
export default {
    data() {
        return {
            valid: false,
            showPassword: false,
            loginInfo: {
                email: '',
                password: ''
            },
            ...validations
        }
    },
    props: ['submitForm', 'buttonText', 'hasName'],
    methods: {
        loginUser() {
            this.$store.dispatch('loginUser', this.loginInfo)
        }
    }
}
</script>

<style scoped>

</style>