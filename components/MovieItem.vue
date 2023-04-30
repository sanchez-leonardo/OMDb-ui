<!-- Basic movie list item, redirects to detail page -->

<template>
  <NuxtLink :to="`/movies/${movie.imdbID}`">
    <p>{{ movie.Title }}</p>
    <p>{{ movie.Year }}</p>
    <p>{{ movie.Type }}</p>
  </NuxtLink>
</template>

<script setup>
const { movie } = defineProps(["movie"]);
</script>

<style scoped>
a {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  margin: 0.75rem;
  color: #eee;
  border: 1px solid #eee;
  border-radius: 5px;
}

a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
}

a:hover {
  background-color: #eee;
  color: black;
}

p {
  flex-grow: 1;
  text-align: center;
}

p:first-of-type {
  flex: 3 1 50%;
  padding-left: 2rem;
  text-align: start;
  font-weight: bolder;
}

p:last-of-type {
  text-transform: capitalize;
}

@media screen and (orientation: portrait) {
  p:first-of-type {
    flex: 0 0 100%;
    text-align: center;
    padding: 1%;
    margin-bottom: 5%;
  }
}
</style>
