import type Artist from '../types/Artist';

export const getAllArtists = async () => {
  try {
    const response = await fetch(`http://localhost:3000/artist`, {
      method: 'GET',
    });

    const data: Artist[] = await response.json();

    return { artists: data };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
    return { error: error };
  }
};
