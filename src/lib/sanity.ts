import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

export const client = createClient({
  projectId: 'y970ornb', // Replace with your Sanity project ID
  dataset: 'production',
  token: "sk0OfxxiUykClrMTInylufz4DtmzX1wTJyXcJDkG39REzkBECpmX1XYB5E9veJGAcpSdB7rspSaZPMd0SNfKDr78uDOEpJHdxpzxHBzqcJCIIatIAHv9nvPfA96OipXrRMd3VA9yNe0K8BwiHqAJV2Ck5PtMdKsXjriy68bKQ984dzvvlMju",
  useCdn: true,
  apiVersion: '2024-03-20',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any): ImageUrlBuilder {
  return builder.image(source);
}
