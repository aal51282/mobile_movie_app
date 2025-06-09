import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import SaveButton from "./SaveButton";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
  adult = false,
  backdrop_path = "",
  genre_ids = [],
  original_language = "",
  original_title = "",
  overview = "",
  popularity = 0,
  video = false,
  vote_count = 0,
}: Movie) => {
  //   console.log(poster_path);
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <View className="relative">
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://placehold.co/600x400/1a1a1a/ffffff.png",
            }}
            className="w-full h-52 rounded-lg"
            resizeMode="cover"
          />

          <SaveButton
            movieId={id}
            movieData={
              {
                id,
                poster_path,
                title,
                vote_average,
                release_date,
                adult,
                backdrop_path,
                genre_ids,
                original_language,
                original_title,
                overview,
                popularity,
                video,
                vote_count,
              } as Movie
            }
            size={4}
            position="bottom-right"
          />
        </View>

        <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
          {title}
        </Text>

        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs text-white font-bold uppercase">
            {Math.round(vote_average / 2)}
          </Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-xs text-light-300 font-medium mt-1">
            {release_date?.split("-")[0]}
          </Text>
          {/* <Text className="text-xs font-medium text-light-300 uppercase">
            Movie
          </Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
