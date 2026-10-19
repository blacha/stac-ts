import type { StacCollection, StacCollectionCollection, StacItem, StacItemCollection } from '../types/index.js';

const SimpleItem: StacItem = {
  stac_version: '1.0.0',
  type: 'Feature',
  id: '20201211_223832_CS2',
  bbox: [172.91173669923782, 1.3438851951615003, 172.95469614953714, 1.3690476620161975],
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [172.91173669923782, 1.3438851951615003],
        [172.95469614953714, 1.3438851951615003],
        [172.95469614953714, 1.3690476620161975],
        [172.91173669923782, 1.3690476620161975],
        [172.91173669923782, 1.3438851951615003],
      ],
    ],
  },
  properties: {
    datetime: '2020-12-11T22:38:32.125000Z',
  },
  collection: 'simple-collection',
  links: [],
  assets: {},
};

export const SimpleItemCollection: StacItemCollection = {
  type: 'FeatureCollection',
  features: [SimpleItem],
  links: [
    {
      rel: 'self',
      href: './itemcollection.json',
      type: 'application/geo+json',
    },
  ],
  numberMatched: 1,
  numberReturned: 1,
};

const SimpleCollection: StacCollection = {
  stac_version: '1.0.0',
  type: 'Collection',
  id: 'simple-collection',
  description: 'A simple collection',
  license: 'CC-BY-4.0',
  extent: {
    spatial: {
      bbox: [[172.91173669923782, 1.3438851951615003, 172.95469614953714, 1.3690476620161975]],
    },
    temporal: {
      interval: [['2020-12-11T22:38:32.125000Z', null]],
    },
  },
  links: [],
};

export const SimpleCollectionCollection: StacCollectionCollection = {
  type: 'Collections',
  collections: [SimpleCollection],
  links: [
    {
      rel: 'self',
      href: './collections.json',
      type: 'application/json',
    },
  ],
  numberMatched: 1,
  numberReturned: 1,
};
