<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->

<template>
    <v-card class="overflow-hidden dashboardBackground"   color="#fff" height="100%">
     
       
 <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

        <v-navigation-drawer
            v-model="drawer" 
            :expand-on-hover="is_active"
            color="#fff"
            absolute
          
           app
            floating
           width="165"
            style="
                height: 100% !important;
                max-height: calc(100% - 105px) !important;  
                box-shadow: 0 0px 5px -1px rgba(0,0,0,.2),0 0px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)!important;
                top: 48px;
                z-index: 4"
            >
            <v-app-bar color="#fff" flat light>
                
                <v-spacer></v-spacer>
                <v-icon dense tag="close"  color="#fff" style="color: #6A889C" @click="is_active = !is_active;">
                   mdi-view-dashboard
                </v-icon>
            </v-app-bar>
            
            
            <VMenuHover />
        <v-toolbar-title style="position: fixed; bottom: 0px;">
              
              
            </v-toolbar-title>
        </v-navigation-drawer>

         <TopMenu />
        <v-main class="flex-grow-0">
            <v-container fluid >
                <v-row class="fill-height">
                    <v-col class="d-flex flex-column">
                        <transition name="fade">
                            <router-view></router-view>
                        </transition>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const VMenuHover = () => import('../Views/Menu/VMenoHover.vue');
const TopMenu = () => import('../Views/Menu/TopMen.vue') 

@Component({
    components: {
        VMenuHover,
        TopMenu,
     
    }
})
export default class DashboardNav extends Vue {

    is_active = false
    
}
</script>
<style>
/*TOP MENU BAR*/
#drawer-card .v-toolbar__content {
    
    height: auto !important;
    min-height: 70px !important;
    padding: 0px 16px !important;
}

#drawer-card header.v-sheet.theme--dark.v-toolbar.v-app-bar{
    height: auto !important;
    min-height: 70px !important;
}


</style>
<style>
.light {
    background-color: #f5f5f9 !important;
}
</style>
<style scoped>
/* .theme--light.v-footer {
    background-color: #fff !important;
    color: #000 !important;
} */
.activecat {
  color: #fff !important;
  background-color: #000 !important;
}

.activeClass {
    color: #fff !important;
}

.v-toolbar__content, .v-toolbar__extension {
    height: 36px !important;
}

.v-toolbar {
    height: 36px !important;
}

.progress-bars {
    width: 90%;
    margin: 50px auto 10px;
}

.progress-bar-label {
    color: #fff;
}
/* 
.drawer-logo {
    cursor: pointer;
    height: 131px;
} */

.categories{
  background-color:#19222E;
  width: 50%;
  height: 30px;
  position: relative;
  color: #fff;
}

.subMenu{
  display: none;
  position:absolute;
  background-color:#19222E;
  height: 225px;
  width: 100%;
  top: 0;
  left: 100%;
  color: #fff;
}

.categories:hover .subMenu {
  display: block;
}

.drawer-logo {
    height: 131px;
}
</style>

<style>
#drawer-progress-bars .v-toolbar__content, .v-toolbar__extension {
    padding: 0px !important;
    height: 20px !important;
}
/*global style for admin dashboard*/
body {
    font-size: 12px !important;
}

.v-input .v-label {
    font-size: 12px !important;
}

td.text-start {
    font-size: 12px !important;
}

th.text-start {
    font-size: 12px !important;
}

#data-table th.text-start {
    font-size: 12px !important;
}

#data-table td.text-start {
    font-size: 12px !important;
}
</style>