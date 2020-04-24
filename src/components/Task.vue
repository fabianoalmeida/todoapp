<template>
  <v-list-item ripple @click.prevent="toggle(index)">
    <v-list-item-action>
      <v-btn icon @click.stop="openModal()">
        <v-icon color="pink">edit</v-icon>
      </v-btn>
    </v-list-item-action>

    <v-list-item-content>
      <v-list-item-title>{{ task.title }}</v-list-item-title>
      <v-list-item-subtitle>{{ task.sub_title }}</v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action-text>
    </v-list-item-action-text>
    <v-icon v-if="task.isComplete" color="green">check_circle</v-icon>
    <v-icon v-else color="grey">check_circle</v-icon>
  </v-list-item>
</template>

<script>
export default {
  name: "task",
  props: {
    task: Object,
    index: Number
  },
  methods: {
    toggle() {
      this.$store.dispatch("TOGGLE_TASK", {
        taskId: this.task.id,
        listId: this.$route.params.id
      });
      // TODO: push the changes to the store.
    },
    openModal() {
      this.$router.push({
        name: "notes",
        params: { taskId: this.task.id }
      });
    }
  }
};
</script>