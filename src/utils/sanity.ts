import { useSanityClient } from "@sanity/astro";
import groq from "groq";

export async function getDogs(): Promise<Dogs[]> {
  try {
    const dogsData = await useSanityClient().fetch(
      groq`*[_type == "dogs" && defined(slug.current)] | order(_createdAt desc) {
        _createdAt,
        name,
        sex,
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
    console.log(dogsData);
    return dogsData;
  } catch (error) {
    console.error("We got no dogs:", error);
    return [];
  }
}

export async function getDogBySlug(slug: string): Promise<Dogs | null> {
  try {
    const dogData = await useSanityClient().fetch(
      groq`*[_type == "dogs" && slug.current == $slug] | order(_createdAt desc) {
        _createdAt,
        name,
        sex,
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
    console.log(dogData);
    return dogData;
  } catch (error) {
    console.error("Error fetching dog:", error);
    return null;
  }
}

export interface Dogs {
  _type: "dogs";
  _createdAt: string;
  name?: string;
  sex?: string;
  slug?: {
    current: string;
  };
  photo?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
}

