# stac-ts

Typescript typings for [SpatioTemporal Asset Catalogs](https://stacspec.org/)

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
