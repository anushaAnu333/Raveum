import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.base,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
    marginBottom: spacing.lg,
  },
  heroTitle: {
    fontSize: typography.sizes['4xl'],
    fontWeight: typography.weights.bold,
    color: colors.text.primary,
    lineHeight: typography.sizes['4xl'] * 1.2,
  },
  heroHighlight: {
    color: colors.primary,
  },
  heroSubtitle: {
    fontSize: typography.sizes.base,
    color: colors.text.secondary,
    marginTop: spacing.sm,
  },
  infoSection: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.base,
    marginBottom: spacing.xl,
  },
  section: {
    paddingHorizontal: spacing.base,
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    color: colors.text.primary,
    marginBottom: spacing.base,
  },
  propertyScrollContent: {
    paddingRight: spacing.base,
    paddingTop: spacing.sm,
    paddingBottom: spacing.base,
  },
  propertyCardsContainer: {
    height: 440,
    position: 'relative',
    marginBottom: spacing.base,
  },
  propertyCardWrapper: {
    position: 'absolute',
    top: 0,
    transition: 'all 0.3s ease',
  },
  testimonialScrollContent: {
    paddingTop: spacing.sm,
    paddingBottom: spacing.base,
  },
  testimonialCardWrapper: {
    width: Dimensions.get('window').width - 32,
    paddingRight: 0,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.base,
    gap: spacing.sm,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
  },
  paginationDotActive: {
    width: 24,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  footer: {
    paddingHorizontal: spacing.base,
    paddingTop: spacing.xl,
    paddingBottom: spacing['2xl'],
    alignItems: 'center',
    marginTop: spacing.base,
  },
  footerText: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.medium,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing.base,
  },
  footerLinks: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
  },
  footerLink: {
    fontSize: typography.sizes.xs,
    color: colors.text.secondary,
  },
});

