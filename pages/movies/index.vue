<!-- Search page -->
<!-- ToDo: Add state management for keeping search results (and/or search queries) -->

<template>
  <main>
    <h1>Search Movies</h1>
    <p>Find movies by their title</p>
    <section>
      <form @submit.prevent="handleSubmit">
        <fieldset>
          <legend>Movie</legend>
          <input
            type="text"
            placeholder="Movie title"
            name="s"
            id="s"
            v-model="form.s"
            required
          />
        </fieldset>
        <fieldset>
          <legend>Type</legend>
          <label for="allTypes">
            All
            <input type="radio" id="allTypes" value="" v-model="form.type" />
          </label>
          <label for="movie">
            Movie
            <input type="radio" id="movie" value="movie" v-model="form.type" />
          </label>
          <label for="series">
            Series
            <input
              type="radio"
              id="series"
              value="series"
              v-model="form.type"
            />
          </label>
          <label for="episode">
            Episode
            <input
              type="radio"
              id="episode"
              value="episode"
              v-model="form.type"
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Year</legend>
          <select name="y" id="y" v-model="form.y">
            <option value=""></option>
            <option v-for="year in yearsToRender()" :value="form.year">
              {{ year }}
            </option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Page</legend>
          <select name="page" id="page" v-model="form.page">
            <option v-for="page in pages" :value="page">
              {{ page }}
            </option>
          </select>
        </fieldset>

        <fieldset>
          <button type="submit">Search</button>
        </fieldset>
      </form>
    </section>
    <section>
      <MovieItem
        v-if="results.Search"
        v-for="movie in results.Search"
        :movie="movie"
        :key="movie.imdbID"
      />
      <NoResults v-else :results="results" />
    </section>
  </main>
</template>

<script setup>
//results should/could be shared state
const results = ref({});

const form = reactive({
  s: "",
  type: "",
  y: "",
  page: 1,
});

// If movie title changes, reset page number
// OMDb page search is new and iffy, because of that, if title change start seach from 1
watch(
  () => form.s,
  (newS, oldS) => {
    if (newS !== oldS) {
      form.page = 1;
    }
  }
);

// When search throws results, calculate pages (each search gives 10)
const pages = computed(() => {
  return Math.round(results.value.totalResults / 10) || 1;
});

// Slighly unnecessary year options (could be text input)
// As no resource is given by OMDb, generates year array for select population
// (Oldest movie in IMDB is from 1888)
const yearsToRender = () => {
  let thisYear = new Date().getFullYear();
  let oldest = thisYear - (thisYear - 1888);

  let yearsArr = [];

  for (let i = thisYear; i >= oldest; i--) {
    yearsArr.push(i);
  }

  return yearsArr;
};

// Do the search!
const handleSubmit = async () => {
  // Server route for fetching data (Api key required)
  // Do not watch, ATM is a manual search
  const { data } = await useFetch("/api/omdb/movies", {
    query: form,
    watch: false,
  });

  results.value = data.value;
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5%;
}

main > h1,
main > p {
  padding: 1%;
  margin-bottom: 2%;
}

section {
  min-width: 80%;
  padding: 1%;
  margin-bottom: 2%;
}

form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
}

fieldset {
  position: relative;
  display: flex;
  padding: 1%;
  margin: 1%;
  border-radius: 5px;
}

fieldset:has(:not(button)) {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: transparent;
  box-shadow: 0px 0px 10px 2px rgba(255, 255, 255, 0.5) inset;
}

fieldset:has(input[type="text"]) {
  width: 100%;
}

fieldset:has(input[type="radio"]) {
  flex-grow: 2;
  justify-content: space-around;
  align-items: center;
}

fieldset:has(select) {
  flex-grow: 1;
}

fieldset:has(button) {
  flex-grow: 1;
  border: none;
  padding: 0;
  align-items: center;
}

legend {
  position: absolute;
  left: 3rem;
  top: -0.056rem;
  transform: translateY(-50%) translateX(-50%);
  letter-spacing: 0.1rem;
}

input[type="text"] {
  width: 100%;
  padding: 1%;
  background-color: #eee;
  border-radius: 5px;
}

select {
  width: 100%;
  background-color: #eee;
  border-radius: 5px;
}

option {
  text-align: center;
}

button {
  width: 100%;
  height: 100%;
  background-color: crimson;
  color: #eee;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 2px rgba(50, 50, 50, 0.3),
    0px 0px 5px 2px rgb(0, 0, 0, 0.5) inset;
}

label:hover,
select:hover,
button:hover {
  cursor: pointer;
}

button:active {
  transform: scale(0.95);
  box-shadow: 0px 0px 5px 2px rgba(200, 200, 200, 0.3),
    0px 0px 8px 3px rgb(0, 0, 0, 0.5) inset;
}

@media screen and (orientation: portrait) {
  section {
    width: auto;
    margin-bottom: 2%;
  }

  fieldset {
    padding: 2%;
    margin: 2% 0;
  }

  fieldset:has(input[type="radio"]) {
    width: 100%;
  }

  fieldset:has(select) {
    margin-right: 2%;
  }
}
</style>
