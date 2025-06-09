import { icons } from "@/constants/icons";
import { isSaved, saveMovie, unsaveMovie } from "@/services/savedMovies";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";

interface SaveButtonProps {
  movieId: number;
  movieData?: Movie;
  size?: number;
  style?: object;
  position?: "bottom-right" | "top-right";
}

const SaveButton: React.FC<SaveButtonProps> = ({
  movieId,
  movieData,
  size = 8,
  style = {},
  position = "bottom-right",
}) => {
  const [isMovieSaved, setIsMovieSaved] = useState(false);

  useEffect(() => {
    setIsMovieSaved(isSaved(movieId));
  }, [movieId]);

  const handleSave = async (event: any) => {
    try {
      // Prevent event bubbling to parent components (like navigation)
      event.stopPropagation();
      event.preventDefault();

      if (isMovieSaved) {
        // Remove from saved movies
        const success = await unsaveMovie(movieId);
        if (success) {
          setIsMovieSaved(false);
        }
      } else {
        // Add to saved movies
        if (movieData) {
          const success = await saveMovie(movieData);
          if (success) {
            setIsMovieSaved(true);
          }
        }
      }
    } catch (error) {
      console.error("Error saving movie:", error);
    }
  };

  const positionClasses =
    position === "bottom-right" ? "bottom-2 right-2" : "top-2 right-2";

  return (
    <TouchableOpacity
      className={`absolute ${positionClasses} bg-black/70 rounded-full p-2 z-20`}
      onPress={handleSave}
      style={style}
      activeOpacity={0.7}
    >
      <Image
        source={icons.save}
        className={`size-${size}`}
        tintColor={isMovieSaved ? "#AB8BFF" : "#fff"}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default SaveButton;
