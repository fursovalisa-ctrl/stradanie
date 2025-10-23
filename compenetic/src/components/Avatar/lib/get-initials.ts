const LIMIT = 2;

export function getInitials(name: string) {
  const splitName = name.split(' ');

  if (splitName.length === 1) {
    return name.slice(0, LIMIT).toUpperCase();
  }

  return splitName
    .map((word) => word[0])
    .slice(0, LIMIT)
    .join('')
    .toUpperCase();
}
