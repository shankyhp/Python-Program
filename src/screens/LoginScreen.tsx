import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
  FlatList,
  Dimensions,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const LoginScreen: React.FC = () => {
  const [mpin, setMpin] = useState<string>("");
  const textInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleMpinChange = (text: string) => {
    if (text.length <= 4) {
      setMpin(text);
      if (text.length === 4) {
        checkMpin(text);
      }
    }
  };

  const checkMpin = (enteredMpin: string) => {
    if (enteredMpin === "1234") {
      navigation.navigate("Main" as never);
    } else {
      Alert.alert("Incorrect MPIN", "Please try again.");
      setMpin("");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/hexagonal-pattern.png")}
        style={styles.background}
        resizeMode="repeat"
      >
        <Image
          source={require("../../assets/F-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>Welcome to FedMobile</Text>
        <Text style={styles.loginText}>Login Using MPIN</Text>

        <TouchableOpacity
          style={styles.mpinContainer}
          onPress={() => textInputRef.current?.focus()}
        >
          {[...Array(4)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.mpinCircle,
                mpin.length > index && styles.mpinCircleFilled,
              ]}
            />
          ))}
        </TouchableOpacity>

        <TextInput
          ref={textInputRef}
          style={styles.hiddenInput}
          value={mpin}
          onChangeText={handleMpinChange}
          keyboardType="numeric"
          maxLength={4}
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot MPIN?</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, alignItems: "center", justifyContent: "center" },
  logo: { width: 60, height: 60, borderRadius: 30, marginBottom: 20 },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 40,
  },
  loginText: { fontSize: 18, color: "#FFFFFF", marginBottom: 20 },
  mpinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    marginBottom: 20,
  },
  mpinCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    backgroundColor: "transparent",
  },
  mpinCircleFilled: { backgroundColor: "#FFFFFF" },
  hiddenInput: { position: "absolute", width: 0, height: 0, opacity: 0 },
  forgotText: {
    fontSize: 16,
    color: "#FFFFFF",
    textDecorationLine: "underline",
    marginBottom: 40,
  },
});

export default LoginScreen;
