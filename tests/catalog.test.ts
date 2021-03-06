import { Catalog } from '../types';

/** @see ./stac-spec/catalog-spec/examples/catalog.json */
export const CatalogExample: Catalog = {
  stac_version: '1.0.0-beta.2',
  id: 'NAIP',
  description: 'Catalog of NAIP Imagery',
  links: [
    { rel: 'self', href: 'https://www.fsa.usda.gov/naip/catalog.json' },
    { rel: 'child', href: 'https://www.fsa.usda.gov/naip/30087/catalog.json' },
    { rel: 'root', href: 'https://www.fsa.usda.gov/catalog.json' },
  ],
};

export const CatalogItemsExample: Catalog = {
  stac_version: '1.0.0-beta.2',
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
