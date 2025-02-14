import { View, Text, StyleSheet } from "react-native";
import { Colors, Size } from "../components/tokens";
import InputAuth from "../components/InputAuth";
import BtnAuth from "../components/BtnAuth";

export default function Auth() {
  return (
    <View style={styles.container}>
      <Text style={styles.container_title}>Авторизация</Text>
      <View style={styles.conteiner_input}>
        <InputAuth placeHolder={"Ваше имя"} />
        <InputAuth placeHolder={"Телефон"} />
        <InputAuth placeHolder={"Email"} />
        <InputAuth placeHolder={"Password"} />
        <BtnAuth />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background_Color,
  },
  container_title: {
    fontSize: Size.fs_title,
    color: Colors.text_Color_Title,
    textAlign: "center",
    marginTop: "10%",
  },
  conteiner_input: {
    marginTop: 78,
  },
});
