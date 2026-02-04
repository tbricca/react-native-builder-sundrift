/**
 * Sundrift - Demo App
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
          bounces={true}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.logo}>Sundrift</Text>
            <Text style={styles.tagline}>built by Builder.io</Text>
          </View>

          {/* Hero Section */}
          <View style={styles.hero}>
            <Text style={styles.heroTitle}>Make life extraordinary</Text>
            <Text style={styles.heroSubtitle}>
              Your most rewarding trips start here
            </Text>
          </View>

          {/* Search Section */}
          <View style={styles.searchSection}>
            <View style={styles.searchInput}>
              <Text style={styles.searchPlaceholder}>Search by destination...</Text>
            </View>
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>

          {/* Vibes/Tags */}
          <View style={styles.vibesContainer}>
            {['All Vibes', 'Beachfront', 'Mountain', 'Urban', 'Wellness'].map(
              (vibe, index) => (
                <TouchableOpacity
                  key={vibe}
                  style={[
                    styles.vibeTag,
                    index === 0 && styles.vibeTagActive,
                  ]}>
                  <Text
                    style={[
                      styles.vibeTagText,
                      index === 0 && styles.vibeTagTextActive,
                    ]}>
                    {vibe}
                  </Text>
                </TouchableOpacity>
              ),
            )}
          </View>

          {/* Discover Section */}
          <View style={styles.discoverSection}>
            <Text style={styles.discoverTitle}>Discover Your Perfect Escape</Text>
            <Text style={styles.discoverSubtitle}>
              Curated collections to match your mood, season, or special occasion.
            </Text>
          </View>

          {/* Collection Cards */}
          <View style={styles.cardsContainer}>
            <TouchableOpacity style={[styles.card, styles.cardSummer]}>
              <Text style={styles.cardTitle}>Summer Escapes</Text>
              <Text style={styles.cardSubtitle}>Sun-soaked beaches & azure waters</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card, styles.cardRomantic]}>
              <Text style={styles.cardTitle}>Romantic Getaways</Text>
              <Text style={styles.cardSubtitle}>Intimate moments in dreamy destinations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card, styles.cardWellness]}>
              <Text style={styles.cardTitle}>Wellness Retreats</Text>
              <Text style={styles.cardSubtitle}>Rejuvenate mind, body & soul</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card, styles.cardCultural]}>
              <Text style={styles.cardTitle}>Cultural Journeys</Text>
              <Text style={styles.cardSubtitle}>Immerse in history & local traditions</Text>
            </TouchableOpacity>
          </View>

          {/* CTA Button */}
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Explore All Collections</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  logo: {
    fontFamily: 'Georgia',
    fontSize: 28,
    fontStyle: 'italic',
    color: '#1a1a2e',
    fontWeight: '400',
  },
  tagline: {
    fontSize: 12,
    color: '#666',
    marginLeft: 8,
  },
  hero: {
    backgroundColor: '#2c3e50',
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  heroTitle: {
    fontFamily: 'Georgia',
    fontSize: 32,
    fontStyle: 'italic',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
  },
  searchSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchPlaceholder: {
    color: '#999',
    fontSize: 15,
  },
  searchButton: {
    backgroundColor: '#1a365d',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 8,
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  vibesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 30,
  },
  vibeTag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  vibeTagActive: {
    backgroundColor: '#1a365d',
    borderColor: '#1a365d',
  },
  vibeTagText: {
    fontSize: 14,
    color: '#333',
  },
  vibeTagTextActive: {
    color: '#FFFFFF',
  },
  discoverSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  discoverTitle: {
    fontFamily: 'Georgia',
    fontSize: 26,
    fontStyle: 'italic',
    color: '#1a1a2e',
    textAlign: 'center',
    marginBottom: 8,
  },
  discoverSubtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  cardsContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  card: {
    height: 160,
    borderRadius: 16,
    padding: 20,
    justifyContent: 'flex-end',
  },
  cardSummer: {
    backgroundColor: '#3498db',
  },
  cardRomantic: {
    backgroundColor: '#9b59b6',
  },
  cardWellness: {
    backgroundColor: '#27ae60',
  },
  cardCultural: {
    backgroundColor: '#e67e22',
  },
  cardTitle: {
    fontFamily: 'Georgia',
    fontSize: 22,
    fontStyle: 'italic',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.85)',
  },
  ctaButton: {
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#1a365d',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  ctaButtonText: {
    color: '#1a365d',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
