import type Artist from './Artist';

export default interface Song {
  _id: string;
  name: string;
  artist: Artist;
  duration: number;
  trackUrl: string;
  trackType: string;
}
