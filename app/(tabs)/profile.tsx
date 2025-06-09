import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProfileItem = ({
  icon,
  title,
  subtitle,
  onPress,
  showArrow = true,
}: {
  icon: any;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  showArrow?: boolean;
}) => (
  <TouchableOpacity
    className="flex-row items-center justify-between py-4 px-5 bg-dark-100 rounded-xl mb-3"
    onPress={onPress}
    disabled={!onPress}
  >
    <View className="flex-row items-center flex-1">
      <Image source={icon} className="size-6 mr-4" tintColor="#A8B5DB" />
      <View className="flex-1">
        <Text className="text-white text-base font-semibold">{title}</Text>
        {subtitle && (
          <Text className="text-light-300 text-sm mt-1">{subtitle}</Text>
        )}
      </View>
    </View>
    {showArrow && (
      <Image
        source={icons.arrow}
        className="size-4 rotate-180"
        tintColor="#A8B5DB"
      />
    )}
  </TouchableOpacity>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <View className="bg-dark-100 rounded-xl p-4 flex-1 items-center">
    <Text className="text-white text-2xl font-bold text-center">{number}</Text>
    <Text className="text-light-300 text-sm mt-1 text-center">{label}</Text>
  </View>
);

const Profile = () => {
  const router = useRouter();

  const handleEditProfile = () => {
    Alert.alert("Edit Profile", "Profile editing feature coming soon!");
  };

  const handleNotifications = () => {
    Alert.alert("Notifications", "Notification settings coming soon!");
  };

  const handleWatchHistory = () => {
    Alert.alert("Watch History", "Watch history feature coming soon!");
  };

  const handleDownloads = () => {
    Alert.alert("Downloads", "Downloads feature coming soon!");
  };

  const handlePrivacy = () => {
    Alert.alert("Privacy", "Privacy settings coming soon!");
  };

  const handleHelp = () => {
    Alert.alert("Help & Support", "Help center coming soon!");
  };

  const handleAbout = () => {
    Alert.alert(
      "About",
      "Movie App v1.0.0\n\nDiscover and explore movies with ease."
    );
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive" },
    ]);
  };

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header */}
        <View className="mt-16 mb-8 items-center">
          <Text className="text-white text-2xl font-bold">Profile</Text>
        </View>

        {/* User Info Section */}
        <View className="bg-dark-100 rounded-2xl p-6 mb-6">
          <View className="items-center mb-4">
            <View className="relative">
              <Image
                source={images.profilePicture}
                className="w-24 h-24 rounded-full border-2 border-accent"
              />
              <TouchableOpacity
                className="absolute -bottom-1 -right-1 bg-accent rounded-full p-2"
                onPress={handleEditProfile}
              >
                <Image
                  source={icons.arrow}
                  className="size-3"
                  tintColor="#fff"
                />
              </TouchableOpacity>
            </View>
            <Text className="text-white text-xl font-bold mt-4">
              Angel Loaiza
            </Text>
            <Text className="text-light-300 text-base">Movie Enthusiast</Text>
          </View>

          {/* Stats */}
          <View className="flex-row gap-3 mt-4">
            <StatCard number="36" label="Movies Watched" />
            <StatCard number="13" label="Favorites" />
            <StatCard number="9" label="Reviews" />
          </View>
        </View>

        {/* My Activity Section */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-4">My Activity</Text>

          <ProfileItem
            icon={icons.save}
            title="Saved Movies"
            subtitle="Your favorite movies collection"
            onPress={() => router.push("/saved")}
          />

          <ProfileItem
            icon={icons.play}
            title="Watch History"
            subtitle="Recently watched movies"
            onPress={handleWatchHistory}
          />

          <ProfileItem
            icon={icons.star}
            title="My Reviews"
            subtitle="Movies you've reviewed"
            onPress={() =>
              Alert.alert("Reviews", "Reviews feature coming soon!")
            }
          />
        </View>

        {/* Preferences Section */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-4">Preferences</Text>

          <ProfileItem
            icon={icons.search}
            title="Notifications"
            subtitle="Manage your notifications"
            onPress={handleNotifications}
          />

          <ProfileItem
            icon={icons.home}
            title="Language"
            subtitle="English"
            onPress={() =>
              Alert.alert("Language", "Language settings coming soon!")
            }
          />

          <ProfileItem
            icon={icons.person}
            title="Downloads"
            subtitle="Manage offline content"
            onPress={handleDownloads}
          />
        </View>

        {/* Settings Section */}
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-4">Settings</Text>

          <ProfileItem
            icon={icons.person}
            title="Account Settings"
            subtitle="Manage your account"
            onPress={handleEditProfile}
          />

          <ProfileItem
            icon={icons.save}
            title="Privacy & Security"
            subtitle="Control your privacy"
            onPress={handlePrivacy}
          />

          <ProfileItem
            icon={icons.search}
            title="Help & Support"
            subtitle="Get help and contact us"
            onPress={handleHelp}
          />

          <ProfileItem
            icon={icons.star}
            title="About"
            subtitle="App version and info"
            onPress={handleAbout}
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          className="bg-red-600 rounded-xl py-4 px-5 mb-4"
          onPress={handleLogout}
        >
          <Text className="text-white text-center text-base font-semibold">
            Logout
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default Profile;
