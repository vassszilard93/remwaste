export const fetchSkips = async (postcode = 'NR32', area = 'Lowestoft') => {
    const response = await fetch(
      `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch skip data');
    }
  
    return await response.json();
  };
  