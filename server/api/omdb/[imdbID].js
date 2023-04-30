// Movies details search function
// Stored this way for safekeeping of api key
// Even though .env is being shared in the repo

export default defineEventHandler(async (event) => {
  const { omdbKey } = useRuntimeConfig();

  const { imdbID } = event.context.params;

  const uri = "http://www.omdbapi.com/";

  const data = await $fetch(`${uri}?apikey=${omdbKey}&i=${imdbID}&plot=full`);

  return data;
});
