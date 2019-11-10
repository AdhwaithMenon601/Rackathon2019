<template>
    <v-card
  class="mx-auto"
  max-width="400">
      <v-card-title>
        <h1>Register as Renter</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-label>
            Please enter Location
          </v-label>
          <v-text-field 
          label="location"
          v-model= "location"
          prepend-icon="mdi-crosshairs-gps" />
          <v-label>
            Please enter type of parking space
          </v-label>
          <v-radio-group v-model="radioGroup">
            <v-radio
            v-for="n in groups"
            :key="n"
            :label="`${n}`"
            :value="n"
            ></v-radio>
        </v-radio-group>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="indigo darken-1" @click="regRent()" to="/user/:id/map" dark>Submit</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
 export default {
     props: ['id'],
     data() {
         return {
             radioGroup: 'Car',
             location: '',
             userId: this.id,
             groups: [
                 'Car',
                 'Bike'
             ]
         }
     },
    /*methods: {
    async regRent() {
      try {
        const response = await AuthService.regRent({
          VehicleType: this.radioGroup,
          location: this.location,
          userId: this.userId
        });
      } catch(error) {
        this.error = error.response.data.error;
      }
    }
  }*/
 }
</script>