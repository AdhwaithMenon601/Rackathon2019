<template>
  <v-app>
    <v-card color="grey lighten-4" flat height="100%" tile>
    <Header/>
    <br/><br/>
    <router-view/>
    </v-card>
  </v-app>
</template>

<script>
  import Header from '@/components/Header.vue';
  //import Mapbox from 'mapbox-gl-vue';
  export default {
    components: {
      Header
    },
    data() {
      return {
        isUser: false,
        cash: 300
      }
    }
  }
</script>

<style lang="scss">

</style>
