import 'dotenv/config';

import fetch from 'node-fetch';

const BASE_URL = 'https://api.figma.com/v1/';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;

if (!FIGMA_TOKEN) {
  throw new Error('FIGMA_TOKEN is not set');
}

const getUrl = (path: string) => BASE_URL + path.replace(/^\/+/, '');

/**
 * @param token See {@link https://www.figma.com/developers/api#access-tokens}
 */
export const figmaApi = (token: string) => {
  const headers = {
    'X-FIGMA-TOKEN': token,
  };

  const get = async <T = any>(url: string): Promise<T> => {
    const response = await fetch(getUrl(url), { headers });
    return response.json() as Promise<T>;
  };

  return {
    get,
  };
};

/**
 *
 * @deprecated Enterprise plan only
 * @param scope
 * @returns
 */
export const getVariables = async (
  fileKey: string,
  scope: 'local' | 'published' = 'published'
) => {
  const { get } = figmaApi(FIGMA_TOKEN);
  return await get<Record<string, any>>(`/files/${fileKey}/variables/${scope}`);
};
