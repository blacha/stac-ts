# stac-ts

Typescript typings for [SpatioTemporal Asset Catalogs](https://stacspec.org/)


```typescript

import type {Catalog} from 'stac-ts';

const catalog: Catalog = {
  stac_version: '1.0.0-beta.2',
  id: 'NAIP',
  description: 'Catalog of NAIP Imagery',
  links: [
    { rel: 'self', href: 'https://www.fsa.usda.gov/naip/catalog.json' },
    { rel: 'child', href: 'https://www.fsa.usda.gov/naip/30087/catalog.json' },
    { rel: 'root', href: 'https://www.fsa.usda.gov/catalog.json' },
  ],
}
```