import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './SectionHeader.styles';

export const SectionHeader = ({ title, showNavigation, onPrevPress, onNextPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {showNavigation && (
        <View style={styles.navigationContainer}>
          <TouchableOpacity 
            style={styles.navButton} 
            onPress={onPrevPress}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-back" size={20} color="#1A1A1A" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.navButton} 
            onPress={onNextPress}
            activeOpacity={0.7}
          >
            <Ionicons name="chevron-forward" size={20} color="#1A1A1A" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

