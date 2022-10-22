<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>
          <v-toolbar flat>
            <v-toolbar-title>Cars</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-spacer></v-spacer>
          <!------------------------------User can Search for Category---------------------->
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <Button label="Add" @onClick="addItem()" />
        </v-card-title>
        <!--------------------------------Data Table to display Data--------------------->
        <v-data-table
          :headers="headers"
          :items="prodctData"
          :search="search"
          :category="category"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="updateProduct(item)"
              >mdi-pencil</v-icon
            >
            <v-icon small @click="delProduct(item)">mdi-delete</v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
    <!------------------------Delete Dialog---------------------->
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title class="text-h5"
          >Are you sure you want to delete this item?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <Button color="red" text label="Cancel" @onClick="close"  />
          <Button color="blue darken-1" @onClick="deleteData" label="Ok" text />
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!---------------Inser and update Dialog ---------------->
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{formTitle}}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-autocomplete
                  v-model="data.category"
                  :items="['Bus', 'Sedan', 'SUV', 'Hatchback']"
                  label="Selecet Category"
                  item-text="text"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <TextField :model.sync="data.color" label="Color"></TextField>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <TextField :model.sync="data.model" label="Model"></TextField>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <TextField :model.sync="data.maker" label="Maker"></TextField>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <TextField
                  :model.sync="data.registration"
                  label="registration-no"
                ></TextField>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <Button color="red" text label="Cancel" @onClick="close" />
          <Button
            color="blue darken-1"
            text
            label="Save"
            @onClick="save(data)"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { component } from "vue/types/umd";
const TextField = () => import("./Views/textElements/TextField.vue");
const AutoComplete = () => import("./Views/selectOption/AutoComplete.vue");
const Button = () => import("./Views/buttons/Button.vue");
import { mapGetters, mapActions } from "vuex";
// import Vuetify from 'vuetify/lib';
@Component({
  components: {
    TextField,
    AutoComplete,
    Button,
  },
})
export default class Dashboard extends Vue {
  public search = "";
  public category = "";
  public dialog = false;
  public deleteDialog: boolean = false;
  public editedIndex: number = -1;
  public formTitle = "";

  public data = {
    category: "",
    model: "",
    make: "",
    registration: "",
    color: "",
  };

  mounted() {
    this.$store.dispatch("products/getProductData");
  }
  get prodctData() {
    return this.$store.getters["products/getProdcts"];
  }

  addItem() {
    this.formTitle = 'Insert new Category'
    this.dialog = true;
  }
  delProduct(item: any) {
    debugger;
    this.editedIndex = this.prodctData.indexOf(item);
    console.log(this.editedIndex);
    this.deleteDialog = true;
  }
  deleteData() {
    // mapActions(['deleteProduct']);
    this.$store.dispatch("products/deleteProduct", this.editedIndex);
  }

  updateProduct(item: any) {
    this.formTitle = 'Update Category'
    this.editedIndex = this.prodctData.indexOf(item);
    this.data = item;
    this.dialog = true;
  }
  //Method to create and update cars Information
  save(data: any) {
    debugger;
    if (this.editedIndex > -1) {
      this.$store.dispatch("products/updateProduct", {
        index: this.editedIndex,
        data,
      });
      // Object.assign(this.vehicels[this.editedIndex], this.data)
    } else {
      debugger;
      this.$store.dispatch("products/addProduct", data);
    }
    data = {};
    this.close();
  }

  close() {
    this.dialog = false;
  }
  //Table  Headrs
  headers = [
    {
      text: "Category",
      align: "start",
      sortable: false,
      value: "category",
    },
    { text: "Color", value: "color" },
    { text: "Model", value: "model" },
    { text: "Maker", value: "maker" },
    { text: "registration", value: "registration" },
    { text: "Actions", value: "actions" },
  ];
}
</script>
