<template>
  <div>
    <v-container fluid pl-0 pr-0 pb-0 pt-0>
      <v-layout row align-space-between justify-space-between>
        <v-flex lg3 pr-2>
          <Lists />
        </v-flex>

        <v-flex lg6 pr-2 pl-2>
          <router-view name="tasks" :key="$router.fullPath" />
        </v-flex>

        <v-flex lg3 pl-2>
          <OptionsBar />
        </v-flex>
      </v-layout>
    </v-container>
    
    <v-footer
      app
      color="indigo"
      class="white--text text-xs-center"
    >
      <span>Fabiano</span>
      <v-spacer />
      <span>&copy; 2019</span>
    </v-footer>
    <Notification />
  </div>
</template>

<script>
import Lists from "./Lists";
import OptionsBar from "./OptionsBar";
import Notification from "./Notification";

export default {
  name: "todo",
  components: {
    Lists,
    OptionsBar,
    Notification
  }
};
</script>