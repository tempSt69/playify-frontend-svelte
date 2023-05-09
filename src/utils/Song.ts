import type Song from '../types/Song';

export const createStreamUrl = (id: string): string => {
  return `http://localhost:3000/song/${id}/stream`;
};

export const getMoveIndex = (
  move: number,
  actualSong: Song,
  songsList: Song[]
) => {
  let actualIndex;
  switch (move) {
    case -1:
      actualIndex = songsList!
        .map((song: Song) => song._id)
        .indexOf(actualSong._id!);
      return actualIndex == 0 ? songsList!.length - 1 : actualIndex - 1;
    default:
      actualIndex = songsList!
        .map((song: Song) => song._id)
        .indexOf(actualSong._id!);
      return actualIndex == songsList!.length - 1 ? 0 : actualIndex + 1;
  }
};
