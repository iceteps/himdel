import fs from 'fs/promises';
import crypto from 'crypto';
import path from 'path';

const CACHE_DIR = path.join(process.cwd(), '.cache');
const CACHE_TTL = 3600 * 1000; // 1 hour

export const cache = {
  get: async (key) => {
    const cachePath = path.join(CACHE_DIR, `${key}.json`);
    try {
      const data = await fs.readFile(cachePath, 'utf8');
      const { expires, value } = JSON.parse(data);
      return Date.now() < expires ? value : null;
    } catch {
      return null;
    }
  },
  set: async (key, value) => {
    await fs.mkdir(CACHE_DIR, { recursive: true });
    const cachePath = path.join(CACHE_DIR, `${key}.json`);
    await fs.writeFile(cachePath, JSON.stringify({
      expires: Date.now() + CACHE_TTL,
      value,
    }));
  },
};

export const getFileHash = async (filePath) => {
  const stats = await fs.stat(filePath);
  const content = await fs.readFile(filePath, 'utf8');
  return crypto
    .createHash('sha256')
    .update(content + stats.mtimeMs)
    .digest('hex');
};