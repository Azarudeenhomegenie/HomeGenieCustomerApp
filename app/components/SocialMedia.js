import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  Button,
  TouchableOpacity,
} from "react-native";

const SocialMedia = (props) => {
  return (
    <View style={styles.socialMedia}>
      <Text
        style={[
          styles.socialMediaTitle,
          styles.textCenter,
          { marginBottom: 15, fontSize: 12 },
        ]}
      >
        Follow us on social media
      </Text>
      <View
        style={[
          styles.test,
          {
            flexDirection: "row",
            justifyContent: "center",
          },
        ]}
      >
        <View style={[styles.flexRowSpace, { width: "60%" }]}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.facebook.com/homegenieuae/")
            }
          >
            <Image
              style={[styles.socialImages]}
              source={require("../assets/fb.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://twitter.com/homegenie_me")}
          >
            <Image source={require("../assets/twitter.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.instagram.com/homegenie_uae/")
            }
          >
            <Image source={require("../assets/Instagram.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.youtube.com/c/HomeGenie_Home_Maintenance_In_Dubai"
              )
            }
          >
            <Image source={require("../assets/youtube.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
  },
  flexRowSpace: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textCenter: {
    textAlign: "center",
  },
});

export default SocialMedia;
