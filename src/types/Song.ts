export default interface Song {
  _id: string;
  name: string;
  artist: {
    _id: string;
    name: string;
    cover: string;
  };
  duration: number;
  trackUrl: string;
  trackType:string;
}
