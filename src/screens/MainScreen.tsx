import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// Define the type for the component (no props in this case)
const MainScreen: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>FEDERAL BANK</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/search-icon.png")} // Replace with your search icon
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/notification-icon.png")} // Replace with your notification icon
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Account Card */}
        <View style={styles.accountCard}>
          <Text style={styles.accountType}>Savings Account</Text>
          <Text style={styles.accountNumber}>7778XXXXXX3702</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.balance}>Balance</Text>
            <Text style={styles.balanceAmount}>₹ 0.0</Text>
            <View style={styles.toggleSwitch}>
              <View style={styles.toggleDot} />
            </View>
          </View>
        </View>

        {/* Account Options */}
        <View style={styles.accountOptions}>
          <TouchableOpacity style={styles.optionButton}>
            <Image
              source={require("../../assets/feedback-icon.png")} // Replace with your feedback icon
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>Feedback</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Image
              source={require("../../assets/all-accounts-icon.png")} // Replace with your all accounts icon
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>All Accounts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Image
              source={require("../../assets/debit-card-icon.png")} // Replace with your debit card icon
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>Debit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Image
              source={require("../../assets/credit-card-icon.png")} // Replace with your credit card icon
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>Credit Card</Text>
          </TouchableOpacity>
        </View>

        {/* Fund Transfer Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fund Transfer</Text>
          <View style={styles.sectionButtons}>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/send-to-account-icon.png")} // Replace with your send to account icon
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Send to Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/scan-pay-icon.png")} // Replace with your scan & pay icon
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Scan & Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/send-to-mobile-icon.png")} // Replace with your send to mobile icon
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>
                Send to Mobile Number
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/more-icon.png")} // Replace with your more icon
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
                source={require("../../assets/broadband-icon.png")} // Replace with your broadband icon
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Broadband</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/send-to-mmid-icon.jpg")} // Replace with your send to MMID icon
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Send to MMID</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/flights-icon.png")} // Replace with your flights icon
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Flights</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recharge Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recharge</Text>
          <View style={styles.sectionButtons}>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/mobile-icon.png")} // Replace with your mobile icon
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Mobile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/data-card-icon.png")} // Replace with your data card icon
                style={styles.sectionIcon}
              />
              <Text style={styles.sectionButtonText}>Data Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sectionButton}>
              <Image
                source={require("../../assets/fastag-icon.png")} // Replace with your fastag icon
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
              source={require("../../assets/bharat-connect-logo.png")} // Replace with your Bharat Connect logo
              style={styles.bharatConnectLogo}
            />
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../../assets/home-icon.png")} // Replace with your home icon
            style={[styles.navIcon, styles.navIconActive]}
          />
          <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../../assets/investments-icon.png")} // Replace with your investments icon
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Investments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../../assets/bhim-upi-icon.png")} // Replace with your BHIM UPI icon
            style={styles.navIcon}
          />
          <Text style={styles.navText}>BHIM UPI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../../assets/loans-icon.jpg")} // Replace with your loans icon
            style={styles.navIcon}
          />
          <Text style={styles.navText}>Loans</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require("../../assets/transactions-icon.png")} // Replace with your transactions icon
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0052A5", // Blue color for "FEDERAL BANK"
  },
  headerIcons: {
    flexDirection: "row",
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  scrollView: {
    flex: 1,
  },
  accountCard: {
    backgroundColor: "#0052A5", // Blue background for the card
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  accountType: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 5,
  },
  accountNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  balance: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  balanceAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 5,
  },
  toggleSwitch: {
    width: 40,
    height: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 2,
    marginLeft: "auto",
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
    marginHorizontal: 20,
    marginVertical: 10,
  },
  optionButton: {
    alignItems: "center",
  },
  optionIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  optionText: {
    fontSize: 12,
    color: "#333333",
    textAlign: "center",
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
    color: "#333333",
  },
  editButton: {
    fontSize: 14,
    color: "#0052A5",
  },
  sectionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionButton: {
    alignItems: "center",
    width: "22%", // Adjust width to fit 4 buttons
  },
  sectionIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  sectionButtonText: {
    fontSize: 12,
    color: "#333333",
    textAlign: "center",
  },
  bharatConnectLogo: {
    width: 80,
    height: 20,
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
    width: 24,
    height: 24,
    marginBottom: 5,
    tintColor: "#666666", // Gray for inactive icons
  },
  navIconActive: {
    tintColor: "#0052A5", // Blue for active icon (Home)
  },
  navText: {
    fontSize: 12,
    color: "#666666",
  },
  navTextActive: {
    color: "#0052A5", // Blue for active text (Home)
  },
});

export default MainScreen;
