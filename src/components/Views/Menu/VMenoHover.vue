<template>
    <div id="drawer-hover " style="margin-top:0px">
      
        <v-list dense style="padding-bottom: 0px !important;">
       
            <v-list-item-group >
                <v-list-item @click="$router.push({ path: '/dashboard' }).catch(()=>{})">
                    <v-list-item-icon >
                    <v-icon class="mt-2" style="font-size: 17px" color="black">mdi-scatter-plot</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">
                            Overview
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item> 
                <v-list-item @click="logout()">
                    <v-list-item-icon >
                    <v-icon class="mt-2" style="font-size: 17px" color="black">mdi-scatter-plot</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">
                            Logout
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item> 
            </v-list-item-group>
        </v-list> 
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component 
export default class VMenoHover extends Vue { 
  public dialog = false;
  logout(){
    localStorage.removeItem('LoggedUser');
    this.$router.push({ path: "/" });
  }

}
</script>

<style scoped>
/* ::v-deep .v-list-item[data-v-c9e9095c], .v-list-item--dense[data-v-c9e9095c] {
    min-height: 17px !important;
    height: 17px !important;
    max-height: 17px !important;
} */

.remove-margin {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
}
.li-title {
    font-size: 12px !important;
}

.v-list-item__icon.sub-icon {
    margin-right: 0px;
    margin-bottom: 0px !important;
}

.sub-menu-list {
    color: rgba(0, 0, 0, 0.87);
}

.sub-menu-list-item {
    font-size: 12px !important;
    color: #bebebe !important;
    line-height: 34px !important;
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: #bebebe !important;
}

.v-list--dense .v-list-item,
.v-list-item--dense {
    min-height: 28px !important;
    height: 28px !important;
    max-height: 28px !important;
}

.v-list-item__icon {
    margin: 0px !important;
    color: #36454F;
}

.v-icon {
    color: #36454F !important;
}

.v-list-item__title {
    font-size: 12px;
    color: #36454F;
    line-height: 34px;
}


.v-list-item:hover {
    color: #36454F !important;
    border-left: 3px solid #fff;
    font-weight: bold;
    background-color: #c9e0fe !important;
}

.v-menu__content {
    overflow-y: hidden;
}



#search-bar .v-list-item__title {
    color: #fff !important;
}
</style>
<style>
[data-v-c9e9095c] .v-icon__svg  {
    fill: #6A6C6E !important;
}
#catlist .v-list-item:hover {
    color: #000 !important;
    border-left: none !important;
    font-weight: bold;
    background-color: #c9e0fe !important;
}

#catlist .v-list-item {
    padding-left: 0px !important;
    padding-right: 0px !important;
}

#group-header .v-list-group__header.v-list-item.v-list-item--link.theme--light {
    min-height: 28px !important;
    height: 28px !important;
    max-height: 28px !important;
}


#cat-sub .v-list-item__icon.v-list-group__header__prepend-icon {
    margin-top: 0px !important;
}

</style>