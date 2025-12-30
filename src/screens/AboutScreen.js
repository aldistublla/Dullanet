import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import CustomHeader from '../components/CustomHeader';

const { width } = Dimensions.get('window');

export default function AboutScreen({ navigation }) {
  const features = [
    {
      icon: 'people',
      title: 'Connect & Share',
      description: 'Meet amazing people and share your experiences in a vibrant community.',
      gradient: ['#FF6B9D', '#FFA07A']
    },
    {
      icon: 'shield-checkmark',
      title: 'Safe Environment',
      description: 'Your privacy and safety are our top priorities. Browse with confidence.',
      gradient: ['#A78BFA', '#C084FC']
    },
    {
      icon: 'heart',
      title: 'Meaningful Connections',
      description: 'Discover genuine friendships and create lasting memories together.',
      gradient: ['#60A5FA', '#818CF8']
    }
  ];

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      {/* Custom Header */}
      <CustomHeader title="About" navigation={navigation} />

      <LinearGradient
        colors={['#FFF5F7', '#FFF0F5', '#FFFFFF']}
        style={styles.container}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://placekitten.com/400/300' }}
              style={styles.headerImage}
            />
            <LinearGradient
              colors={['transparent', 'rgba(255, 20, 147, 0.1)']}
              style={styles.imageOverlay}
            />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <View style={styles.brandContainer}>
              <Text style={styles.brandName}>Dullanet</Text>
              <View style={styles.heartIcon}>
                <Ionicons name="heart" size={32} color="#FF1493" />
              </View>
            </View>
            <Text style={styles.tagline}>Where Connections Come to Life</Text>
          </View>
        </View>

        {/* Mission Statement */}
        <View style={styles.missionCard}>
          <LinearGradient
            colors={['#FFE4E1', '#FFF0F5']}
            style={styles.missionGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Ionicons name="sparkles" size={28} color="#FF1493" style={styles.missionIcon} />
            <Text style={styles.missionTitle}>Our Mission</Text>
            <Text style={styles.missionText}>
              Creating a warm, friendly platform where people connect, share experiences, 
              and explore new possibilities in a safe and welcoming environment.
            </Text>
          </LinearGradient>
        </View>

        {/* Features Grid */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>What Makes Us Special</Text>

          {features.map((feature, index) => (
            <View key={index} style={styles.featureCard}>
              <LinearGradient
                colors={feature.gradient}
                style={styles.featureGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.iconCircle}>
                  <Ionicons name={feature.icon} size={32} color="#FFFFFF" />
                </View>
              </LinearGradient>

              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Call to Action */}
        <View style={styles.ctaCard}>
          <LinearGradient
            colors={['#FF1493', '#FF69B4']}
            style={styles.ctaGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Ionicons name="star" size={40} color="#FFFFFF" />
            <Text style={styles.ctaTitle}>Join Our Community</Text>
            <Text style={styles.ctaText}>
              Start your journey today and make meaningful connections that last a lifetime.
            </Text>
          </LinearGradient>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Ionicons name="heart-circle" size={24} color="#FF1493" />
          <Text style={styles.footerText}>Thank you for choosing Dullanet</Text>
          <Text style={styles.footerSubtext}>Made with love for our community</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

// Keep all your existing styles (no changes needed)
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingBottom: 40,
  },
  heroSection: { marginBottom: 30 },
  imageContainer: { width: '100%', height: 280, position: 'relative' },
  headerImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  imageOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 100 },
  titleContainer: { alignItems: 'center', paddingHorizontal: 20, marginTop: -40 },
  welcomeText: { fontSize: 16, color: '#666', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 },
  brandContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  brandName: { fontSize: 42, fontWeight: '800', color: '#FF1493', letterSpacing: -1 },
  heartIcon: { marginLeft: 10, transform: [{ rotate: '-10deg' }] },
  tagline: { fontSize: 16, color: '#888', fontStyle: 'italic' },
  missionCard: { marginHorizontal: 20, marginBottom: 30, borderRadius: 24, overflow: 'hidden', shadowColor: '#FF1493', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.15, shadowRadius: 16, elevation: 8 },
  missionGradient: { padding: 28, alignItems: 'center' },
  missionIcon: { marginBottom: 12 },
  missionTitle: { fontSize: 24, fontWeight: '700', color: '#FF1493', marginBottom: 16 },
  missionText: { fontSize: 16, color: '#555', lineHeight: 26, textAlign: 'center' },
  featuresSection: { paddingHorizontal: 20, marginBottom: 30 },
  sectionTitle: { fontSize: 28, fontWeight: '700', color: '#333', marginBottom: 24, textAlign: 'center' },
  featureCard: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 20, marginBottom: 16, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 12, elevation: 4 },
  featureGradient: { width: 100, justifyContent: 'center', alignItems: 'center' },
  iconCircle: { width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(255, 255, 255, 0.3)', justifyContent: 'center', alignItems: 'center' },
  featureContent: { flex: 1, padding: 20, justifyContent: 'center' },
  featureTitle: { fontSize: 18, fontWeight: '700', color: '#333', marginBottom: 8 },
  featureDescription: { fontSize: 14, color: '#666', lineHeight: 22 },
  ctaCard: { marginHorizontal: 20, marginBottom: 30, borderRadius: 24, overflow: 'hidden', shadowColor: '#FF1493', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 16, elevation: 10 },
  ctaGradient: { padding: 32, alignItems: 'center' },
  ctaTitle: { fontSize: 26, fontWeight: '800', color: '#FFFFFF', marginTop: 16, marginBottom: 12 },
  ctaText: { fontSize: 15, color: '#FFFFFF', lineHeight: 24, textAlign: 'center', opacity: 0.95 },
  footer: { alignItems: 'center', paddingHorizontal: 20, paddingTop: 20, borderTopWidth: 1, borderTopColor: '#FFE4E1', marginTop: 10 },
  footerText: { fontSize: 18, fontWeight: '600', color: '#FF1493', marginTop: 12, marginBottom: 6 },
  footerSubtext: { fontSize: 14, color: '#999', fontStyle: 'italic' },
});
