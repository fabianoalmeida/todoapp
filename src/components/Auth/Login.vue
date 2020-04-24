<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-form>
          <v-card class="elevation-12">
            <v-toolbar dark color="blue">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field prepend-icon="person" name="login" label="Login" type="text" />
              <v-text-field prepend-icon="lock" name="password" label="Password" type="password" />
            </v-card-text>
            <v-divider />
            <v-card-actions>
              <v-btn to="/signup" color="indigo" rounded dark>Sign up</v-btn>
              <v-spacer />
              <v-btn color="primary" rounded dark @click.prevent="login">
                Login
                <v-icon>keyboard_arrow_right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "login",
  methods: {
    login() {
      this.$router.push("/")
    }
  }
};
</script>