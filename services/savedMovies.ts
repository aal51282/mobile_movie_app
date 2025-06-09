// Service for managing saved movies
// This can be extended to work with AppWrite for persistent storage

let savedMovies: Set<number> = new Set();

export const isSaved = (movieId: number): boolean => {
  return savedMovies.has(movieId);
};

export const saveMovie = async (movie: Movie): Promise<boolean> => {
  try {
    savedMovies.add(movie.id);
    console.log(`Saved movie: ${movie.title} (ID: ${movie.id})`);

    // TODO: Integrate with AppWrite
    // await database.createDocument(DATABASE_ID, SAVED_MOVIES_COLLECTION_ID, ID.unique(), {
    //   movie_id: movie.id,
    //   title: movie.title,
    //   poster_path: movie.poster_path,
    //   vote_average: movie.vote_average,
    //   release_date: movie.release_date,
    //   saved_at: new Date().toISOString()
    // });

    return true;
  } catch (error) {
    console.error("Error saving movie:", error);
    return false;
  }
};

export const unsaveMovie = async (movieId: number): Promise<boolean> => {
  try {
    savedMovies.delete(movieId);
    console.log(`Removed movie from saved: ID ${movieId}`);

    // TODO: Integrate with AppWrite
    // const result = await database.listDocuments(DATABASE_ID, SAVED_MOVIES_COLLECTION_ID, [
    //   Query.equal('movie_id', movieId)
    // ]);
    // if (result.documents.length > 0) {
    //   await database.deleteDocument(DATABASE_ID, SAVED_MOVIES_COLLECTION_ID, result.documents[0].$id);
    // }

    return true;
  } catch (error) {
    console.error("Error removing saved movie:", error);
    return false;
  }
};

export const getSavedMovies = (): number[] => {
  return Array.from(savedMovies);
};

export const getSavedMoviesCount = (): number => {
  return savedMovies.size;
};
