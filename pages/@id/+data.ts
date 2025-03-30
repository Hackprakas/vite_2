export { data };

async function data(pageContext: { routeParams: { id: any } }) {
  const { id } = pageContext.routeParams;

  //   let movie = await response.json()
  // `movie` is serialized and passed to the client. Therefore, we pick only the
  // data the client needs in order to minimize what is sent over the network.
  const movie = { title: "hey", rel: "nice" };
  console.log("hi from server");

  // data() runs only on the server-side by default, we can therefore use ORM/SQL queries.
  /* With an ORM:
  const movies = await Movie.findAll({ select: ['title', 'release_date'] }) */
  /* With SQL:
  const movies = await sql.run('SELECT { title, release_date } FROM movies;') */

  return {
    movie,
  };
}
