import WebringData from '../webring_data.json';
export { WebringData };

export type WebringEntry = (typeof WebringData)[number];

export function randomEntry() {
  const selectedIndex = Math.floor(Math.random() * WebringData.length);
  return WebringData[selectedIndex];
}

export function previous(id: string) {
  id = id.toLowerCase();

  if (id === 'main') {
    return WebringData[WebringData.length - 1];
  }

  let itemIndex = WebringData.findIndex((e) => e.id.toLowerCase() === id);

  if (itemIndex === -1) {
    return randomEntry();
  }

  itemIndex += WebringData.length - 1; // `length` is added to force the index to wrap around in case it goes negative. The `- 1` is what makes us go to the previous entry.
  return WebringData[itemIndex % WebringData.length];
}

export function next(id: string) {
  id = id.toLowerCase();

  if (id === 'main') {
    return WebringData[0];
  }

  let itemIndex = WebringData.findIndex((e) => e.id.toLowerCase() === id);

  if (itemIndex === -1) {
    return randomEntry();
  }

  itemIndex += 1;
  return WebringData[itemIndex % WebringData.length];
}
