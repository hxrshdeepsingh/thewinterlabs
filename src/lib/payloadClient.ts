// lib/payloadClient.ts
import payload from 'payload';
import path from 'path';

let initialized = false;

export const initPayload = async () => {
  if (!initialized) {
    await payload.init({
      secret: process.env.PAYLOAD_SECRET || '',
      local: true,
      config: path.resolve(__dirname, '../payload.config.ts'),
    });
    initialized = true;
  }

  return payload;
};
