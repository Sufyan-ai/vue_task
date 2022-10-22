<template>
  <v-app>
      <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Vuetify from 'vuetify/lib'
@Component
export default class App extends Vue {
    
}
</script>
