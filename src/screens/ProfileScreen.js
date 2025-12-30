import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import CustomHeader from '../components/CustomHeader';
 
const { width } = Dimensions.get('window');
 
export default function ProfileScreen({ navigation, loggedInUser }) {
  if (!loggedInUser) {
    return (
      <View style={styles.container}>
        <CustomHeader title="Profile" navigation={navigation} />
        <View style={styles.centered}>
          <Ionicons name="person-circle-outline" size={80} color="#FF1493" />
          <Text style={styles.noUserText}>No user logged in.</Text>
        </View>
      </View>
    );
  }
 
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <CustomHeader title="My Profile" navigation={navigation} />
 
      <LinearGradient
        colors={['#FFF5F7', '#FFFFFF']}
        style={styles.mainContainer}
      >
        {/* Profile Header Card */}
        <View style={styles.profileHeaderCard}>
          <LinearGradient
            colors={['#FF1493', '#FF69B4']}
            style={styles.headerGradient}
          />
          <View style={styles.avatarWrapper}>
            <Image source={loggedInUser.avatar} style={styles.avatar} />
            <TouchableOpacity style={styles.editBadge}>
              <Ionicons name="camera" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.name}>{loggedInUser.name}, {loggedInUser.age}</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={16} color="#666" />
            <Text style={styles.locationText}>Tirana, Albania</Text>
          </View>
        </View>
 
        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1.2k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={[styles.statItem, styles.statBorder]}>
            <Text style={styles.statNumber}>450</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>85</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
        </View>
 
        {/* Bio Section */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionLabel}>About Me</Text>
          <View style={styles.bioCard}>
            <Text style={styles.bioText}>{loggedInUser.bio}</Text>
          </View>
        </View>
 
        {/* Quick Actions / Settings */}
        <View style={styles.actionSection}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={[styles.iconBox, { backgroundColor: '#FFE4E1' }]}>
              <Ionicons name="settings-outline" size={22} color="#FF1493" />
            </View>
            <Text style={styles.actionText}>Account Settings</Text>
            <Ionicons name="chevron-forward" size={20} color="#CCC" />
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.actionButton}>
            <View style={[styles.iconBox, { backgroundColor: '#E0F2FE' }]}>
              <Ionicons name="shield-checkmark-outline" size={22} color="#0EA5E9" />
            </View>
            <Text style={styles.actionText}>Privacy & Safety</Text>
            <Ionicons name="chevron-forward" size={20} color="#CCC" />
          </TouchableOpacity>
        </View>
 
        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  scrollView: { flex: 1, backgroundColor: '#FFF' },
  mainContainer: { paddingBottom: 40 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 },
  
  // Header Card
  profileHeaderCard: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginTop: 60,
    borderRadius: 30,
    paddingBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  headerGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  avatarWrapper: {
    marginTop: 30,
    position: 'relative',
    borderWidth: 5,
    borderColor: '#FFF',
    borderRadius: 85,
  },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  editBadge: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#FF1493',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFF',
  },
  name: { fontSize: 26, fontWeight: '800', color: '#333', marginTop: 15 },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  locationText: { color: '#666', marginLeft: 4, fontSize: 14 },
 
  // Stats
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  statItem: { alignItems: 'center', flex: 1 },
  statBorder: { borderLeftWidth: 1, borderRightWidth: 1, borderColor: '#EEE' },
  statNumber: { fontSize: 20, fontWeight: '700', color: '#FF1493' },
  statLabel: { fontSize: 13, color: '#999', marginTop: 4 },
 
  // Bio
  infoSection: { paddingHorizontal: 25, marginBottom: 25 },
  sectionLabel: { fontSize: 18, fontWeight: '700', color: '#333', marginBottom: 12 },
  bioCard: {
    backgroundColor: '#F8F9FA',
    padding: 20,
    borderRadius: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#FF1493',
  },
  bioText: { fontSize: 15, color: '#555', lineHeight: 22 },
 
  // Actions
  actionSection: { paddingHorizontal: 25, marginBottom: 30 },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 18,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconBox: { width: 45, height: 45, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  actionText: { flex: 1, marginLeft: 15, fontSize: 16, fontWeight: '600', color: '#444' },
 
  logoutBtn: {
    marginHorizontal: 25,
    height: 55,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FF1493',
  },
  logoutText: { color: '#FF1493', fontSize: 16, fontWeight: '700' },
  noUserText: { fontSize: 18, color: '#666', marginTop: 10 }
});