const MovieCard = ({movie:
   {title, vote_average, poster_path, release_date, original_language}
  }) => {
  return (
    <div className="movie-card flex flex-col">
      <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.path'} alt={title} loading="lazy" />

      <div className="mt-5">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <img src="public/icons/star.svg" alt="stars" loading="lazy" />
            <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>

          <span>*</span>
          <p className="lang">{original_language}</p>

          <span>*</span>
          <p className="year">
            {release_date ? release_date.replaceAll("-","/") : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
