<template>
    <div >
         <v-app-bar color="deep-purple accent-4" style="background-color: #fff; "  light  height="46px">
        </v-app-bar>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class TopMen extends Vue {
 




  
 
 
  
//   logout(){
//     localStorage.removeItem('LoggedUser');
//     this.$router.push({ path: "/login" }).catch(()=>{});
//   }

}
</script>
<style scoped>
.search_btn{
    width: 220px !important;
}
.saearchdiv{
  margin-left: 200px;
}
 /* .v-icon {
    color: #000 !important;
} */
.v-text-field--outlined fieldset {
border: 2px solid blue !important;
  border-radius: 10px;
  background-color: #fff;
}


/* ::v-deep .v-text-field--outlined.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot, .v-text-field--outlined.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot {
    min-height: 30px !important;
} */
 .v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner{
  margin-top: 5px !important;
}
.theme--light.v-footer {
    background-color: #fff !important;
    color: #000 !important;
    box-shadow: 0px 2px 9px #888, -8px 15px 0px #888;
}

.v-menu__content.theme--light.menuable__content__active {
  /*top: 30px !important;*/
  top: 47px !important;
}
</style>
<style >
 .v-text-field--outlined.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot, .v-text-field--outlined.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot {
    min-height: 10px !important;
}
.v-text-field--outlined fieldset {
   height: 35px !important;
}
.v-text-field--outlined.v-input--dense .v-label {
    top: 1px !important;
}
 .v-text-field--outlined .v-text-field__slot{
   height: 35px !important;
}  
 .v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner{
  margin-top: 2px !important;
}
</style>
