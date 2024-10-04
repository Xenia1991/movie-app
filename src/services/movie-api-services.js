class MovieApiServices {
  movieApiBase = 'https://api.themoviedb.org/3/search/movie';

  x = 'eyJhbGciOiJIUzI1NiJ9';

  y1 = 'eyJhdWQiOiJiZTkwMmJkNTBmMWVhNWI0M2VkYWJiYjdlZjIxOTZhNiIsIm5iZiI6MTcyNzcxMj';

  y2 = 'Y3NS4zMTk0MjUsInN1YiI6IjY2ZmFjYmIwM2EwZjVhMDhjOGYxOTdlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ';

  z = 'LUo2KwMUQQOj_h10pe7QItT4sBYHTx51RQFENcsp_ck';

  options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${this.x}.${this.y1}${this.y2}.${this.z}`,
    },
  };

  async getMovie(url) {
    const response = await fetch(`${this.movieApiBase}${url}`, this.options);
    if (!response.ok) {
      throw new Error(`Could not fetch, reseived ${response.status}`);
    }
    const result = await response.json();
    return result;
  }

  async getGenres() {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', this.options);
    if (!response.ok) {
      throw new Error(`Could not fetch, reseived ${response.status}`);
    }
    const result = await response.json();
    return result;
  }
}

export default MovieApiServices;
