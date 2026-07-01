export function slugify(word: string): string {
  return word.split(' ').join('-').toLowerCase();
}
