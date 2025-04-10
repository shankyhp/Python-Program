import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Switch,
} from "react-native";
import Sidebar from "./Sidebar";

const MainScreen: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false); // State to control sidebar visibility

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <View style={styles.mainContainer}>
      {/* Custom Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusBarIcons}></View>
      </View>

      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleSidebar}>
          <Image
            source={require("../../assets/profile-icon.jpg")}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
        <Image
              source={require("../../assets/fedbanklogo.jpg")}
              style={styles.fedbanklogo}
            />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/search-icon.png")}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/notification-icon.png")}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/power-icon.png")}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Sidebar */}
      <Sidebar isVisible={isSidebarVisible} onClose={toggleSidebar} />

      <ScrollView style={styles.scrollView}>
        <ImageBackground
          source={require("../../assets/hexagonal-pattern.png")}
          style={styles.accountSection}
          resizeMode="repeat"
        >
          {/* Account Card */}
          <View style={styles.accountCard}>
            <View style={styles.accountTypeContainer}>
              <Image
                source={require("../../assets/bank-orange-logo.png")} // Your bank icon
                style={styles.bankIcon}
              />
              <Text style={styles.accountType}>Savings Account</Text>
            </View>
            <View style={styles.accountDetails}>
              <Text style={styles.accountNumber}>7778XXXXXX3702</Text>
              <View style={styles.balanceContainer}>
                <Text style={styles.balance}>Balance</Text>
                <Text style={styles.balanceAmount}>₹ ------------</Text>
                <Switch
                  value={true}
                  onValueChange={() => {}}
                  trackColor={{ false: "#D3D3D3", true: "#0052A5" }}
                  thumbColor="#FFFFFF"
                  style={styles.toggleSwitch}
                />
              </View>
            </View>
          </View>

          {/* Account Options */}
          <View style={styles.accountOptions}>
            <TouchableOpacity style={styles.optionButton}>
              <View style={styles.optionIconContainer}>
                <Image
                  source={require("../../assets/feedback-icon.png")} // Replace with your FedBook icon
                  style={styles.optionIcon}
                />
              </View>
              <Text style={styles.optionText}>FedBook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <View style={styles.optionIconContainer}>
                <Image
                  source={require("../../assets/all-account-icon.png")} // Replace with your all accounts icon
                  style={styles.optionIcon}
                />
              </View>
              <Text style={styles.optionText}>All Accounts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <View style={styles.optionIconContainer}>
                <Image
                  source={require("../../assets/credit.png")} // Replace with your debit card icon
                  style={styles.optionIcon}
                />
              </View>
              <Text style={styles.optionText}>Debit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <View style={styles.optionIconContainer}>
                <Image
                  source={require("../../assets/debit.png")} // Replace with your credit card icon
                  style={styles.optionIcon}
                />
              </View>
              <Text style={styles.optionText}>Credit Card</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* Fund Transfer Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fund Transfer</Text>
          <View style={styles.sectionButtons}>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/send-to-account-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Send to Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/scan-pay-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Scan & Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/send-to-mobile-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>
                Send to Mobile Number
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/more-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Links Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Quick Links</Text>
            <TouchableOpacity>
              <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionButtons}>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/broadband-icon.png")}
                style={[styles.sectionIcon]}
              />
              <Text style={[styles.sectionButtonText]}>Broadband</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/send-to-mmid-icon.jpg")}
                style={[styles.sectionIcon, styles.commonStyle]}
              />
              <Text style={[styles.sectionButtonText, styles.commonStyle]}>Send to MMID</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/flights-icon.png")}
                style={[styles.sectionIcon, styles.commonStyle]}
              />
              <Text style={[styles.sectionButtonText, styles.commonStyle]}>Flights</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recharge Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recharge</Text>
          <View style={styles.sectionButtons}>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/mobile-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Mobile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/data-card-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Data Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/fastag-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Fastag</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Pay Bills Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Pay Bills</Text>
            <Image
              source={require("../../assets/bharat-connect-logo.png")}
              style={styles.bharatConnectLogo}
            />
          </View>
          <View style={styles.sectionButtons}>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/electricity-icon.jpg")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Electricity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/water-drop.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Water</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/television-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Television</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/broadband-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Broadband</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionButtons}>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/landline-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Landline Telephone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/lpg-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Book LPG cylinder</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/mobile-postpaid-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Mobile Postpaid</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/more-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Travel and Gift Vouchers Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Travel and Gift Vouchers</Text>
          <View style={styles.sectionButtons}>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/flights-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Flights</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/hotels-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Hotels</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/bus-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Bus</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/gift-vouchers-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Gift Vouchers</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Other Services Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other Services</Text>
          <View style={styles.sectionButtons}>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/insurance-icon.jpg")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Insurance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/mutual-funds-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Mutual Funds</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/bank-deposits-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Bank Deposits</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/asba-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>ASBA</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionButtons}>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/re-kyc-icon.jpg")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>
                Re-KYC & Profile Update
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/apy-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>APY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/social-security-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>
                Social Security Schemes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/more-icon.png")}
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <Image
            source={require("../../assets/carousel-image1.jpg")}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../../assets/home-icon.png")}
            style={[styles.navIcon, styles.navIconActive]}
          />
          <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../../assets/investments-icon.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Investments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../../assets/bhim-upi-icon.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>BHIM UPI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../../assets/loans-icon.jpg")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Loans</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../../assets/transactions-icon.png")}
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Transactions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Light gray background
  },
  accountSection: {
    paddingVertical: 20,
    backgroundColor: "#0052A5", // Fallback blue background in case the image fails
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#E6F0FA", // Light blue background
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0052A5", // Blue color for "FEDERAL BANK"
  },
  headerIcons: {
    flexDirection: "row",
    marginLeft: "auto",
  },
  headerIcon: {
    width: 28,
    height: 28,
    marginLeft: 15,
   // Blue tint for icons
  },
  scrollView: {
    flex: 1,
  },
  accountCard: {
    backgroundColor: "#FFFFFF", // White background
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    elevation: 2, // Add shadow for Android
    shadowColor: "#000", // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  accountType: {
    fontSize: 14,
    color: "#333333",
    fontWeight: "500",
  },
  accountDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  balance: {
    fontSize: 14,
    color: "#333333",
  },
  balanceAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginLeft: 5,
    marginRight: 10,
  },
  toggleSwitch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], // Scale down the switch to match the image
  },
  toggleDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#FF6200", // Orange dot
  },

  accountOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  optionButton: {
    alignItems: "center",
    width: "22%", // Adjust width to fit 4 buttons evenly
  },
  optionIconContainer: {
    width: 55, // Larger circle to match the image
    height: 55,
    borderRadius: 30, // Make it circular
    backgroundColor: "#FFFFFF", // White background for the icon
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8, // Space between icon and text
  },
  optionIcon: {
    width: 35, // Larger icon to match the image
    height: 28    // Blue tint for icons
  },
  optionText: {
    fontSize: 12,
    color: "#FFFFFF", // White text to contrast with the blue background
    textAlign: "center",
    fontWeight: "500", // Slightly bold to match the image
  },
  accountTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  bankIcon: {
    width: 24,
    height: 24,
    borderRadius: 12, // Make the icon round
    marginRight: 10,
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0052A5", // Blue color for section titles
  },
  editButton: {
    fontSize: 14,
    color: "#0052A5",
  },
  sectionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionButton: {
    alignItems: "center",
    width: "22%", // Adjust width to fit 4 buttons
    flexDirection: "column", // Ensure text and image are in a column
    justifyContent: "center", // Center items vertically
  },
  sectionIcon: {
    marginTop: 10,
    width: 45,
    height: 45,
    marginBottom: 5,
  },
  sectionButtonText: {
    fontSize: 12,
    color: "#333333",
    textAlign: "center",
  },
  bharatConnectLogo: {
    width: 80,
    height: 22,
  },
  bannerContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#E6F0FA", // Light blue background for the banner
  },
  bannerImage: {
    width: "100%",
    height: 150, // Adjust height based on your banner image
  },
  bannerTextContainer: {
    padding: 15,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0052A5",
    marginBottom: 5,
  },
  bannerSubtitle: {
    fontSize: 12,
    color: "#333333",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    width: 43,
    height: 29,
    marginBottom: 5, // Gray for inactive icons
    opacity: 1, // Ensure full opacity
  },
  navIconActive: {
    tintColor: "#0052A5", // Blue for active icon (Home)
    opacity: 1, // Ensure full opacity
  },
  navText: {
    fontSize: 12,
    color: "#666666",
  },
  navTextActive: {
    color: "#0052A5", // Blue for active text (Home)
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#003087", // Dark blue background to match the image
    paddingHorizontal: 15,
    paddingVertical: 5,
    height: 50, // Approximate height of a status bar
  },
  statusBarText: {
    fontSize: 12,
    color: "#FFFFFF", // White text for time and battery percentage
  },
  statusBarIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusBarIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 5,
    tintColor: "#FFFFFF", // White tint for Wi-Fi icon
  },
  commonStyle: {
    // Remove marginRight and use flex properties instead
  },
  fedbanklogo: {
    width: 80,
    height: 20,
    marginLeft: 5,
  },
});

export default MainScreen;
