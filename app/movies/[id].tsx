import SaveButton from "@/components/SaveButton";
import { icons } from "@/constants/icons";
import { fetchMovieDetails } from "@/services/api";
import useFetch from "@/services/useFetch";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => (
  <View className="flex-col items-start justify-center mt-5">
    <Text className="text-light-200 font-normal text-sm">{label}</Text>
    <Text className="text-light-100 font-bold text-sm mt-2">
      {value || "N/A"}
    </Text>
  </View>
);

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  // Convert MovieDetails to Movie format for SaveButton
  const movieData: Movie = movie
    ? {
        id: movie.id,
        title: movie.title,
        adult: movie.adult,
        backdrop_path: movie.backdrop_path || "",
        genre_ids: movie.genres?.map((g) => g.id) || [],
        original_language: movie.original_language,
        original_title: movie.original_title,
        overview: movie.overview || "",
        popularity: movie.popularity,
        poster_path: movie.poster_path || "",
        release_date: movie.release_date,
        video: movie.video,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
      }
    : ({} as Movie);

  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>

        <View className="flex-col items-start justify-center mt-5 px-5">
          <View className="flex-row items-center justify-between w-full">
            <Text
              className="text-white font-bold text-xl flex-1 pr-3"
              numberOfLines={2}
            >
              {movie?.title}
            </Text>
            {movie && (
              <SaveButton
                movieId={movie.id}
                movieData={movieData}
                size={6}
                position="top-right"
                style={{ position: "relative", top: 0, right: 0 }}
              />
            )}
          </View>

          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-light-200 text-sm">
              {movie?.release_date?.split("-")[0]}
            </Text>
            <Text className="text-light-200 text-sm">{movie?.runtime}m</Text>
          </View>

          <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
            <Image source={icons.star} className="size-4" />
            <Text className="text-white font-bold text-sm">
              {Math.round(movie?.vote_average ?? 0)} / 10
            </Text>
            <Text className="text-light-200 text-sm">
              ({movie?.vote_count} votes)
            </Text>
          </View>

          <MovieInfo label="Overview" value={movie?.overview} />
          <MovieInfo
            label="Genres"
            value={movie?.genres?.map((g) => g.name).join(" - ") || "N/A"}
          />
          <View className="flex flex-row justify-between w-1/2">
            <MovieInfo
              label="Budget"
              value={`$${(Math.round(movie?.budget ?? 0) / 1_000_000).toFixed(
                0
              )} million`}
            />
            <MovieInfo
              label="Revenue"
              value={`$${(Math.round(movie?.revenue ?? 0) / 1_000_000).toFixed(
                0
              )} million`}
            />
          </View>

          <MovieInfo
            label="Production Companies"
            value={
              movie?.production_companies.map((c) => c.name).join(" - ") ||
              "N/A"
            }
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180 tintColor=#fff"
        />
        <Text className="text-white font-semibold text-base">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};
export default MovieDetails;
