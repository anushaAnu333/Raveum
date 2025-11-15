import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './PropertyCard.styles';

export const PropertyCard = ({ 
  image, 
  title, 
  location, 
  price, 
  capRate, 
  holdPeriod, 
  rentalYield,
  isEarlyAccess,
  onPress 
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        {isEarlyAccess && (
          <View style={styles.badgeContainer}>
            <View style={styles.badge}>
              <Ionicons name="flash" size={16} color="#10B981" />
              <Text style={styles.badgeText}>Early Access</Text>
            </View>
          </View>
        )}
        
        <View style={styles.overlay}>
          <View style={styles.contentRow}>
            <TouchableOpacity 
              style={styles.locationBadge}
              onPress={onPress}
              activeOpacity={0.7}
            >
              <View style={styles.arrowIcon}>
                <Ionicons name="arrow-forward" size={20} color="#1A1A1A" style={{ transform: [{ rotate: '-45deg' }] }} />
              </View>
            </TouchableOpacity>
            
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.location}>{location}</Text>
              <Text style={styles.price}>{price}</Text>
              
              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{capRate}</Text>
                  <Text style={styles.statLabel}>Cap Rate</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{holdPeriod}</Text>
                  <Text style={styles.statLabel}>Hold Period</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{rentalYield}</Text>
                  <Text style={styles.statLabel}>Rental Yield</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

