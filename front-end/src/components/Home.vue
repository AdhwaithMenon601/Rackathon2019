<template>
    <v-card
    class="mx-auto"
    max-width="600"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Welcome to our website</div>
        <v-list-item-title class="headline mb-1">We service your parking needs</v-list-item-title>
        <v-list-item-subtitle>Say bye to your parking problems</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Welcome to our website</div>
        <v-list-item-title class="headline mb-1">We service your parking needs</v-list-item-title>
        <v-list-item-subtitle>Say bye to your parking problems</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Welcome to our website</div>
        <v-list-item-title class="headline mb-1">We service your parking needs</v-list-item-title>
        <v-list-item-subtitle>Say bye to your parking problems</v-list-item-subtitle>
      </v-list-item-content>
      <div id = "myimage">
      </div>
    </v-list-item>
  </v-card>
</template>

<script>
    export default {
        methods: {
            getImg(image,ext) {
                return require(`../public/${image}.${ext}`);
            }
        }
    }
</script>

<style scoped>
#myimage {
  background-image: url("../public/app_img.jpg");
  height: 50vh;
  width: 100%;
  margin-bottom: 20px;
}
</style>