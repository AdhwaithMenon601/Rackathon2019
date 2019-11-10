<template>
    <v-card
  class="mx-auto"
  max-width="400">
      <v-card-title>
        <h1>Payment</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
          label="Keycode"
          required
          ></v-text-field>
          <v-label>
              Amount to pay :: {{ $route.params.amt * 100 }}
          </v-label>
          <br>
          <v-label>
              Amount you have :: {{ myCash }}
          </v-label>
          <br>
          <v-label>
              Amount you have left :: {{ myCash - $route.params.amt * 100 }}
          </v-label>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
          <v-btn flat offset="md-4" color="indigo darken-1" :href="path" @click="pay()" dark>Pay</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            myCash: 500,
            path: 'https://rakuten1234567890.000webhostapp.com'
        }
    },
    methods: {
        
    }
}
</script>