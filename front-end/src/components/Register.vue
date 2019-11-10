<template>
  <v-card
  class="mx-auto"
  max-width="400">
      <v-card-title>
        <h1>Register</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-label>
            Please enter username
          </v-label>
          <v-text-field 
          label="Username"
          required
          prepend-icon="mdi-account-circle" />
          <v-label>
            Please enter password
          </v-label>
          <v-text-field 
            type="Password"
            label="Password" 
            required
            v-model= "password1"
            prepend-icon="mdi-lock"
          />
          <v-label>
            Please confirm password
          </v-label>
          <v-text-field 
            type="Password"
            label="Password" 
            required
            v-model= "password2"
            prepend-icon="mdi-lock"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click="regUser()" color="indigo darken-1" to="/Login" dark>Register</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
//import AuthService from '../services/AuthenticationService';
export default {
  name:'Register',

  data() {
    return {
      password1: '',
      password2: '',
      username: ''
    };
  },
  /*methods: {
    async regUser() {
      try {
        const response = await AuthService.register({
          email: this.username,
          password: this.password1
        });
      } catch(error) {
        this.error = error.response.data.error;
      }
    }
  }*/
};
</script>

<style>
</style>
