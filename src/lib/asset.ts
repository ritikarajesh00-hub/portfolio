/**
 * next/image and next/link prefix `basePath` automatically; a hand-written
 * <img> tag does not. Any raw reference into /public must go through this
 * helper, or it 404s as soon as the site is served from /portfolio instead of
 * the domain root.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
