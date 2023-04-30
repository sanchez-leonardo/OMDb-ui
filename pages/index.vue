<!-- Landing. Currently holding log in form -->
<!-- ToDo: Add auth and form validation -->
<template>
  <main>
    <h1>OMDb API UI Project</h1>

    <form @submit.prevent="handleSubmit">
      <fieldset>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" v-model="email" required />
      </fieldset>

      <fieldset>
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          required
        />
      </fieldset>

      <button type="submit">Log In</button>
    </form>
  </main>
</template>

<script setup>
const email = ref("");
const password = ref("");

const handleSubmit = () => {
  // ATM log data, redirect to search page
  console.log(email.value, password.value);

  navigateTo("/movies");
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

main > h1 {
  padding: 2%;
  margin-bottom: 5%;
}

form {
  min-width: 50dvw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5%;
  border-radius: 30px;
  box-shadow: 0px 0px 20px -2px rgba(255, 255, 255, 0.4),
    0px 0px 30px 2px rgba(255, 255, 255, 0.6) inset;
}

fieldset {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5%;
  margin-bottom: 3%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  border-color: rgb(238, 238, 238, 0.5);
  box-shadow: 0px 0px 10px 2px rgba(255, 255, 255, 0.5) inset;
}

label {
  padding-bottom: 1%;
  letter-spacing: 0.25rem;
}

input {
  padding: 2%;
  color: #eee;
  background-color: transparent;
  border-width: 1px;
  border-color: #eee;
  border-radius: 5px;
}

button {
  width: 20%;
  padding: 1.5%;
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

@media screen and (orientation: portrait) {
  main > h1 {
    margin-bottom: 15%;
  }
  form {
    width: 80dvw;
  }
}
</style>
