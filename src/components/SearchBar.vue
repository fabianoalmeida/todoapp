<template>
  <input 
    type="text"
    placeholder="Search..."
    v-on:input="search"
    ref="input"
    @blur="closeSearchBar"
  />
</template>

<script>
export default {
  name: "search-bar",
  data: () => ({
    input: "",
  }),
  methods: {
    search() {
      console.log(this.input);
    },
    closeSearchBar() {
      this.$store.commit("SET_DISPLAY_SEARCH_LIST", false);
    }
  }
}
</script>