<!-- When no results are present, conditionally render content -->
<!-- Text could be a computed instead of an if directive on h3 -->
<template>
  <div>
    <h3 v-if="Object.entries(results).length === 0">
      Type a complete or partial movie name and then hit the search button
    </h3>
    <h3 v-else-if="results.Error === `Movie not found!`">
      {{ results.Error }}
    </h3>
    <h3 v-else>An error ocurred. Search again.</h3>
  </div>
</template>

<script setup>
const { results } = defineProps(["results"]);
</script>

<style scoped>
div {
  display: flex;
  padding: 1rem;
  margin: 0.75rem;
  color: #eee;
  border: 1px solid #eee;
  border-radius: 5px;
}

h3 {
  color: inherit;
  flex-grow: 1;
  text-align: center;
  font-weight: bolder;
}
</style>
