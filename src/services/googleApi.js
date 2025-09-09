// import { useJsApiLoader } from '@react-google-maps/api';

// const libraries = ['places'];

const useGoogleApi = () => {
  // Mock the API loading state
  const isLoaded = true;
  const loadError = null;

  const getDistanceMatrix = async (origin, destination) => {
    // Return a mock response to avoid errors
    console.log('Mocking getDistanceMatrix call for:', origin, destination);
    return Promise.resolve({
      rows: [{ elements: [{ distance: { value: 10000 } }] }],
    });
  };

  return { isLoaded, loadError, getDistanceMatrix };
};

export default useGoogleApi;
