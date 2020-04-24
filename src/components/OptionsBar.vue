<template>
  <div v-if="show">
    <v-card height="100%">
      <v-toolbar color="pink" dark>
        <v-toolbar-title>Options</v-toolbar-title>
      </v-toolbar>

      <v-list>
        <v-list-group
          v-for="(item, key) in items"
          v-bind:key="key"
          v-model="item.active"
          :prepend-icon="item.action"
        >
          <v-list-item slot="activator">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-for="(subItem, key) in item.items"
            v-bind:key="key"
            active-class
            v-on="item.action === 'sort' ? 
            { click: () => sort(subItem.by) } :
            { click: () => filter(subItem.by) }
          "
          >
            <v-list-item-content>
              <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group prepend-icon="filter" no-action>
          <v-list-item slot="activator">
            <v-list-item-content>
              <v-list-item-title>List options</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click.prevent="displayNotification()">
            <v-list-item-content>
              <v-list-item-title class="danger">Remove list</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click.prevent="openDrawer()">
            <v-list-item-content>
              <v-list-item-title class="danger">Change background</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>

    <MoreOptions />
  </div>
</template>

<script>
import MoreOptions from "./MoreOptions";

export default {
  name: "options-bar",
  components: {
    MoreOptions
  },
  data: () => ({
    items: [
      {
        action: "sort",
        title: "Sort By",
        active: true,
        items: [
          {
            title: "Date",
            by: "date"
          },
          {
            title: "Name",
            by: "name"
          }
        ]
      },
      {
        action: "filter_list",
        title: "Filter By",
        active: false,
        items: [
          {
            title: "Remaining",
            by: "remaining"
          },
          {
            title: "Completed",
            by: "completed"
          },
          {
            title: "All",
            by: "all"
          }
        ]
      }
    ]
  }),
  computed: {
    show() {
      return !!this.$route.params.id;
    }
  },
  methods: {
    sort(value) {
      console.log(`Sort by ${value}`);
    },

    filter(value) {
      console.log(`Filter by ${value}`);
    },
    openDrawer() {
      this.$store.commit("SET_DRAWER", true);
    },
    removeList() {
      this.$store
        .dispatch("DELETE_LIST", {
          listId: this.$route.params.id
        })
        .then(() => {
          this.$store.commit("SET_NOTIFICATION", {
            display: true,
            text: "List has been removed",
            alertClass: "success"
          });
          this.$router.push({ name: "todo" });
        })
        .catch(error => {
          console.log(error);
        });
    },
    displayNotification() {
      this.$store.commit("SET_NOTIFICATION", {
        display: true,
        text: "Teting...",
        alertClass: "success"
      })
    }
  }
};
</script>