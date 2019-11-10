<template>
  <v-card
  class="mx-auto"
  max-width="400">
      <v-card-title>
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
          label="Username"
          v-model="username"
          required
          prepend-icon="mdi-account-circle" />
          <v-text-field 
            type="Password"
            label="Password"
            v-model="password" 
            required
            prepend-icon="mdi-lock"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
          <v-btn flat offset="md-4" color="indigo darken-1" to="user/2/map" @click="login()" dark>Login</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  //import AuthenticationService from '@/services/AuthenticationService';

  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      userId : '1',
      userlink:`/user/1/map`
    }
  },
  methods: {
    login() {
      //Check from the databse for correct credentials
      this.$root.isUser = true;
    }
  },
  /*methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
      } catch(error) {
        this.error = error.response.data.error;
      }
  }*/
};
</script>

<style>
</style>
