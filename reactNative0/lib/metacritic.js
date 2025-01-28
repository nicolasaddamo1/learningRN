// export async function getLatestGames() {
//   const LATEST_GAMES =
//     "https://internal-prod.apigee.fandom.net/v1/xapi/finder/metacritic/web?sortBy=-metaScore&productType=games&page=1&releaseYearMin=1958&releaseYearMax=2024&offset=0&limit=24&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u";

//   const rawData = await fetch(LATEST_GAMES);
//   const json = await rawData.json();

//   const {
//     data: { items },
//   } = json;

//   return items.map((item) => {
//     const { description, slug, releaseDate, image, criticScoreSummary, title } =
//       item;
//     const { score } = criticScoreSummary;

//     // crea la imagen
//     const { bucketType, bucketPath } = image;
//     const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

//     return {
//       description,
//       releaseDate,
//       score,
//       slug,
//       title,
//       image: img,
//     };
//   });
// }
// export async function getGameDetails(slug) {
//   const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

//   const rawData = await fetch(GAME_DETAILS);
//   const json = await rawData.json();

//   const { components } = json;
//   const { title, description, criticScoreSummary, images } = components[0];
//   const { score } = criticScoreSummary;

//   // get the card image
//   const cardImage = images.find((image) => image.typeName === "cardImage");
//   const { bucketType, bucketPath } = cardImage;
//   const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

//   const rawReviews = components[3].data.items;

//   // get the reviews
//   const reviews = rawReviews.map((review) => {
//     const { quote, score, date, publicationName, author } = review;
//     return { quote, score, date, publicationName, author };
//   });

//   return {
//     img,
//     title,
//     slug,
//     description,
//     score,
//     reviews,
//   };
// }

export async function getLatestGames() {
  // Obtener los primeros 24 Pokémon (para mantener la misma cantidad que la función original)
  const pokemonList = [];

  for (let i = 1; i <= 24; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemon = await response.json();

    pokemonList.push({
      title: pokemon.name,
      description: `Order: ${pokemon.order}`,
      releaseDate: null, // La PokeAPI no tiene fecha de lanzamiento
      score: pokemon.base_experience, // Usamos base_experience como "score"
      slug: pokemon.name,
      image: pokemon.sprites.front_default,
      types: pokemon.types.map((type) => type.type.name),
    });
  }

  return pokemonList;
}

export async function getGameDetails(pokemonName) {
  const POKEMON_DETAILS = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const response = await fetch(POKEMON_DETAILS);
  const pokemon = await response.json();

  return {
    img: pokemon.sprites.front_default,
    title: pokemon.name,
    slug: pokemon.name,
    description: `Order: ${pokemon.order}`,
    score: pokemon.base_experience,
    types: pokemon.types.map((type) => type.type.name),
    // Como no hay reviews en la PokeAPI, podemos retornar un array vacío o omitir esta propiedad
    reviews: [],
  };
}
