import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './MenuCard.styles';

export const MenuCard = ({ icon, title, subtitle, onPress, backgroundColor, noShadow }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        backgroundColor && { backgroundColor },
        noShadow && styles.noShadow
      ]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
    </TouchableOpacity>
  );
};

