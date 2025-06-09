import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ProfileCardProps {
  name: string;
  subtitle: string;
  avatar?: string;
  stats?: {
    label: string;
    value: string;
  }[];
  onPress?: () => void;
  compact?: boolean;
}

const ProfileCard = ({
  name,
  subtitle,
  avatar,
  stats,
  onPress,
  compact = false,
}: ProfileCardProps) => {
  if (compact) {
    return (
      <TouchableOpacity
        className="flex-row items-center bg-dark-100 rounded-xl p-4"
        onPress={onPress}
        disabled={!onPress}
      >
        <Image
          source={avatar ? { uri: avatar } : images.profilePicture}
          className="w-12 h-12 rounded-full border border-accent mr-3"
        />
        <View className="flex-1">
          <Text className="text-white font-semibold text-base">{name}</Text>
          <Text className="text-light-300 text-sm">{subtitle}</Text>
        </View>
        {onPress && (
          <Image
            source={icons.arrow}
            className="size-4 rotate-180"
            tintColor="#A8B5DB"
          />
        )}
      </TouchableOpacity>
    );
  }

  return (
    <View className="bg-dark-100 rounded-2xl p-6">
      <View className="items-center mb-4">
        <Image
          source={avatar ? { uri: avatar } : images.profilePicture}
          className="w-20 h-20 rounded-full border-2 border-accent"
        />
        <Text className="text-white text-lg font-bold mt-3">{name}</Text>
        <Text className="text-light-300 text-base">{subtitle}</Text>
      </View>

      {stats && stats.length > 0 && (
        <View className="flex-row justify-around mt-4">
          {stats.map((stat, index) => (
            <View key={index} className="items-center">
              <Text className="text-white text-xl font-bold">{stat.value}</Text>
              <Text className="text-light-300 text-sm mt-1">{stat.label}</Text>
            </View>
          ))}
        </View>
      )}

      {onPress && (
        <TouchableOpacity
          className="bg-accent rounded-xl py-3 mt-4"
          onPress={onPress}
        >
          <Text className="text-white text-center font-semibold">
            View Profile
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProfileCard;
