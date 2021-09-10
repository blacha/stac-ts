import { StacCatalog } from '../types';

/** @see ./stac-spec/catalog-spec/examples/catalog.json */
export const CatalogExample: StacCatalog = {
  stac_version: '1.0.0',
  type: 'Catalog',
  id: 'NAIP',
  description: 'Catalog of NAIP Imagery',
  links: [
    { rel: 'self', href: 'https://www.fsa.usda.gov/naip/catalog.json' },
    { rel: 'child', href: 'https://www.fsa.usda.gov/naip/30087/catalog.json' },
    { rel: 'root', href: 'https://www.fsa.usda.gov/catalog.json' },
  ],
};

export const CatalogItemsExample: StacCatalog = {
  stac_version: '1.0.0',
  type: 'Catalog',
  id: 'hurricane-harvey-0831',
  title: 'Hurricane Harvey 08-31-2017',
  description: 'Planet Scenes and Composites for Hurricane Harvey on Aug 31, 2017',
  links: [
    {
      rel: 'self',
      href: 'https://storage.googleapis.com/pdd-stac/disasters/hurricane-harvey/0831/catalog.json',
    },
    {
      rel: 'root',
      href: '../../catalog.json',
    },
    {
      rel: 'parent',
      href: '../catalog.json',
    },
    {
      rel: 'item',
      href: '20170831_172754_101c.json',
      title: 'Planetscope Scene 20170831_172754_101c',
    },
    {
      rel: 'item',
      href: '20170831_195552_SS02.json',
      title: 'SkySat Collect 20170831_195552_SS02',
    },
    {
      rel: 'item',
      href: '20170831_195425_SS02.json',
      title: 'SkySat Collect 20170831_195425_SS02',
    },
    {
      rel: 'item',
      href: '20170831_162740_ssc1d1.json',
      title: 'SkySat Collect 20170831_162740_ssc1d1',
    },
    {
      rel: 'item',
      href: 'Houston-East-20170831-103f-100d-0f4f-RGB.json',
      title: 'Houston East Composite August 31, 2017',
    },
  ],
};

export const ExampleCatalog: StacCatalog = {
  id: 'examples',
  type: 'Catalog',
  title: 'Example Catalog',
  stac_version: '1.0.0',
  description:
    'This catalog is a simple demonstration of an example catalog that is used to organize a hierarchy of collections and their items.',
  links: [
    {
      rel: 'root',
      href: './catalog.json',
      type: 'application/json',
    },
    {
      rel: 'child',
      href: './extensions-collection/collection.json',
      type: 'application/json',
      title: 'Collection Demonstrating STAC Extensions',
    },
    {
      rel: 'child',
      href: './collection-only/collection.json',
      type: 'application/json',
      title: 'Collection with no items (standalone)',
    },
    {
      rel: 'child',
      href: './collection-only/collection-with-schemas.json',
      type: 'application/json',
      title: 'Collection with no items (standalone with JSON Schemas)',
    },
    {
      rel: 'item',
      href: './collectionless-item.json',
      type: 'application/json',
      title: 'Collection with no items (standalone)',
    },
    {
      rel: 'self',
      href: 'https://raw.githubusercontent.com/radiantearth/stac-spec/v1.0.0/examples/catalog.json',
      type: 'application/json',
    },
  ],
};
