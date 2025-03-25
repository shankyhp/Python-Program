import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Define the type for the component (no props in this case)
const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome to FedMobile</Text>

      {/* Login Using MPIN Section */}
      <Text style={styles.loginText}>Login Using MPIN</Text>

      {/* MPIN Input Circles */}
      <View style={styles.mpinContainer}>
        {[...Array(4)].map((_, index) => (
          <View key={index} style={styles.mpinCircle} />
        ))}
      </View>

      {/* Forgot MPIN Link */}
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot MPIN?</Text>
      </TouchableOpacity>

      {/* Scan & Pay Button (without the scan icon) */}
      <TouchableOpacity style={styles.scanButton}>
        <Text style={styles.scanText}>SCAN & PAY</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0052A5", // Blue background color
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
  scanText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0052A5",
  },
});

export default LoginScreen;
