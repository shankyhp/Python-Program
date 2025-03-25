import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
} from "react-native";

const LoginScreen: React.FC = () => {
  const [mpin, setMpin] = useState<string>("");
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  const handleDotPress = () => {
    setKeyboardVisible(true);
    Keyboard.dismiss();
    setTimeout(() => {
      Keyboard.dismiss();
    }, 100);
  };

  const handleMpinChange = (text: string) => {
    if (text.length <= 4) {
      setMpin(text);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/hexagonal-pattern.png")} // Corrected Path
      style={styles.container}
      resizeMode="repeat"
    >
      <Image
        source={require("../../assets/F-logo.jpg")} // Adjusted path for consistency
        style={styles.logo}
      />

      <Text style={styles.welcomeText}>Welcome to FedMobile</Text>
      <Text style={styles.loginText}>Login Using MPIN</Text>

      <TouchableOpacity style={styles.mpinContainer} onPress={handleDotPress}>
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
        style={styles.hiddenInput}
        value={mpin}
        onChangeText={handleMpinChange}
        keyboardType="numeric"
        maxLength={4}
        secureTextEntry
        autoFocus={isKeyboardVisible}
        onFocus={() => setKeyboardVisible(true)}
        onBlur={() => setKeyboardVisible(false)}
      />

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot MPIN?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.scanButton}>
        <Image
          source={require("../../assets/scan.jpg")} // Adjusted path
          style={styles.scanIcon}
        />
        <Text style={styles.scanText}>SCAN & PAY</Text>
      </TouchableOpacity>

      <View style={styles.bottomCurve} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0052A5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 120,
    borderRadius: 30, // Make it round
    overflow: "hidden", // Ensures the image remains within the border
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 40,
  },
  loginText: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 20,
  },
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
  mpinCircleFilled: {
    backgroundColor: "#FFFFFF",
  },
  hiddenInput: {
    position: "absolute",
    width: 0,
    height: 0,
    opacity: 0,
  },
  forgotText: {
    fontSize: 16,
    color: "#FFFFFF",
    textDecorationLine: "underline",
    marginBottom: 40,
  },
  scanButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  scanIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  scanText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0052A5",
  },
  bottomCurve: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});

export default LoginScreen;
