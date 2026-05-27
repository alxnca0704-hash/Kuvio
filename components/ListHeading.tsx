import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ListHeading = ({ title, onSeeAll }: ListHeadingProps) => {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>

      {onSeeAll && (
        <TouchableOpacity
          className="list-action"
          onPress={onSeeAll}
          accessibilityLabel={`See all ${title}`}
          accessibilityRole="button"
        >
          <Text className="list-action-text">See All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ListHeading;
