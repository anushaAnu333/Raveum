import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { 
  Header, 
  InfoCard, 
  PropertyCard, 
  TestimonialCard, 
  MenuCard, 
  SectionHeader 
} from '../../components';
import { PROPERTIES, TESTIMONIALS } from '../../constants';
import { styles } from './HomeScreen.styles';

const CARD_WIDTH = 300;
const CARD_MARGIN = 16;
const SCREEN_WIDTH = Dimensions.get('window').width;

export const HomeScreen = () => {
  const propertyScrollRef = useRef(null);
  const testimonialScrollRef = useRef(null);
  const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [activePropertyCard, setActivePropertyCard] = useState(0);

  const handlePropertyScroll = (direction) => {
    const newIndex = direction === 'next' 
      ? Math.min(activePropertyCard + 1, PROPERTIES.length - 1)
      : Math.max(activePropertyCard - 1, 0);
    
    setActivePropertyCard(newIndex);
    setCurrentPropertyIndex(newIndex);
  };

  const handlePropertyCardPress = () => {
    const nextIndex = (activePropertyCard + 1) % PROPERTIES.length;
    setActivePropertyCard(nextIndex);
    setCurrentPropertyIndex(nextIndex);
  };

  const handleTestimonialScroll = (direction) => {
    if (testimonialScrollRef.current) {
      const newIndex = direction === 'next' 
        ? Math.min(currentTestimonialIndex + 1, TESTIMONIALS.length - 1)
        : Math.max(currentTestimonialIndex - 1, 0);
      
      testimonialScrollRef.current.scrollToIndex({
        index: newIndex,
        animated: true,
      });
      setCurrentTestimonialIndex(newIndex);
    }
  };

  const onPropertyViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentPropertyIndex(viewableItems[0].index || 0);
    }
  }).current;

  const onTestimonialViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentTestimonialIndex(viewableItems[0].index || 0);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderPropertyCard = ({ item }) => (
    <PropertyCard
      image={item.image}
      title={item.title}
      location={item.location}
      price={item.price}
      capRate={item.capRate}
      holdPeriod={item.holdPeriod}
      rentalYield={item.rentalYield}
      isEarlyAccess={item.isEarlyAccess}
      onPress={() => console.log(`Property ${item.title} pressed`)}
    />
  );

  const getItemLayout = (data, index) => ({
    length: CARD_WIDTH + CARD_MARGIN,
    offset: (CARD_WIDTH + CARD_MARGIN) * index,
    index,
  });

  const getTestimonialItemLayout = (data, index) => ({
    length: SCREEN_WIDTH - 32,
    offset: (SCREEN_WIDTH - 32) * index,
    index,
  });

  const renderTestimonialCard = ({ item }) => (
    <View style={styles.testimonialCardWrapper}>
      <TestimonialCard
        rating={item.rating}
        source={item.source}
        review={item.review}
        author={item.author}
        date={item.date}
        country={item.country}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header 
        title="Raveum" 
        onSettingsPress={() => console.log('Settings pressed')}
        onProfilePress={() => console.log('Profile pressed')}
      />
      
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>
            Invest in <Text style={styles.heroHighlight}>LOS ANGELES</Text>
          </Text>
          <Text style={styles.heroTitle}>from anywhere</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.heroSubtitle}>Learn more about raveum</Text>
          </TouchableOpacity>
        </View>

        {/* Info Cards Section */}
        <View style={styles.infoSection}>
          <InfoCard
            icon="help-circle-outline"
            title="How it Works?"
            subtitle="Begin Your Investing Journey"
            content="Raveum makes real estate investing simple and accessible. Browse properties, invest fractionally, and start building your real estate portfolio with as little as $100. Track your investments, receive dividends, and grow your wealth through secure, verified properties."
            onPress={() => console.log('How it works pressed')}
          />
          <InfoCard
            icon="business-outline"
            title="Why fractionalized U.S. Property?"
            subtitle="Smaller shares, bigger opportunities."
            content="Fractional ownership allows you to invest in high-value U.S. properties without needing large capital. Diversify your portfolio across multiple properties, enjoy lower entry barriers, and access institutional-grade real estate investments that were previously available only to large investors."
            onPress={() => console.log('Why fractionalized pressed')}
          />
          <InfoCard
            icon="bar-chart-outline"
            title="Why Invest with Raveum?"
            subtitle="Secure global real estate."
            content="Raveum is SEC & IR compliant, offering 100% secure transactions. Our platform provides transparent investment opportunities, detailed property analytics, regular dividend distributions, and professional property management. Invest with confidence in verified, income-generating real estate."
            onPress={() => console.log('Why invest pressed')}
          />
        </View>

        {/* Trending Properties Section */}
        <View style={styles.section}>
          <SectionHeader 
            title="Trending properties" 
          />
          <View style={styles.propertyCardsContainer}>
            {PROPERTIES.map((item, index) => {
              // Calculate the position of this card relative to the active card
              let relativePosition = index - activePropertyCard;
              if (relativePosition < 0) {
                relativePosition += PROPERTIES.length;
              }
              
              return (
                <View 
                  key={item.id} 
                  style={[
                    styles.propertyCardWrapper,
                    { 
                      zIndex: index === activePropertyCard ? 100 : PROPERTIES.length - relativePosition,
                      right: relativePosition * 30,
                      transform: [
                        { scale: index === activePropertyCard ? 1 : 0.95 }
                      ],
                    }
                  ]}
                >
              
                <PropertyCard
                  image={item.image}
                  title={item.title}
                  location={item.location}
                  price={item.price}
                  capRate={item.capRate}
                  holdPeriod={item.holdPeriod}
                  rentalYield={item.rentalYield}
                  isEarlyAccess={item.isEarlyAccess}
                  onPress={handlePropertyCardPress}
                />
              </View>
              );
            })}
          </View>
          
          {/* Pagination Dots */}
          <View style={styles.paginationContainer}>
            {PROPERTIES.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  index === currentPropertyIndex && styles.paginationDotActive,
                ]}
              />
            ))}
          </View>
        </View>

        {/* Testimonial Section */}
        <View style={styles.section}>
          <SectionHeader 
            title="What our clients say" 
            showNavigation={true}
            onPrevPress={() => handleTestimonialScroll('prev')}
            onNextPress={() => handleTestimonialScroll('next')}
          />
          <FlatList
            ref={testimonialScrollRef}
            data={TESTIMONIALS}
            renderItem={renderTestimonialCard}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={SCREEN_WIDTH - 32}
            snapToAlignment="start"
            decelerationRate="fast"
            contentContainerStyle={styles.testimonialScrollContent}
            onViewableItemsChanged={onTestimonialViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
            getItemLayout={getTestimonialItemLayout}
          />
          
         
        </View>

        {/* Discover More Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Discover more</Text>
          <MenuCard
            icon="📰"
            title="Articles"
            subtitle="Insights to guide your journey"
            onPress={() => console.log('Articles pressed')}
          />
          <MenuCard
            icon="💰"
            title="Wealth"
            subtitle="Dollar Earnings Secure Wealth"
            onPress={() => console.log('Wealth pressed')}
          />
          <MenuCard
            icon="🛡️"
            title="Safe Investment"
            subtitle="See our Security Measures"
            onPress={() => console.log('Safe Investment pressed')}
          />
        </View>

        {/* Your Finances Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your finances</Text>
          <MenuCard
            icon="🎲"
            title="Investments"
            subtitle="See all of your investments"
            backgroundColor="#F5F7FA"
            noShadow
            onPress={() => console.log('Investments pressed')}
          />
          <MenuCard
            icon="📊"
            title="Dividends & Yields"
            subtitle="Track your earnings & returns"
            backgroundColor="#F5F7FA"
            noShadow
            onPress={() => console.log('Dividends pressed')}
          />
          <MenuCard
            icon="📈"
            title="My Portfolio"
            subtitle="Your investments at a glance"
            backgroundColor="#F5F7FA"
            noShadow
            onPress={() => console.log('Portfolio pressed')}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            View our terms of services and privacy policy.
          </Text>
          <View style={styles.footerLinks}>
            <Text style={styles.footerLink}>🏛️ Equal Opportunity Partner</Text>
            <Text style={styles.footerLink}>📋 SEC & IR Compliant</Text>
            <Text style={styles.footerLink}>📱 100% Secure</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

