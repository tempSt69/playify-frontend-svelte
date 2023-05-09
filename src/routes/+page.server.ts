import { getAllSongs } from '../services/Song';
import type { PageServerLoad } from './$types';

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async () => await getAllSongs();
