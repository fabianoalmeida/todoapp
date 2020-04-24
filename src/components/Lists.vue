<template>
  <v-navigation-drawer permanent width="100%">
    <v-toolbar color="blue" dark>
      <v-toolbar-title v-if="!DISPLAY_SEARCH_LIST">Your list</v-toolbar-title>
      <SearchBar v-if="DISPLAY_SEARCH_LIST" />
      <v-spacer />
      <v-btn icon @click.prevent="toggleSearchList">
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list>
      <v-list-item @click.prevent="openNewListForm" v-if="!isOpen">
        <v-list-item-content>
          <v-list-item-title>Create a new list</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-title>
            <v-icon>add</v-icon>
          </v-list-item-title>
        </v-list-item-action>
      </v-list-item>

      <v-list-item v-if="openNewListFormValue">
        <NewList />
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list>
      <v-layout d-flex align-space-around justify-center column max-height="200px" overflow="auto">
        <v-list-item 
          :to="{ name: 'tasks', params: { id: item.id } }"
          v-for="(item, key) in lists" 
          :key="key"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-title>{{ item.tasks }}</v-list-item-title>
          </v-list-item-action>
        </v-list-item>
      </v-layout>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SearchBar from "./SearchBar";
import NewList from "./NewList";
import { mapGetters } from "vuex";

export default {
  name: "lists",
  components: {
    SearchBar,
    NewList
  },
  data: () => ({
    lists: [
      {
        id: 1,
        title: "List",
        tasks: 12
      },
      {
        id: 2,
        title: "List",
        tasks: 45
      },
      {
        id: 3,
        title: "List",
        tasks: 66
      },
      {
        id: 4,
        title: "List",
        tasks: 3
      },
      {
        id: 5,
        title: "List",
        tasks: 12
      },
      {
        id: 6,
        title: "List",
        tasks: 45
      },
      {
        id: 7,
        title: "List",
        tasks: 66
      },
      {
        id: 8,
        title: "List",
        tasks: 3
      },
    ]
  }),
  computed: {
    ...mapGetters(["DISPLAY_SEARCH_LIST"]),
    openNewListFormValue: {
      get() {
        return this.$store.getters.NEW_LIST_FORM;
      },
      set(value) {
        this.$store.commit("SET_NEW_LIST_FORM", value);
      }
    },
    isOpen() {
      return this.$store.getters.NEW_LIST_FORM;
    }
  },
  methods: {
    toggleSearchList() {
      this.$store.commit("SET_DISPLAY_SEARCH_LIST", !this.DISPLAY_SEARCH_LIST);
    },
    openNewListForm() {
      this.$store.commit("SET_NEW_LIST_FORM", true);
    }
  }
};
</script>