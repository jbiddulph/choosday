<template>
  <div>
    <v-form v-model="valid">
        <v-text-field type="text" 
            :rules="[required('name')]"
            placeholder="JBlogs"
            v-model="userInfo.name"
            v-if="hasName" />
        <v-text-field type="email" 
            placeholder="timothy@timothy.com"
            :rules="[required('email'), emailFormat()]"
            v-model="userInfo.email" />
        <v-text-field :type="showPassword ? 'text' : 'password'" 
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            counter="true"
            :rules="[required('password'), minLength('password', 6)]"
            placeholder="1234567"
            v-model="userInfo.password" />
        <v-text-field :type="showPassword ? 'text' : 'password'"
            v-if="isRegister"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            counter="true"
            :rules="[required('password'), minLength('password', 6)]"
            placeholder="1234567"
            v-model="userInfo.password_confirmation" />
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
            userInfo: {
                name: 'johnmb',
                email: 'john.biddulph@email.com',
                password: 'Scaramanga7935!',
                password_confirmation: 'Scaramanga7935!'
            },
            ...validations
        }
    },
    props: ['submitForm', 'buttonText', 'hasName', 'isRegister'],
    methods: {
        loginUser() {
            this.$store.dispatch('loginUser', this.loginInfo)
        }
    }
}
</script>

<style scoped>

</style>