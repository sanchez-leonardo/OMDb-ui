<!-- Movie details -->
<!-- Get info - Show info -->
<template>
  <main>
    <h1>{{ data.Title }}</h1>
    <section>
      <figure>
        <img :src="data.Poster" alt="movie" />
        <figcaption>
          <p class="rating" v-for="rating in data.Ratings" :key="rating.Value">
            {{ rating.Source }} - {{ rating.Value }}
          </p>
          <p>{{ data.Awards }}</p>
        </figcaption>
      </figure>
    </section>
    <section>
      <p>Genre: {{ data.Genre }}</p>
      <p>Rated: {{ data.Rated }}</p>
      <p>Release: {{ data.Released }} (DVD:{{ data.DVD }})</p>
      <p>Runtime: {{ data.Runtime }}</p>
      <p>{{ data.Plot }}</p>
      <p>Directed by: {{ data.Director }}</p>
      <p>Written by: {{ data.Writer }}</p>
      <p>Starring: {{ data.Actors }}</p>
      <p>From: {{ data.Country }}</p>
      <p>Languages: {{ data.Language }}</p>
      <div><button @click="goBack">Back</button></div>
    </section>
  </main>
</template>

<script setup>
//Movie IMDBID from params
const { imdbID } = useRoute().params;

//Server route fetch, Api key required
const { data } = await useFetch(`/api/omdb/${imdbID}`);

const goBack = () => {
  navigateTo("/movies");
};
</script>

<style scoped>
main {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;
  padding: 5%;
}

h1,
p {
  padding: 1%;
  margin-bottom: 2%;
}

h1 {
  flex: 0 0 100%;
  text-align: center;
  letter-spacing: 0.5rem;
}

section:first-of-type {
  flex: 1 2 30%;
  padding: 2%;
}

section:last-of-type {
  flex: 2 1 50%;
  display: flex;
  flex-flow: column nowrap;
  padding: 2%;
}

figure {
  display: flex;
  flex-flow: column nowrap;
}

figcaption {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

figcaption p {
  text-align: center;
  padding: 1%;
  margin: 1%;
}

figcaption p:last-of-type {
  flex: 0 0 100%;
}

div:has(button) {
  display: flex;
  justify-content: center;
  margin-top: 5%;
  min-height: 5%;
}

button {
  width: 30%;
  height: 3rem;
  background-color: crimson;
  color: #eee;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 2px rgba(50, 50, 50, 0.3),
    0px 0px 5px 2px rgb(0, 0, 0, 0.5) inset;
}

button:hover {
  cursor: pointer;
}

button:active {
  transform: scale(0.95);
  box-shadow: 0px 0px 5px 2px rgba(200, 200, 200, 0.3),
    0px 0px 8px 3px rgb(0, 0, 0, 0.5) inset;
}
</style>
