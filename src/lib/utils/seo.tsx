import { SITE_URL } from '@/shared/constants';

export const generateCanonical = (path: string) => {
  return SITE_URL + path;
};
