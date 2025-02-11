import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("./assets/FirsPicturePage.png")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A686A6",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    // width: 300,
    height: "70%",
    resizeMode: "contain",
  },
});
