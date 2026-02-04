import React from 'react';
import { StyleSheet, View } from 'react-native';
import App from '../App';

const PhoneFrame: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.phoneFrame}>
        {/* Dynamic Island */}
        <View style={styles.dynamicIsland} />
        
        {/* Screen Content */}
        <View style={styles.screen}>
          <App />
        </View>
        
        {/* Home Indicator */}
        <View style={styles.homeIndicatorContainer}>
          <View style={styles.homeIndicator} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh' as any,
  },
  phoneFrame: {
    width: 393,
    height: 852,
    backgroundColor: '#000000',
    borderRadius: 55,
    borderWidth: 12,
    borderColor: '#2a2a2a',
    overflow: 'hidden',
    position: 'relative',
    // Shadow for depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 40,
    elevation: 20,
  },
  dynamicIsland: {
    position: 'absolute',
    top: 12,
    left: '50%',
    marginLeft: -62,
    width: 124,
    height: 36,
    backgroundColor: '#000000',
    borderRadius: 20,
    zIndex: 10,
  },
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  homeIndicatorContainer: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#ffffff',
    borderRadius: 3,
    opacity: 0.6,
  },
});

export default PhoneFrame;
