/**
 * App configuration
 * Add API endpoints, feature flags, and other configuration here
 */

export const config = {
  app: {
    name: 'Raveum',
    version: '1.0.0',
  },
  api: {
    baseUrl: process.env.API_BASE_URL || 'https://api.raveum.com',
    timeout: 30000,
  },
  features: {
    earlyAccess: true,
    testimonials: true,
    portfolio: true,
  },
};

