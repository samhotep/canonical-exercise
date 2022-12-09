const POSTS_URL =
  "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

// Simple HTTP Get
export default function fetchBlogPosts() {
  return fetch(POSTS_URL).then((response) => response.json());
}
