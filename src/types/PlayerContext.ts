import type { Writable } from 'svelte/store';
import type Song from './Song';

export interface PlayerContextType {
  playing: Writable<boolean>;
  audioRef?: Writable<HTMLAudioElement>;
  progressBarRef?: any;
  timeProgress?: Writable<number>;
  song?: Writable<Song>;
  pause?(): void;
  play?(): void;
  next?(): void;
  prev?(): void;
  selectSong(song: Song): void;
}
