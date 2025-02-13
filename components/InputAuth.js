import { View, StyleSheet, TextInput } from "react-native";

export default function InputAuth({ placeHolder }) {
  return (
    <View style={styles.inputView}>
      <TextInput style={styles.inputView_item} placeholder={placeHolder} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    flex: 1,
    marginBottom: 32,
    width: "85%",
    alignSelf: "center",

    justifyContent: "space-between",
  },
  inputView_item: {
    height: 48,
    backgroundColor: "#D9D9D9",
    borderRadius: 4,
    borderColor: "#16171D",
  },
});
