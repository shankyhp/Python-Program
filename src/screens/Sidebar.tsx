import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
}

const { width: windowWidth } = Dimensions.get("window");

const Sidebar: React.FC<SidebarProps> = ({ isVisible, onClose }) => {
  const slideAnim = React.useRef(new Animated.Value(-windowWidth)).current;
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : -windowWidth,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isVisible, slideAnim]);

  const handleClose = () => {
    onClose();
    navigation.navigate("Main");
  };

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <Animated.View
      style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}
    >
      {/* Dark Blue Section for Status Bar */}
      <View style={styles.statusBarPlaceholder} />

      {/* Main Content with White Background */}
      <View style={styles.mainContent}>
        {/* Header with Close Button and Logout (White Background) */}
        <View style={styles.sidebarHeader}>
          <TouchableOpacity onPress={handleClose}>
            <Image
              source={require("../../assets/close-icon.png")}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
          <Image
                  source={require("../../assets/logout.jpg")}
                  style={styles.logoutIcon}
                />
          </TouchableOpacity>
        </View>

        {/* Profile Section with Hexagonal Pattern */}
        <ImageBackground
          source={require("../../assets/hexagonal-pattern.png")}
          style={styles.profileSection}
          resizeMode="repeat"
        >
          <View style={styles.profileContent}>
            <View style={styles.profileIconContainer}>
              <Image
                source={require("../../assets/profile-icon-side.jpg")}
                style={styles.profileIcon}
              />
            </View>
            <View style={styles.profileTextContainer}>
              <Text style={styles.profileName}>Sudhanshu Unmesh Sakhare</Text>
              <TouchableOpacity>
                <Text style={styles.viewProfileText}>View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        {/* Lower Section with White Background */}
        <View style={styles.lowerSection}>
          {/* Menu Items */}
          <View style={styles.menuItems}>
            <TouchableOpacity style={styles.menuItem}>
              <View
                style={[
                  styles.menuIconContainer,
                  { backgroundColor: "#0099F7" },
                ]}
              >
                <Image
                  source={require("../../assets/app-settings-icon.png")}
                  style={styles.menuIcon1}
                />
              </View>
              <View>
                <Text style={styles.menuTitle}>App Settings</Text>
                <Text style={styles.menuSubtitle}>
                  Manage Login and Enable Transaction Mode
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View
                style={[
                  styles.menuIconContainer,
                  { backgroundColor: "#722FE1" },
                ]}
              >
                <Image
                  source={require("../../assets/service-requests-icon.png")}
                  style={styles.menuIcon2}
                />
              </View>
              <View>
                <Text style={styles.menuTitle}>Service Requests</Text>
                <Text style={styles.menuSubtitle}>
                  Certificate & Statements
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View
                style={[
                  styles.menuIconContainer,
                  { backgroundColor: "#12C9B7" },
                ]}
              >
                <Image
                  source={require("../../assets/cheque.png")}
                  style={styles.menuIcon3}
                />
              </View>
              <View>
                <Text style={styles.menuTitle}>Cheque Clearing</Text>
                <Text style={styles.menuSubtitle}>
                  View Cheques in clearing house
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View
                style={[
                  styles.menuIconContainer,
                  { backgroundColor: "#732EE1" },
                ]}
              >
                <Image
                  source={require("../../assets/help-support-icon.png")}
                  style={styles.menuIcon4}
                />
              </View>
              <View>
                <Text style={styles.menuTitle}>Help and Support</Text>
                <Text style={styles.menuSubtitle}>
                  Check FAQs, Raise a query, Contact us
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View
                style={[
                  styles.menuIconContainer,
                  { backgroundColor: "#FDA416" },
                ]}
              >
                <Image
                  source={require("../../assets/app-language-icon.png")}
                  style={styles.menuIcon5}
                />
              </View>
              <View style={styles.menuItemWithExtra}>
                <View>
                  <Text style={styles.menuTitle}>App Language</Text>
                  <Text style={styles.menuSubtitle}>
                    Change your app language
                  </Text>
                </View>
                <Text style={styles.menuExtra}>English</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View
                style={[
                  styles.menuIconContainer,
                  { backgroundColor: "#FC530E" },
                ]}
              >
                <Image
                  source={require("../../assets/locate-branch-icon.png")}
                  style={styles.menuIcon6}
                />
              </View>
              <View>
                <Text style={styles.menuTitle}>Locate Branch</Text>
                <Text style={styles.menuSubtitle}>Find a Branch near you</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View
                style={[
                  styles.menuIconContainer,
                  { backgroundColor: "#0099F9" },
                ]}
              >
                <Image
                  source={require("../../assets/rate-us-icon.png")}
                  style={styles.menuIcon7}
                />
              </View>
              <View>
                <Text style={styles.menuTitle}>Rate Us</Text>
                <Text style={styles.menuSubtitle}>
                  Let us know, how was your experience
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View
                style={[
                  styles.menuIconContainer,
                  { backgroundColor: "#702CE1" },
                ]}
              >
                <Image
                  source={require("../../assets/legal-about-icon.png")}
                  style={styles.menuIcon7}
                />
              </View>
              <View>
                <Text style={styles.menuTitle}>Legal & About</Text>
                <Text style={styles.menuSubtitle}>
                  About us, Terms & Conditions, Privacy Policy &
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* App Version */}
          <Text style={styles.appVersion}>App Version 7.0.1</Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF", // Ensure the base background is white
    zIndex: 1000,
  },
  statusBarPlaceholder: {
    height: 40, // Adjust based on your status bar height
    backgroundColor: "#003087", // Dark blue to match the status bar in the image
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#FFFFFF", // White background for the main content
    paddingHorizontal: 15,
  },
  sidebarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF", // White background for the header
  },
  closeIcon: {
    marginTop: 10,
    width: 24,
    height: 24,
    tintColor: "#0052A5",
  },
  logoutText: {
    marginTop: 10,
    fontSize: 16,
    color: "#0052A5",
    fontWeight: "500",
  },
  profileSection: {
    height: 100,
    borderRadius: 10,
    marginBottom: 30,
  },
  profileContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  profileIconContainer: {
    marginTop: 10,
    backgroundColor: "#17C9B3",
    borderRadius: 25,
    padding: 5,
    marginRight: 15,
  },
  profileIcon: {
    width: 38,
    height: 38,
    borderRadius: 20,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  viewProfileText: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  lowerSection: {
    flex: 1,
    backgroundColor: "#FFFFFF", // White background for the lower section
  },
  menuItems: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  menuItemWithExtra: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  menuIconContainer: {
    borderRadius: 25,
    padding: 10,
    marginRight: 15,
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: "#FFFFFF",
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
  },
  menuSubtitle: {
    fontSize: 12,
    color: "#666666",
  },
  menuExtra: {
    paddingTop: 5,
    fontSize: 14,
    color: "#333333",
    fontWeight: "500",
  },
  appVersion: {
    fontSize: 12,
    color: "#666666",
    textAlign: "center",
    marginBottom: 20,
  },
  logoutIcon:{
    marginTop: 10,
    width: 80,
    height: 20,
  },
  menuIcon1:{
    width: 30,
    height: 30,
  },
  menuIcon2:{
    width: 30,
    height: 30,
  },
  menuIcon3:{
    width: 30,
    height: 30,
  },
  menuIcon4:{
    width: 30,
    height: 30,
  },
  menuIcon5:{
    width: 30,
    height: 30,
  },
  menuIcon6:{
    width: 30,
    height: 30,
  },
  menuIcon7:{
    width: 30,
    height: 30,
  }, 
  menuIcon8:{
    width: 30,
    height: 30,
  },
 
});

export default Sidebar;
