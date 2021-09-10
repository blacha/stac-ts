import { StacCollection } from '../types';

export const LandSatCollection: StacCollection = {
  stac_version: '1.0.0',
  stac_extensions: [],
  type: 'Collection',
  id: 'landsat-8-l1',
  title: 'Landsat 8 L1',
  description:
    'Landat 8 imagery radiometrically calibrated and orthorectified using gound points and Digital Elevation Model (DEM) data to correct relief displacement.',
  keywords: ['landsat'],
  extent: {
    spatial: {
      bbox: [[-180, -90, 180, 90]],
    },
    temporal: {
      interval: [['2013-06-01T00:00:00Z', null]],
    },
  },
  providers: [
    {
      name: 'USGS',
      url: 'https://landsat.usgs.gov/',
      roles: ['producer', 'licensor'],
    },
    {
      name: 'Planet Labs',
      url: 'https://github.com/landsat-pds/landsat_ingestor',
      roles: ['processor'],
    },
    {
      name: 'AWS',
      url: 'https://landsatonaws.com/',
      roles: ['host'],
    },
    {
      name: 'Development Seed',
      url: 'https://developmentseed.org/',
      roles: ['processor'],
    },
  ],
  license: 'PDDL-1.0',
  summaries: {
    platform: ['landsat-8'],
    instruments: ['oli', 'tirs'],
    gsd: [30],
    'eo:bands': [
      {
        name: 'B1',
        common_name: 'coastal',
        center_wavelength: 0.44,
        full_width_half_max: 0.02,
      },
      {
        name: 'B2',
        common_name: 'blue',
        center_wavelength: 0.48,
        full_width_half_max: 0.06,
      },
      {
        name: 'B3',
        common_name: 'green',
        center_wavelength: 0.56,
        full_width_half_max: 0.06,
      },
      {
        name: 'B4',
        common_name: 'red',
        center_wavelength: 0.65,
        full_width_half_max: 0.04,
      },
      {
        name: 'B5',
        common_name: 'nir',
        center_wavelength: 0.86,
        full_width_half_max: 0.03,
      },
      {
        name: 'B6',
        common_name: 'swir16',
        center_wavelength: 1.6,
        full_width_half_max: 0.08,
      },
      {
        name: 'B7',
        common_name: 'swir22',
        center_wavelength: 2.2,
        full_width_half_max: 0.2,
      },
      {
        name: 'B8',
        common_name: 'pan',
        center_wavelength: 0.59,
        full_width_half_max: 0.18,
      },
      {
        name: 'B9',
        common_name: 'cirrus',
        center_wavelength: 1.37,
        full_width_half_max: 0.02,
      },
      {
        name: 'B10',
        common_name: 'lwir11',
        center_wavelength: 10.9,
        full_width_half_max: 0.8,
      },
      {
        name: 'B11',
        common_name: 'lwir12',
        center_wavelength: 12,
        full_width_half_max: 1,
      },
    ],
  },
  links: [
    {
      rel: 'self',
      href: 'https://landsat-stac.s3.amazonaws.com/landsat-8-l1/catalog.json',
    },
    {
      rel: 'parent',
      href: 'https://landsat-stac.s3.amazonaws.com/catalog.json',
    },
    {
      rel: 'root',
      href: 'https://landsat-stac.s3.amazonaws.com/catalog.json',
    },
    {
      rel: 'child',
      href: 'https://landsat-stac.s3.amazonaws.com/landsat-8-l1/paths/catalog.json',
    },
  ],
};

export const SimpleCollection: StacCollection = {
  id: 'simple-collection',
  type: 'Collection',
  stac_extensions: [
    'https://stac-extensions.github.io/eo/v1.0.0/schema.json',
    'https://stac-extensions.github.io/projection/v1.0.0/schema.json',
    'https://stac-extensions.github.io/view/v1.0.0/schema.json',
  ],
  stac_version: '1.0.0',
  description: 'A simple collection demonstrating core catalog fields with links to a couple of items',
  title: 'Simple Example Collection',
  providers: [
    {
      name: 'Remote Data, Inc',
      description: 'Producers of awesome spatiotemporal assets',
      roles: ['producer', 'processor'],
      url: 'http://remotedata.io',
    },
  ],
  extent: {
    spatial: {
      bbox: [[172.91173669923782, 1.3438851951615003, 172.95469614953714, 1.3690476620161975]],
    },
    temporal: {
      interval: [['2020-12-11T22:38:32.125Z', '2020-12-14T18:02:31.437Z']],
    },
  },
  license: 'CC-BY-4.0',
  summaries: {
    platform: ['cool_sat1', 'cool_sat2'],
    constellation: ['ion'],
    instruments: ['cool_sensor_v1', 'cool_sensor_v2'],
    gsd: {
      minimum: 0.512,
      maximum: 0.66,
    },
    'eo:cloud_cover': {
      minimum: 1.2,
      maximum: 1.2,
    },
    'proj:epsg': {
      minimum: 32659,
      maximum: 32659,
    },
    'view:sun_elevation': {
      minimum: 54.9,
      maximum: 54.9,
    },
    'view:off_nadir': {
      minimum: 3.8,
      maximum: 3.8,
    },
    'view:sun_azimuth': {
      minimum: 135.7,
      maximum: 135.7,
    },
  },
  links: [
    {
      rel: 'root',
      href: './collection.json',
      type: 'application/json',
      title: 'Simple Example Collection',
    },
    {
      rel: 'item',
      href: './simple-item.json',
      type: 'application/geo+json',
      title: 'Simple Item',
    },
    {
      rel: 'item',
      href: './core-item.json',
      type: 'application/geo+json',
      title: 'Core Item',
    },
    {
      rel: 'item',
      href: './extended-item.json',
      type: 'application/geo+json',
      title: 'Extended Item',
    },
    {
      rel: 'self',
      href: 'https://raw.githubusercontent.com/radiantearth/stac-spec/v1.0.0/examples/collection.json',
      type: 'application/json',
    },
  ],
};
