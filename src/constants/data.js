const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT;
const host = process.env.HOST || '127.0.0.1';

export const FLATS_VIEW_ID = 'FLATS';
export const FLATS_ENDPOINT = '/api/v1/flats';
export const HOST = `http://${host}:${port}`;
