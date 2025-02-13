import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Auth from "./auth";
import { Colors } from "../components/tokens";

export default function App() {
  const [timeView, SetTimeView] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      SetTimeView(true);
    }, 3000);
  }, []);

  // {timeView &&  <Auth />}

  if (timeView) {
    return <Auth />;
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../assets/FirsPicturePage.png")}
      ></Image>

      {/* {timeView && (
        <Link href={"/Auth"}>
          <Text>ghhfjgfh</Text>
        </Link>
      )}  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background_Color,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: "70%",
    resizeMode: "contain",
  },
});
