import type Song from '../types/Song';

export const getAllSongs = async () => {
  try {
    const response = await fetch(`http://localhost:3000/song`, {
      method: 'GET',
    });

    const data: Song[] = await response.json();

    return { songs: data };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
    return { error: error };
  }
};

export const searchSongs = async (searchString: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/song/search/${searchString}`,
      {
        method: 'GET',
      }
    );

    const data: Song[] = await response.json();

    return { songs: data };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
    return { error: error };
  }
};
