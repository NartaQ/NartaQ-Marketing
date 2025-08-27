import { defineLive } from "next-sanity";
import { client } from './client'

// For now, we'll use basic client - you can add live content later with an API token
export const { sanityFetch, SanityLive } = defineLive({ 
  client: client,
  serverToken: process.env.SANITY_API_READ_TOKEN,
  browserToken: process.env.SANITY_API_READ_TOKEN,
});
