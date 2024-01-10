import { useSanityClient } from "@sanity/astro";
import groq from "groq";

export async function getDogs() {
  try {
    const dogsData = await useSanityClient().fetch(
      groq`*[_type == "dogs" && defined(slug.current)] | order(_createdAt desc) {
        _createdAt,
        name,
        sex,
        good,
        slug,
        photo {
          asset->{
            _id,
            url
          },
          alt
        }
      }`
    );
    return dogsData;
  } catch (error) {
    console.error("We got no dogs:", error);
    return [];
  }
}

export async function getDogBySlug(slug) {
  try {
    const dogData = await useSanityClient().fetch(
      groq`*[_type == "dogs" && slug.current == $slug] | order(_createdAt desc) {
        _createdAt,
        name,
        sex,
        breed,
        good,
        bio,
        slug,
        photo {
          asset->{
            _id,
            url
          },
          alt
        }
      }[0]`, // [0] to get the first item of the array
      { slug }
    );
    return dogData;
  } catch (error) {
    console.error("Error fetching dog:", error);
    return null;
  }
}