import { StyleSheet, Text, View } from "react-native";

export default function BtnAuth() {
  return (
    <View style={styles.conteiner_BtnAuth}>
      <Text style={styles.conteiner_BtnAuth_Text}>Создать аккаунт</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner_BtnAuth: {
    width: "85%",
    backgroundColor: "#CBB171",
    marginTop: 75,
    alignSelf: "center",
    borderRadius: 4,
  },
  conteiner_BtnAuth_Text: {
    height: 48,
    textAlign: "center",
    verticalAlign: "middle",
  },
});
