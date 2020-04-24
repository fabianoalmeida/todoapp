<template>
  <v-snackbar
    :color="NOTIFICATION.alertClass"
    v-model="snackbar"
    top
    right
    :timeout="NOTIFICATION.timeout || 3000"
  >
    <v-icon>notification_important</v-icon>
    {{ NOTIFICATION.text }}
    <v-btn text @click.prevent="snackbar = false">
      <v-icon>clear</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "notification",
  computed: {
    ...mapGetters(["NOTIFICATION"]),
    snackbar: {
      get() {
        return this.$store.getters.NOTIFICATION.display;
      },
      set() {
        this.$store.commit("SET_NOTIFICATION", {
          display: false,
        });
      }
    }
  }
}
</script>