<template>
  <header class="header">
    <BNavbar type="dark" class="navbar" variant="dark"
      ><BContainer>
        <BNavForm>
          <BNavbarBrand href="#">MovieDB </BNavbarBrand>

          <b-form-input
            class="mr-sm-2 search-input"
            placeholder="Search"
            debounce="500"
            v-model="searchValue"
          ></b-form-input>
        </BNavForm>
      </BContainer>
    </BNavbar>
  </header>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Header",
  data: () => ({
    searchValue: "",
  }),
  watch: {
    searchValue: "onSearchValueChanged",
  },
  methods: {
    ...mapActions("movies", ["searchMovie", "fetchMovies", "toggleSearchState"]),
    onSearchValueChanged(val) {
      if (val) {
        this.searchMovie(val);
        this.toggleSearchState(true)
      } else {
        this.fetchMovies();
         this.toggleSearchState(false)
      }
    },
  },
};
</script>
<style scoped>
.header {
  margin-bottom: 30px;
}

.navbar {
  background-color: rgba(0, 0, 0, 0.7) !important;
}
.search-input {
  color: black;
  background: #fff;
  border-color: rgba(0, 0, 0, 0.6);
}
.search-input:focus {
  color: black;
  box-shadow: none;
  background: rgba(255, 255, 255, 255);
  border-color: rgba(0, 0, 0, 0.2);
}
</style>