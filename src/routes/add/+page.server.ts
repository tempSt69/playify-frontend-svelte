import { getAllArtists } from '../../services/Artist';
import type { PageServerLoad } from './$types';

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async () => await getAllArtists();
