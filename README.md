# stac-ts

Typescript typings for [SpatioTemporal Asset Catalogs](https://stacspec.org/)

## Catalogs
```typescript
import type { StacCatalog } from 'stac-ts';

const catalog: StacCatalog = {
  stac_version: '1.0.0',
  type: 'Catalog',
  id: 'NAIP',
  description: 'Catalog of NAIP Imagery',
  links: [
    { rel: 'self', href: 'https://example.com/naip/catalog.json' },
    { rel: 'child', href: 'https://example.com/naip/30087/catalog.json' },
    { rel: 'root', href: 'https://example.com/catalog.json' },
  ],
};
```

## Collections

```typescript
import { StacItem } from 'stac-ts';

/** From s3://nz-imagery/catalog.json */
export const LinzCatalog: StacCatalog = {
  stac_version: '1.0.0',
  type: 'Catalog',
  id: 'nz-imagery',
  description:
    "Toitū Te Whenua Land Information New Zealand ...",
  links: [
    { rel: 'self', href: 'https://nz-imagery.s3.ap-southeast-2.amazonaws.com/catalog.json' },
    { rel: 'root', href: './catalog.json' },
    {
      rel: 'child',
      href: './auckland/auckland_2010-2011_0.125m/rgb/2193/collection.json',
      title: 'Auckland 0.125m Urban Aerial Photos (2010-2011)',
      'file:checksum': '12209d1ba07a902b1b5a8a7049d51195e0e7d97e388fb3e0a6e1f988b198bf1f69cc',
      'file:size': 387936,
    },
  ],
  stac_extensions: ['https://stac-extensions.github.io/file/v2.1.0/schema.json'],
};

```

## Items

```typescript
import { StacItem } from 'stac-ts';

export const SimpleItem: StacItem = {
  stac_version: '1.0.0',
  stac_extensions: [],
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
  links: [
    {
      rel: 'collection',
      href: './collection.json',
      type: 'application/json',
      title: 'Simple Example Collection',
    },
    {
      rel: 'root',
      href: './collection.json',
      type: 'application/json',
      title: 'Simple Example Collection',
    },
    {
      rel: 'parent',
      href: './collection.json',
      type: 'application/json',
      title: 'Simple Example Collection',
    },
  ],
  assets: {
    visual: {
      href: 'https://storage.googleapis.com/open-cogs/stac-examples/20201211_223832_CS2.tif',
      type: 'image/tiff; application=geotiff; profile=cloud-optimized',
      title: '3-Band Visual',
      roles: ['visual'],
    },
    thumbnail: {
      href: 'https://storage.googleapis.com/open-cogs/stac-examples/20201211_223832_CS2.jpg',
      title: 'Thumbnail',
      type: 'image/jpeg',
      roles: ['thumbnail'],
    },
  },
};
```