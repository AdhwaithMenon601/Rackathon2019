<template>
  <!--
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-md="3" offset-sm="4">
        <h3>Enter Your Location</h3>
        <v-text-field v-model="location" prepend-icon="mdi-crosshairs-gps" label="Location"></v-text-field>
        <h3>Enter the radius of search</h3>
        <v-text-field v-model="radius" label="radius"></v-text-field>
      </v-col>
    </v-row>
    <v-row offset-md="3">
    <v-card-actions>
        <v-btn color="indigo darken-1" @click="sendMapData()" dark>Submit</v-btn>
    </v-card-actions>
    </v-row>
    <v-row>
      <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
    </v-row>
    
  </v-container>
  -->
  <v-card
  class="mx-auto"
  max-width="400">
      <v-card-title>
        <h1>Find Parking</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-label>
            Please enter Location
          </v-label>
          <v-text-field 
          @click="findLoc()"
          label="location"
          v-model= "location"
          prepend-icon="mdi-crosshairs-gps" />
          <v-label>
            Please time of stay(hrs)
          </v-label>
          <v-text-field 
          label="Time"
          v-model= "time"
           />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="indigo darken-1" to="/user/:id/2/pay" dark>Submit</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
//import HereMap from '../components/Map.vue'
//import Mapbox from "mapbox-gl";
//import MglMap from "vue-mapbox";

export default {
  props: ['id'],
  data() {
    return {
      time: 1,
      location: '',
      accessToken: 'eyJ1Ijoic3BhcnNodGVtYW5pIiwiYSI6ImNrMnJuNW9leDByaW8zanFlbjdvODk2d2sifQ.vs9gvdXpNBqJTqH4C6ZDFw', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/streets-v9',
      path: 'https://rakuten1234567890.000webhostapp.com'
    };
  },
  components: {
    //
  },
  methods: {
    func() {
      window.location = 'www.google.com';
    }
  }
  /*methods: {
    async sendMapData() {
      try {
        const response = await AuthService.sendLoc({
          location: this.location,
          radius: this.radius
        });
      } catch(error) {
        this.error = error.response.data.error;
      }
    }
  }*/
  /*created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }*/
  /*methods: {
    findLoc() {
        navigator.geolocation.getCurrentPosition( function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
      });
    }
  }*/
};
</script>

<style>
#map {
  width: 100%;
  height: 500px;
}
</style>