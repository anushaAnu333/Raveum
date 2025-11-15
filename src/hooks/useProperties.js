import { useState, useEffect } from 'react';
import { PROPERTIES } from '../constants';

/**
 * Custom hook for managing properties data
 * This can be extended to fetch from an API
 */
export const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      // Simulate API call - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setProperties(PROPERTIES);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const refreshProperties = () => {
    fetchProperties();
  };

  return {
    properties,
    loading,
    error,
    refreshProperties,
  };
};

