// Movies search function
// Stored this way for safekeeping of api key
// Even though .env is being shared in the repo

export default defineEventHandler(async (event) => {
  const { omdbKey } = useRuntimeConfig();

  const { s, type, y, page } = getQuery(event);

  const uri = "http://www.omdbapi.com/";

  const data = await $fetch(
    `${uri}?apikey=${omdbKey}${s ? "&s=" + s : ""}${
      type ? "&type=" + type : ""
    }${y ? "&y=" + y : ""}${page ? "&page=" + page : ""}`
  );

  return data;
});
