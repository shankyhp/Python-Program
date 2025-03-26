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
} from "react-native";

// Get screen width for the carousel
const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Placeholder images for the carousel (replace with your actual images)
const carouselImages = [
  { id: "1", source: require("../../assets/carousel-image1.jpg") },
  { id: "2", source: require("../../assets/carousel-image2.jpg") },
  { id: "3", source: require("../../assets/carousel-image3.jpg") },
];

// Define the type for the component (no props in this case)
const LoginScreen: React.FC = () => {
  const [mpin, setMpin] = useState<string>(""); // State to store the MPIN input
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Track the current image index
  const flatListRef = useRef<FlatList>(null); // Ref for the FlatList to control scrolling

  // Function to handle dot press (opens the keyboard)
  const handleDotPress = () => {
    setKeyboardVisible(true);
    Keyboard.dismiss(); // Dismiss any existing keyboard
    setTimeout(() => {
      Keyboard.dismiss();
    }, 100);
  };

  // Update MPIN as the user types
  const handleMpinChange = (text: string) => {
    if (text.length <= 4) {
      setMpin(text);
    }
  };

  // Update the current index when the user swipes
  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  // Handle dot press to navigate to a specific image
  const handleCarouselDotPress = (index: number) => {
    setCurrentIndex(index);
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  // Render each image in the carousel
  const renderCarouselItem = ({
    item,
  }: {
    item: { id: string; source: any };
  }) => (
    <Image
      source={item.source}
      style={styles.carouselImage}
      resizeMode="cover"
    />
  );

  return (
    <View style={styles.mainContainer}>
      {/* Blue Section with Existing UI */}
      <ImageBackground
        source={require("../../assets/hexagonal-pattern.png")} // Replace with your hexagonal pattern image
        style={styles.container}
        resizeMode="repeat"
      >
        {/* Logo */}
        <Image
          source={require("../../assets/F-logo.jpg")} // Replace with your logo path
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Welcome to FedMobile</Text>

        {/* Login Using MPIN Section */}
        <Text style={styles.loginText}>Login Using MPIN</Text>

        {/* MPIN Input Dots */}
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

        {/* Hidden TextInput to capture MPIN and show the keyboard */}
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

        {/* Forgot MPIN Link */}
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot MPIN?</Text>
        </TouchableOpacity>

        {/* Scan & Pay Button */}
        <TouchableOpacity style={styles.scanButton}>
          <Image
            source={require("../../assets/scan.jpg")} // Replace with your scan icon path
            style={styles.scanIcon}
          />
          <Text style={styles.scanText}>SCAN & PAY</Text>
        </TouchableOpacity>

        {/* Downward Curved Shape at the Bottom */}
        <View style={styles.bottomCurve} />
      </ImageBackground>

      {/* White Section with Carousel and Stay Safe Text */}
      <View style={styles.whiteSection}>
        {/* Sliding Image Carousel */}
        <FlatList
          ref={flatListRef}
          data={carouselImages}
          renderItem={renderCarouselItem}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={styles.carousel}
        />

        {/* Carousel Dots */}
        <View style={styles.carouselDots}>
          {carouselImages.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCarouselDotPress(index)}
            >
              <View
                style={[
                  styles.carouselDot,
                  currentIndex === index && styles.carouselDotActive,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Stay Safe Text */}
        <View style={styles.staySafeContainer}>
          <Image
            source={require("../../assets/stay-safe-icon.png")} // Replace with your stay safe icon
            style={styles.staySafeIcon}
          />
          <Text style={styles.staySafeText}>
            Stay Safe! Beware of Phishing Emails/SMS. Never share your ATM Card
            details/PINs/OTPs/Passwords with anyone.
          </Text>
        </View>
      </View>
    </View>
  );
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF", // White background for the entire screen
  },
  container: {
    backgroundColor: "#0052A5", // Blue background for the top section
    alignItems: "center",
    padding: 20,
    height: "70%", // Adjust height to make space for the white section
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
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
    bottom: 0, // Position at the bottom of the blue section
    width: "100%",
    height: 40, // Height of the curve
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 40, // Create a downward curve
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 0, // No curve at the top
    borderTopRightRadius: 0,
  },
  whiteSection: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  carousel: {
    width: SCREEN_WIDTH - 40, // Subtract padding
    height: 120, // Adjust height based on the banner in the image
  },
  carouselImage: {
    width: SCREEN_WIDTH - 40, // Subtract padding
    height: 150,
    borderRadius: 20,
  },
  carouselDots: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  carouselDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D3D3D3", // Light gray for inactive dots
    marginHorizontal: 5,
  },
  carouselDotActive: {
    backgroundColor: "#0052A5", // Blue for the active dot
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  staySafeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  staySafeIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  staySafeText: {
    fontSize: 14,
    color: "#333333",
    flexShrink: 1, // Allow text to wrap
  },
});

export default LoginScreen;
