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

export const insertSong = async (
  song: Omit<Omit<Song, '_id'>, 'trackUrl' | 'trackType'> & { file: File }
) => {
  let formData = new FormData();
  formData.append('name', song.name);
  formData.append('duration', song.duration.toString());
  formData.append('artist[_id]', song.artist._id);
  formData.append('artist[cover]', song.artist.cover);
  formData.append('artist[name]', song.artist.name);
  formData.append('song', song.file);

  for (var pair of formData.entries()) {
    console.log(pair[0] + ', ' + pair[1]);
  }

  const response = await fetch(`http://localhost:3000/song`, {
    method: 'POST',
    body: formData,
    // headers: { 'Content-Type': 'multipart/form-data' },
  });
  const data: any = await response.json();
  console.log(data);
};
