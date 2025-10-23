const MAX_OVERFLOW = 99;

function getOverflowCountText(overflowCount: number): string {
  return overflowCount < MAX_OVERFLOW ? `+${overflowCount}` : `${MAX_OVERFLOW}+`;
}

export { getOverflowCountText };
