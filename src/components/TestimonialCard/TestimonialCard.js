import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './TestimonialCard.styles';

export const TestimonialCard = ({ rating, source, review, author, date, country }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, index) => (
            <View key={index} style={styles.starWrapper}>
              <Ionicons 
                name={index < rating ? "star" : "star-outline"}
                size={16} 
                color="#FFFFFF"
              />
            </View>
          ))}
        </View>
        <Text style={styles.source}>{source}</Text>
      </View>
      
      <Text style={styles.review}>{review}</Text>
      
      <View style={styles.footer}>
        <View>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.country}>{country}</Text>
      </View>
    </View>
  );
};

