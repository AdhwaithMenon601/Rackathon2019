<template>
  <div class="here-map">
    <div ref="map" v-bind:style="{ width: width, height: height }"></div>
  </div>
</template>

<script>

export default {
  name: "HereMap",
  data() {
    return {
      map: {},
      platform: {}
    }
  },
  props: {
    ppId: String,
    appCode: String,
    lat: String,
    lng: String,
    width: String,
    height: String
  },
  created() {
    this.platform = new H.service.Platform({
        "app_id": this.appId,
        "app_code": this.appCode
    });
  },
  mounted() {
    this.map = new H.Map(
        this.$refs.map,
        this.platform.createDefaultLayers().normal.map,
        {
            zoom: 10,
            center: { lng: this.lng, lat: this.lat }
        }
    );
  }
}
</script>