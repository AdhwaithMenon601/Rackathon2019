<template>
  <v-toolbar color="indigo darken-2">
    <router-link to = "/"><img src = "../public/logo.png"></router-link>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat v-if=!isUser to="/Login" color="indigo darken-2" @click="isUser = !isUser" dark>Login</v-btn>
      <v-btn flat v-if=!isUser to="/Register" color="indigo darken-2" dark>Register</v-btn>
      <v-btn flat v-if=isUser to="/user/2/map" color="indigo darken-2" dark>Park</v-btn>
      <v-btn flat v-if=isUser to="/user/2/rent" color="indigo darken-2" dark>Rent</v-btn>
      <v-btn flat v-if=isUser to="/" color="indigo darken-2" @click="isUser = !isUser" dark>Logout</v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    
  },
  data() {
    return {
      isUser: this.$root.isUser
    }
  }
};
</script>

<style scoped>
#header {
  width: 100%;
}
img {
  position: absolute;
  top: 3%;
  height: 110%;
  width: 5.5%;
}
</style>
