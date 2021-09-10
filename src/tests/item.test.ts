import { StacItem } from '../types';

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

export const ExtendedItem: StacItem = {
  stac_version: '1.0.0',
  stac_extensions: [
    'https://stac-extensions.github.io/eo/v1.0.0/schema.json',
    'https://stac-extensions.github.io/projection/v1.0.0/schema.json',
    'https://stac-extensions.github.io/scientific/v1.0.0/schema.json',
    'https://stac-extensions.github.io/view/v1.0.0/schema.json',
    'https://stac-extensions.github.io/remote-data/v1.0.0/schema.json',
  ],
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
    title: 'Extended Item',
    description: 'A sample STAC Item that includes a variety of examples from the stable extensions',
    datetime: '2020-12-14T18:02:31.437000Z',
    created: '2020-12-15T01:48:13.725Z',
    updated: '2020-12-15T01:48:13.725Z',
    platform: 'cool_sat2',
    instruments: ['cool_sensor_v2'],
    gsd: 0.66,
    'eo:cloud_cover': 1.2,
    'proj:epsg': 32659,
    'proj:shape': [5558, 9559],
    'proj:transform': [0.5, 0, 712710, 0, -0.5, 151406, 0, 0, 1],
    'view:sun_elevation': 54.9,
    'view:off_nadir': 3.8,
    'view:sun_azimuth': 135.7,
    'rd:type': 'scene',
    'rd:anomalous_pixels': 0.14,
    'rd:earth_sun_distance': 1.014156,
    'rd:sat_id': 'cool_sat2',
    'rd:product_level': 'LV3A',
    'sci:doi': '10.5061/dryad.s2v81.2/27.2',
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
    {
      rel: 'alternate',
      type: 'text/html',
      href: 'http://remotedata.io/catalog/20201211_223832_CS2/index.html',
      title: 'HTML version of this STAC Item',
    },
  ],
  assets: {
    analytic: {
      href: 'https://storage.googleapis.com/open-cogs/stac-examples/20201211_223832_CS2_analytic.tif',
      type: 'image/tiff; application=geotiff; profile=cloud-optimized',
      title: '4-Band Analytic',
      roles: ['data'],
      'eo:bands': [
        {
          name: 'band1',
          common_name: 'blue',
          center_wavelength: 470,
          full_width_half_max: 70,
        },
        {
          name: 'band2',
          common_name: 'green',
          center_wavelength: 560,
          full_width_half_max: 80,
        },
        {
          name: 'band3',
          common_name: 'red',
          center_wavelength: 645,
          full_width_half_max: 90,
        },
        {
          name: 'band4',
          common_name: 'nir',
          center_wavelength: 800,
          full_width_half_max: 152,
        },
      ],
    },
    thumbnail: {
      href: 'https://storage.googleapis.com/open-cogs/stac-examples/20201211_223832_CS2.jpg',
      title: 'Thumbnail',
      type: 'image/png',
      roles: ['thumbnail'],
    },
    visual: {
      href: 'https://storage.googleapis.com/open-cogs/stac-examples/20201211_223832_CS2.tif',
      type: 'image/tiff; application=geotiff; profile=cloud-optimized',
      title: '3-Band Visual',
      roles: ['visual'],
      'eo:bands': [
        {
          name: 'band3',
          common_name: 'red',
          center_wavelength: 645,
          full_width_half_max: 90,
        },
        {
          name: 'band2',
          common_name: 'green',
          center_wavelength: 560,
          full_width_half_max: 80,
        },
        {
          name: 'band1',
          common_name: 'blue',
          center_wavelength: 470,
          full_width_half_max: 70,
        },
      ],
    },
    udm: {
      href: 'https://storage.googleapis.com/open-cogs/stac-examples/20201211_223832_CS2_analytic_udm.tif',
      title: 'Unusable Data Mask',
      type: 'image/tiff; application=geotiff;',
    },
    'json-metadata': {
      href: 'http://remotedata.io/catalog/20201211_223832_CS2/extended-metadata.json',
      title: 'Extended Metadata',
      type: 'application/json',
      roles: ['metadata'],
    },
    ephemeris: {
      href: 'http://cool-sat.com/catalog/20201211_223832_CS2/20201211_223832_CS2.EPH',
      title: 'Satellite Ephemeris Metadata',
    },
  },
};

export const CoreItem: StacItem = {
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
    title: 'Core Item',
    description: 'A sample STAC Item that includes examples of all common metadata',
    datetime: null,
    start_datetime: '2020-12-11T22:38:32.125Z',
    end_datetime: '2020-12-11T22:38:32.327Z',
    created: '2020-12-12T01:48:13.725Z',
    updated: '2020-12-12T01:48:13.725Z',
    platform: 'cool_sat1',
    instruments: ['cool_sensor_v1'],
    constellation: 'ion',
    mission: 'collection 5624',
    gsd: 0.512,
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
    {
      rel: 'alternate',
      type: 'text/html',
      href: 'http://remotedata.io/catalog/20201211_223832_CS2/index.html',
      title: 'HTML version of this STAC Item',
    },
  ],
  assets: {
    analytic: {
      href: 'https://storage.googleapis.com/open-cogs/stac-examples/20201211_223832_CS2_analytic.tif',
      type: 'image/tiff; application=geotiff; profile=cloud-optimized',
      title: '4-Band Analytic',
      roles: ['data'],
    },
    thumbnail: {
      href: 'https://storage.googleapis.com/open-cogs/stac-examples/20201211_223832_CS2.jpg',
      title: 'Thumbnail',
      type: 'image/png',
      roles: ['thumbnail'],
    },
    visual: {
      href: 'https://storage.googleapis.com/open-cogs/stac-examples/20201211_223832_CS2.tif',
      type: 'image/tiff; application=geotiff; profile=cloud-optimized',
      title: '3-Band Visual',
      roles: ['visual'],
    },
    udm: {
      href: 'https://storage.googleapis.com/open-cogs/stac-examples/20201211_223832_CS2_analytic_udm.tif',
      title: 'Unusable Data Mask',
      type: 'image/tiff; application=geotiff;',
    },
    'json-metadata': {
      href: 'http://remotedata.io/catalog/20201211_223832_CS2/extended-metadata.json',
      title: 'Extended Metadata',
      type: 'application/json',
      roles: ['metadata'],
    },
    ephemeris: {
      href: 'http://cool-sat.com/catalog/20201211_223832_CS2/20201211_223832_CS2.EPH',
      title: 'Satellite Ephemeris Metadata',
    },
  },
};
