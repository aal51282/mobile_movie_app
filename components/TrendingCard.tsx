import { images } from "@/constants/images";
import MaskedView from "@react-native-masked-view/masked-view";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import SaveButton from "./SaveButton";

const TrendingCard = ({
  movie: { movie_id, title, poster_url },
  index,
}: TrendingCardProps) => {
  // Extract poster_path from the full URL if it contains the TMDB path
  const poster_path = poster_url.includes("image.tmdb.org/t/p/w500/")
    ? poster_url.replace("https://image.tmdb.org/t/p/w500/", "")
    : poster_url;

  return (
    <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity className="w-32 relative pl-5">
        <View className="relative">
          <Image
            source={{ uri: poster_url }}
            className="w-32 h-48 rounded-lg"
            resizeMode="cover"
          />

          <SaveButton
            movieId={movie_id}
            movieData={
              {
                id: movie_id,
                title,
                poster_path,
                // Provide default values for required Movie properties
                adult: false,
                backdrop_path: "",
                genre_ids: [],
                original_language: "",
                original_title: title,
                overview: "",
                popularity: 0,
                release_date: "",
                video: false,
                vote_average: 0,
                vote_count: 0,
              } as Movie
            }
            size={4}
            position="bottom-right"
          />
        </View>

        <View className="absolute bottom-9 -left-3.5 px-2 py-1 rounded-full">
          <MaskedView
            maskElement={
              <Text className="font-bold text-white text-6xl">{index + 1}</Text>
            }
          >
            <Image
              source={images.rankingGradient}
              className="size-14"
              resizeMode="cover"
            />
          </MaskedView>
        </View>

        <Text
          className="text-light-200 text-sm font-bold mt-2"
          numberOfLines={2}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
