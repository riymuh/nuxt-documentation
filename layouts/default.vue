<template>
  <v-app light>
    <v-overlay :value="overlay" opacity="1" :z-index="zIndex" color="#ffffff">
      <v-img
        :src="require('@/assets/images/logo.png')"
        alt="logo"
        width="100px"
      />
      <!-- <v-progress-circular indeterminate size="64"></v-progress-circular> -->
    </v-overlay>
    <v-app-bar
      color="white"
      class="primary--text"
      :clipped-left="clipped"
      fixed
      app
      elevation="0"
      outlined
      id="app-bar"
    >
      <v-container class="pa-0 fill-height">
        <v-toolbar-title>
          <!-- <v-avatar>
            <v-img
              :src="require('@/assets/images/logo.png')"
              max-height="35"
              max-width="35"
              contain
            ></v-img>
          </v-avatar> -->
        </v-toolbar-title>

        <NuxtLink to="/"><v-btn text> Home </v-btn></NuxtLink>
        <NuxtLink to="/perusahaan"><v-btn text> About </v-btn></NuxtLink>

        <v-spacer />

        <v-btn icon>
          <v-icon>mdi-bookmark</v-icon>
        </v-btn>
        <v-btn color="#b95ee7" icon @click.stop="rightDrawer = !rightDrawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
#app-bar {
  border-bottom: 1px solid #eee !important;
}
</style>

<script>
export default {
  mounted() {
    // hide the overlay when everything has loaded
    // you could choose some other event, e.g. if you're loading
    // data asynchronously, you could wait until that process returns
    setTimeout(() => {
      this.overlay = false;
    }, 2000);
  },
  data() {
    return {
      overlay: true,
      zIndex: 99,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
