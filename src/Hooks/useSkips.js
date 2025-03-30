import { useState, useEffect } from 'react';
import { fetchSkips } from '../Services/skipService';

const useSkips = (postcode = 'NR32', area = 'Lowestoft') => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSkips = async () => {
      try {
        const data = await fetchSkips(postcode, area);
        setSkips(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getSkips();
  }, [postcode, area]);

  return { skips, loading, error };
};

export default useSkips;
