<template>
  <div>
    <v-container>
      <div v-if="!loginState">
        <v-form ref="form" class="pt-4">
          <v-card class="mx-auto my-12" max-width="374">
            <v-app-bar color="deep-purple accent-4" dark>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-app-bar>
            <v-container>
              <v-card-text>
                <v-text-field
                  v-model="user.email"
                  label="Email"
                  rule="email is required"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="user.password"
                  placeholder="Password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  v-on:keyup.enter="submit"
                  rule="password is required"
                  :required="true"
                ></v-text-field>
              </v-card-text>

              <v-card-action>
                <v-spacer></v-spacer>
                <v-divider></v-divider>
                <v-btn color="success" class="mt-2" @click="submit">
                  Login
                </v-btn>
                <br>
                <v-btn type="text">
                  <label
                    small
                    style="text-transform: capitalize"
                    class="remember"
                    @click="account()"
                    >Create an accont ?</label
                  >
                </v-btn>
              </v-card-action>
            </v-container>
          </v-card>
        </v-form>
      </div>
      <!-------------------------Form for Accont Creation------------------------>
      <div v-else>
        <v-form ref="form" class="pt-4">
          <v-card class="mx-auto my-12" max-width="374">
            <v-app-bar color="deep-purple accent-4" dark>
              <v-toolbar-title>Sign up</v-toolbar-title>
            </v-app-bar>
            <v-container>
              <v-card-text>
                <v-text-field
                  v-model="userInfo.first_name"
                  label="First name"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="userInfo.last_name"
                  label="Last name"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="userInfo.email"
                  label="Email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="userInfo.password"
                  placeholder="Password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  v-on:keyup.enter="submit"
                  rule="password is required"
                  :required="true"
                ></v-text-field>
              </v-card-text>

              <v-card-action>
                <v-spacer></v-spacer>
                <v-divider></v-divider>
                <div>
                  <v-btn color="success" class="mt-2" @click="createAccount">
                    Sign up
                  </v-btn>
                </div>
                <br />

                <v-btn type="text">
                  <label
                    small
                    style="text-transform: capitalize"
                    class="remember"
                    @click="accontlogin()"
                    >Already have an accont</label
                  >
                </v-btn>
              </v-card-action>
            </v-container>
          </v-card>
        </v-form>
      </div>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import _, { sumBy, filter } from 'l';
// import _ from 'lodash';
// import Vuetify from 'vuetify/lib';

@Component
export default class Login extends Vue {
  // ...mapActions("users/getUsersData") getUsersData!: () => Promise<object>;
  $refs!: {
    vue: Vue;
  };

  public showPassword = false;
  //Method for login
  submit() {
    if (this.$refs["form"].validate()) {
      debugger;
      let data = this.$store.getters["users/getUser"];
      let newArray = data.filter(
        (e: any) =>
          e.email === this.user.email && e.password == this.user.password
      );
      if (newArray.length == 1) {
        localStorage.setItem("LoggedUser", "true");
        this.$router.push({ path: "/dashboard" });
      } else {
        this.$router.push({ path: "/" });
      }
    }
  }
  // Method for  Account creation
  createAccount() {
    this.$store.dispatch("users/createAccount", this.userInfo);
    this.loginState = false;
  }

  // mounted(){
  //   this.$store.dispatch('users/getUserData');
  // }

  public user = {
    password: "",
    email: "",
    first_name: "",
    last_name: "",
  };
  public userInfo = {
    password: "",
    email: "",
    first_name: "",
    last_name: "",
  };

  public loginState = false;

  account() {
    this.loginState = true;
  }
  accontlogin() {
    this.loginState = false;
  }
}
</script>
