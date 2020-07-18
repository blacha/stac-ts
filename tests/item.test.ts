import { Item } from '../types';

export const SampleExample: Item = {
  stac_version: '1.0.0-beta.2',
  stac_extensions: [],
  type: 'Feature',
  id: 'CS3-20160503_132130_04',
  bbox: [-122.59750209, 37.48803556, -122.2880486, 37.613537207],
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-122.308150179, 37.488035566],
        [-122.597502109, 37.538869539],
        [-122.576687533, 37.613537207],
        [-122.2880486, 37.562818007],
        [-122.308150179, 37.488035566],
      ],
    ],
  },
  properties: {
    datetime: '2016-05-03T13:21:30.040Z',
    collection: 'CS3',
  },
  links: [
    {
      rel: 'self',
      href: 'http://cool-sat.com/catalog/CS3-20160503_132130_04/CS3-20160503_132130_04.json',
    },
    {
      rel: 'collection',
      href: 'http://cool-sat.com/catalog.json',
    },
  ],
  assets: {
    analytic: {
      href: 'relative-path/to/analytic.tif',
      title: '4-Band Analytic',
    },
    thumbnail: {
      href: 'http://cool-sat.com/catalog/CS3-20160503_132130_04/thumbnail.png',
      title: 'Thumbnail',
      roles: ['thumbnail'],
    },
  },
};

export const SampleItemTwo: Item = {
  stac_version: '1.0.0-beta.2',
  stac_extensions: ['view', 'projection'],
  type: 'Feature',
  id: 'S2A_OPER_MSI_L2A_TL_SGS__20180524T190423_A015250_T26SKD_N02.08',
  links: [
    {
      rel: 'self',
      href: 's3://sentinel-s2-l2a-catalog/tiles/35/V/MK/2018/6/5/0/sentinel2-sample.json',
    },
    {
      rel: 'root',
      href: 's3://sentinel-s2-l2a-catalog/catalog.json',
    },
    {
      rel: 'collection',
      href: 's3://sentinel-s2-l2a-catalog/catalog.json',
    },
  ],
  bbox: [25.0815883093, 62.1306897126, 27.1935425597, 63.129387237],
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-105.160846396, 39.1656009422],
        [-104.947574355, 39.1750024943],
        [-104.949890373, 39.0512153242],
        [-105.161151214, 39.0436821016],
        [-105.160846396, 39.1656009422],
      ],
    ],
  },
  properties: {
    datetime: '2018-06-05T10:00:27Z',
    platform: 'sentinel-2',
    gsd: 10,
    'proj:epsg': 32635,
    'eo:cloud_cover': 88.459539,
    'view:sun_azimuth': 176.091667178268,
  },
  collection: 's2-l2a',
  assets: {
    metadata: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/metadata.xml',
      title: 'Tile metadata',
      type: 'application/xml',
      roles: ['metadata'],
    },
    tileInfo: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/tileInfo.json',
      title: 'Tile info',
      type: 'application/json',
    },
    productInfo: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/productInfo.json',
      title: 'Product info',
      type: 'application/json',
    },
    thumbnail: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/qi/L2A_PVI.jp2',
      title: 'True color thumbnail',
      type: 'image/jp2',
      roles: ['thumbnail'],
    },
    B02_10m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R10m/B02.jp2',
      title: 'Band 2 - Blue 0.490 (10m)',
      type: 'image/jp2',
    },
    B03_10m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R10m/B03.jp2',
      title: 'Band 3 - Green 0.560 (10m)',
      type: 'image/jp2',
    },
    B04_10m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R10m/B04.jp2',
      title: 'Band 4 - Red 0.665 (10m)',
      type: 'image/jp2',
    },
    B08_10m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R10m/B08.jp2',
      title: 'Band 8 - NIR 0.842 (10m)',
      type: 'image/jp2',
    },
    AOT_10m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R10m/AOT.jp2',
      title: 'Aerosol Optical Thickness (10m)',
      type: 'image/jp2',
    },
    TCI_10m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R10m/TCI.jp2',
      title: 'True Color Image (10m)',
      type: 'image/jp2',
    },
    WVP_10m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R10m/WVP.jp2',
      title: 'Water Vapor (10m)',
      type: 'image/jp2',
    },
    B02_20m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R20m/B02.jp2',
      title: 'Band 2 - Blue 0.490 (20m)',

      type: 'image/jp2',
    },
    B03_20m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R20m/B03.jp2',
      title: 'Band 3 - Green 0.560 (20m)',
      type: 'image/jp2',
    },
    B04_20m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R20m/B04.jp2',
      title: 'Band 4 - Red 0.665 (20m)',
      type: 'image/jp2',
    },
    B05_20m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R20m/B05.jp2',
      title: 'Band 5 - Vegetation Red Edge 0.705 (20m)',
      type: 'image/jp2',
    },
    B06_20m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R20m/B06.jp2',
      title: 'Band 6 - Vegetation Red Edge 0.740 (20m)',
      type: 'image/jp2',
    },
    B07_20m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R20m/B07.jp2',
      title: 'Band 7 - Vegetation Red Edge 0.783 (20m)',
      type: 'image/jp2',
    },
    B8A_20m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R20m/B8A.jp2',
      title: 'Band 8A - Narrow NIR 0.865 (20m)',
      type: 'image/jp2',
    },
    B11_20m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R20m/B11.jp2',
      title: 'Band 11 - SWIR 1.610 (20m)',
      type: 'image/jp2',
    },
    B12_20m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R20m/B12.jp2',
      title: 'Band 12 - SWIR 2.190 (20m)',
      type: 'image/jp2',
    },
    AOT_20m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R20m/AOT.jp2',
      title: 'Aerosol Optical Thickness (20m)',
      type: 'image/jp2',
    },
    SCL_20m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R20m/SCL.jp2',
      title: 'Scene Classification (20m)',
      type: 'image/jp2',
    },
    TCI_20m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R20m/TCI.jp2',
      title: 'True Color Image (20m)',
      type: 'image/jp2',
    },
    WVP_20m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/R20m/WVP.jp2',
      title: 'Water Vapor (20m)',
      type: 'image/jp2',
    },
    CLD_20m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/qi/CLD_20m.jp2',
      title: 'Cloud (20m)',
      type: 'image/jp2',
    },
    SNW_20m: {
      href: 's3://sentinel-s2-l2a/tiles/35/V/MK/2018/6/5/0/qi/SNW_20m.jp2',
      title: 'Snow (20m)',
      type: 'image/jp2',
    },
  },
};

export const SampleFull: Item = {
  stac_version: '1.0.0-beta.2',
  stac_extensions: ['eo', 'view', 'https://example.com/cs-extension/1.0/schema.json'],
  type: 'Feature',
  id: 'CS3-20160503_132131_05',
  bbox: [-122.59750209, 37.48803556, -122.2880486, 37.613537207],
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-122.308150179, 37.488035566],
        [-122.597502109, 37.538869539],
        [-122.576687533, 37.613537207],
        [-122.2880486, 37.562818007],
        [-122.308150179, 37.488035566],
      ],
    ],
  },
  properties: {
    datetime: '2016-05-03T13:22:30Z',
    title: 'A CS3 item',
    license: 'PDDL-1.0',
    providers: [
      {
        name: 'CoolSat',
        roles: ['producer', 'licensor'],
        url: 'https://cool-sat.com/',
      },
    ],
    created: '2016-05-04T00:00:01Z',
    updated: '2017-01-01T00:30:55Z',
    'view:sun_azimuth': 168.7,
    'eo:cloud_cover': 0.12,
    'view:off_nadir': 1.4,
    platform: 'coolsat2',
    instruments: ['cool_sensor_v1'],
    'eo:bands': [
      {
        name: 'band1',
      },
      {
        name: 'band1',
      },
      {
        name: 'band2',
      },
      {
        name: 'band3',
      },
    ],
    'view:sun_elevation': 33.4,
    gsd: 0.512,
    'cs:type': 'scene',
    'cs:anomalous_pixels': 0.14,
    'cs:earth_sun_distance': 1.014156,
    'cs:sat_id': 'CS3',
    'cs:product_level': 'LV1B',
  },
  collection: 'CS3',
  links: [
    { rel: 'self', href: 'http://cool-sat.com/catalog/CS3-20160503_132130_04/CS3-20160503_132130_04.json' },
    { rel: 'root', href: 'http://cool-sat.com/catalog/catalog.json' },
    { rel: 'parent', href: 'http://cool-sat.com/catalog/CS3-20160503_132130_04/catalog.json' },
    { rel: 'collection', href: 'http://cool-sat.com/catalog/CS3-20160503_132130_04/catalog.json' },
    {
      rel: 'alternate',
      type: 'text/html',
      href: 'http://cool-sat.com/catalog/CS3-20160503_132130_04/CS3-20160503_132130_04.html',
    },
  ],
  assets: {
    analytic: {
      href: 'http://cool-sat.com/catalog/CS3-20160503_132130_04/analytic.tif',
      title: '4-Band Analytic',
    },
    thumbnail: {
      href: 'http://cool-sat.com/catalog/CS3-20160503_132130_04/thumbnail.png',
      title: 'Thumbnail',
      type: 'image/png',
      roles: ['thumbnail'],
    },
    udm: {
      href: 'http://cool-sat.com/catalog/CS3-20160503_132130_04/UDM.tif',
      title: 'Unusable Data Mask',
    },
    'json-metadata': {
      href: 'http://cool-sat.com/catalog/CS3-20160503_132130_04/extended-metadata.json',
      title: 'Extended Metadata',
      type: 'application/json',
      roles: ['metadata'],
    },
    ephemeris: {
      href: 'http://cool-sat.com/catalog/CS3-20160503_132130_04/S3-20160503_132130_04.EPH',
      title: 'Satellite Ephemeris Metadata',
    },
  },
};

export const PlanetSample: Item = {
  stac_version: '1.0.0-beta.2',
  stac_extensions: ['eo', 'view', 'https://example.planet.com/stac/1.0/schema.json'],
  links: [
    { rel: 'self', href: 'https://api.planet.com/data/v1/item-types/PSScene4Band/items/20171110_121030_1013' },
    {
      rel: 'full-assets',
      href: 'https://api.planet.com/data/v1/item-types/PSScene4Band/items/20171110_121030_1013/assets/',
    },
  ],
  bbox: [-38.9237469532665, -13.169235186077524, -38.671635567195025, -13.048292073058748],
  geometry: {
    coordinates: [
      [
        [-38.92116702540037, -13.110092317731418],
        [-38.9112864728743, -13.062487360866074],
        [-38.9110789705375, -13.062527998574287],
        [-38.908213551271224, -13.048292073058748],
        [-38.671635567195025, -13.094581158659716],
        [-38.67642080836562, -13.118491623177688],
        [-38.68693656624613, -13.169235186077524],
        [-38.9237469532665, -13.122881179500025],
        [-38.92116702540037, -13.110092317731418],
      ],
    ],
    type: 'Polygon',
  },
  id: '20171110_121030_1013',
  properties: {
    datetime: '2017-11-10T12:10:30.535417Z',
    'eo:cloud_cover': 23,
    gsd: 3.7,
    'view:sun_azimuth': 101.8,
    'view:sun_elevation': 58.8,
    'view:off_nadir': 1,
    'pl:acquired': '2017-11-10T12:10:30.535417Z',
    'pl:anomalous_pixels': 0.14,
    'pl:columns': 9111,
    'pl:epsg_code': 32724,
    'pl:ground_control': true,
    'pl:instrument': 'PS2',
    'pl:item_type': 'PSScene4Band',
    'pl:origin_x': 508263,
    'pl:origin_y': 8557524,
    'pl:pixel_resolution': 3,
    'pl:provider': 'planetscope',
    'pl:published': '2017-11-10T16:11:38Z',
    'pl:quality_category': 'standard',
    'pl:rows': 4466,
    'pl:satellite_id': '1013',
    'pl:strip_id': '902639',
    'pl:updated': '2017-11-11T11:17:33Z',
    'pl:usable_data': 0,
    'pl:view_angle': 1,
  },
  type: 'Feature',
  assets: {
    thumbnail: {
      href: 'https://api.planet.com/data/v1/item-types/PSScene4Band/items/20171110_121030_1013/thumb',
      title: 'Thumbnail',
      status: 'active',
      roles: ['thumbnail'],
    },
    analytic: {
      href:
        'https://api.planet.com/data/v1/assets/eyJpIjogIjIwMTcxMTEwXzEyMTAxMF8xMDEzIiwgImMiOiAiUFNTY2VuZTRCYW5kIiwgInQiOiAiYW5hbHl0aWMiLCAiY3QiOiAiaXRlbS10eXBlIn0',
      title: 'PSScene4Band GeoTIFF (COG)',
      activate:
        'https://api.planet.com/data/v1/assets/eyJpIjogIjIwMTcxMTEwXzEtMTAzMF8xMDEzIiwgImMiOiAiUFNTY2VuZTRCYW5kIiwgInQiOiAiYW5hbHl0aWMiLCAiY3QiOiAiaXRlbS10eXBlIn0/activate',
      asset_type: 'https://api.planet.com/data/v1/asset-types/analytic',
      _permissions: ['download'],
      md5_digest: null,
      status: 'inactive',
    },
    analytic_xml: {
      href:
        'https://api.planet.com/data/v1/assets/NTY2VuZTReyJpIjogIjIwMTcxMTEwXzEyMTAxMF8xMDEzIiQiOiAiaXRlbS10ewgImMiOiAiUFbHl0aWMiLCAiY3XBlIn0',
      title: 'PSScene4Band XML Metadata',
      activate:
        'https://api.planet.com/data/v1/assets/tMTAzMF8xMDEzIiwInQiOiAeyJpIjogIjIwMTcxMTEwXzEiYW5hbHl0aWMiLCAiY3gImMiOiAiUFNTY2VuZTRCYW5kIiwgQiOiAiaXRlbS10eXBlIn0/activate',
      asset_type: 'https://api.planet.com/data/v1/asset-types/analytic_xml',
      _permissions: ['download'],
      md5_digest: null,
      status: 'activating',
    },
    udm: {
      href:
        'https://api.planet.com/data/v1/assets/NTY2VuZTReyJpIzEyMTAxMF8xMDEzIiQiOiAiaXRlbTcxMTEwXAiUFbHl0S10ewgImMiOijogIjIwMaWMiLCAiY3XBlIn0',
      title: 'PSScene4Band Unusable Data Mask',
      activate:
        'https://api.planet.com/data/v1/assets/tMTAzMF8xMDEzIiwInQiOiAeyJpIjogIjIgImMiOiAiUFwMTcxMTEwXzEiYW5hbHl0aWMiLCAiY3NTY2VuZTRCYW5kIiwgQiOiAiaXRlbS10eXBlIn0/activate',
      asset_type: 'https://api.planet.com/data/v1/asset-types/udm',
      _permissions: ['download'],
      expires_at: '2017-11-26T06:41:41.467106',
      location:
        'https://api.planet.com/data/v1/download?token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOd01QTVVnMVQzaGFWTzBNdFBtb0pQamiJ6K3haZmsrNVZ4ZG415WeHExUEh6VkpNSFRGNVZUMVRpQ1pKcmdhcU5HeTBOR1JVS3dmWWFpZ255eExDTnRWUT09IiwiaXRlbV90eXBlX2lkIjoiUFNTY2VuZTRCYW5kIiwidG9rZW5fdHlwZSI6InR5cGVkLWl0ZW0iLCJleHAiOjE1MTE2Nzg1MDEsIml0ZW1faWQiOiIyMDE3MTEyMl8xMjExMjJfMTAzOSIsImFzc2V0X3R5cGUiOiJhbmFseXRpY19kbiJ9.HJAskK7QIeBIT_7fCumZ73vpECjN9J6rdAaKd9QBu2Z8gVixK2V_tIxg2mXBqJGJQxuVmAJw-SYoYeGmevWilA',
      md5_digest: 'd860370a9468e39f97b2044bc5fd4bfe',
      status: 'active',
    },
  },
};

export const LandSatSample: Item = {
  stac_version: '1.0.0-beta.2',
  stac_extensions: ['eo', 'view', 'https://example.com/stac/landsat-extension/1.0/schema.json'],
  id: 'LC81530252014153LGN00',
  type: 'Feature',
  bbox: [49.16354, 72.27502, 51.36812, 75.67662],
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [51.33855, 72.27502],
        [51.36812, 75.70821],
        [49.19092, 75.67662],
        [49.16354, 72.3964],
        [51.33855, 72.27502],
      ],
    ],
  },
  collection: 'landsat-8-l1',
  properties: {
    datetime: '2014-06-02T09:22:02Z',
    gsd: 30,
    platform: 'landsat-8',
    instruments: ['oli', 'tirs'],
    'eo:cloud_cover': 78,
    'view:off_nadir': 0,
    'view:azimuth': 0,
    'view:sun_azimuth': 149.01607154,
    'view:sun_elevation': 59.214247,
    'landsat:path': 107,
    'landsat:row': 18,
    'landsat:earth_sun_distance': 1.014156,
    'landsat:ground_control_points_verify': 114,
    'landsat:geometric_rmse_model': 7.562,
    'landsat:image_quality_tirs': 9,
    'landsat:ground_control_points_model': 313,
    'landsat:geometric_rmse_model_x': 5.96,
    'landsat:geometric_rmse_model_y': 4.654,
    'landsat:geometric_rmse_verify': 5.364,
    'landsat:image_quality_oli': 9,
  },
  links: [
    {
      rel: 'self',
      href: 'https://landsat-stac.s3.amazonaws.com/landsat-8-l1/107/018/2018-10-01/LC81530252014153LGN00.json',
    },
    {
      rel: 'collection',
      href: 'https://landsat-stac.s3.amazonaws.com/landsat-8-l1/catalog.json',
    },
    {
      rel: 'parent',
      href: 'https://landsat-stac.s3.amazonaws.com/landsat-8-l1/107/018/catalog.json',
    },
    {
      rel: 'root',
      href: 'https://landsat-stac.s3.amazonaws.com/catalog.json',
    },
  ],
  assets: {
    ANG: {
      href: 'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/LC81530252014153LGN00_ANG.txt',
      title: 'Angle coefficients file',
      type: 'text/plain',
    },
    B1: {
      href: 'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/LC81530252014153LGN00_B1.TIF',
      type: 'image/tiff; application=geotiff',
      'eo:bands': [
        {
          name: 'B1',
          common_name: 'coastal',
          center_wavelength: 0.44,
          full_width_half_max: 0.02,
        },
      ],
      title: 'Band 1 (coastal)',
    },
    B2: {
      href: 'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/LC81530252014153LGN00_B2.TIF',
      type: 'image/tiff; application=geotiff',
      'eo:bands': [
        {
          name: 'B2',
          common_name: 'blue',
          center_wavelength: 0.48,
          full_width_half_max: 0.06,
        },
      ],
      title: 'Band 2 (blue)',
    },
    B3: {
      href: 'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/LC81530252014153LGN00_B3.TIF',
      type: 'image/tiff; application=geotiff',
      'eo:bands': [
        {
          name: 'B3',
          common_name: 'green',
          center_wavelength: 0.56,
          full_width_half_max: 0.06,
        },
      ],
      title: 'Band 3 (green)',
    },
    B4: {
      href: 'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/LC81530252014153LGN00_B4.TIF',
      type: 'image/tiff; application=geotiff',
      'eo:bands': [
        {
          name: 'B4',
          common_name: 'red',
          center_wavelength: 0.65,
          full_width_half_max: 0.04,
        },
      ],
      title: 'Band 4 (red)',
    },
    B5: {
      href: 'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/LC81530252014153LGN00_B5.TIF',
      type: 'image/tiff; application=geotiff',
      'eo:bands': [
        {
          name: 'B5',
          common_name: 'nir',
          center_wavelength: 0.86,
          full_width_half_max: 0.03,
        },
      ],
      title: 'Band 5 (nir)',
    },
    B6: {
      href: 'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/LC81530252014153LGN00_B6.TIF',
      type: 'image/tiff; application=geotiff',
      'eo:bands': [
        {
          name: 'B6',
          common_name: 'swir16',
          center_wavelength: 1.6,
          full_width_half_max: 0.08,
        },
      ],
      title: 'Band 6 (swir16)',
    },
    B7: {
      href: 'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/LC81530252014153LGN00_B7.TIF',
      type: 'image/tiff; application=geotiff',
      'eo:bands': [
        {
          name: 'B7',
          common_name: 'swir22',
          center_wavelength: 2.2,
          full_width_half_max: 0.2,
        },
      ],
      title: 'Band 7 (swir22)',
    },
    B8: {
      href: 'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/LC81530252014153LGN00_B8.TIF',
      type: 'image/tiff; application=geotiff',
      'eo:bands': [
        {
          name: 'B8',
          common_name: 'pan',
          center_wavelength: 0.59,
          full_width_half_max: 0.18,
        },
      ],
      title: 'Band 8 (pan)',
    },
    B9: {
      href: 'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/LC81530252014153LGN00_B9.TIF',
      type: 'image/tiff; application=geotiff',
      'eo:bands': [
        {
          name: 'B9',
          common_name: 'cirrus',
          center_wavelength: 1.37,
          full_width_half_max: 0.02,
        },
      ],
      title: 'Band 9 (cirrus)',
    },
    B10: {
      href: 'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/LC81530252014153LGN00_B10.TIF',
      type: 'image/tiff; application=geotiff',
      'eo:bands': [
        {
          name: 'B10',
          common_name: 'lwir11',
          center_wavelength: 10.9,
          full_width_half_max: 0.8,
        },
      ],
      title: 'Band 10 (lwir)',
    },
    B11: {
      href: 'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/LC81530252014153LGN00_B11.TIF',
      type: 'image/tiff; application=geotiff',
      'eo:bands': [
        {
          name: 'B11',
          common_name: 'lwir12',
          center_wavelength: 12,
          full_width_half_max: 1,
        },
      ],
      title: 'Band 11 (lwir)',
    },
    BQA: {
      href: 'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/LC81530252014153LGN00_BQA.TIF',
      title: 'Band quality data',
      type: 'image/tiff; application=geotiff',
    },
    MTL: {
      href: 'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/LC81530252014153LGN00_MTL.txt',
      title: 'original metadata file',
      type: 'text/plain',
    },
    thumbnail: {
      href:
        'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/LC81530252014153LGN00_thumb_large.jpg',
      title: 'Thumbnail image',
      type: 'image/jpeg',
    },
    index: {
      href: 'https://landsat-pds.s3.amazonaws.com/c1/L8/107/018/LC81530252014153LGN00/index.html',
      type: 'text/html',
      title: 'HTML index page',
    },
  },
};

export const DigiGlobeSample: Item = {
  stac_version: '1.0.0-beta.2',
  stac_extensions: ['eo', 'projection', 'view', 'https://example.digitalglobe.com/stac/1.0/schema.json'],
  id: '103001004B316600_P002_MUL',
  type: 'Feature',
  bbox: [-105.161151214, 39.0436821016, -104.947574355, 39.1750024943],
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-105.160846396, 39.1656009422],
        [-104.947574355, 39.1750024943],
        [-104.949890373, 39.0512153242],
        [-105.161151214, 39.0436821016],
        [-105.160846396, 39.1656009422],
      ],
    ],
  },
  assets: {
    multispectral_image: {
      href: 'https://15NOV09180446-M1BS-056823192010_01_P002.TIF',
    },
    imd: {
      href: 'https://15NOV09180446-M1BS-056823192010_01_P002.IMD',
    },
    imd_xml: {
      href: 'https://15NOV09180446-M1BS-056823192010_01_P002.XML',
    },
    til: {
      href: 'https://15NOV09180446-M1BS-056823192010_01_P002.TIL',
    },
    att: {
      href: 'https://15NOV09180446-M1BS-056823192010_01_P002.ATT',
    },
    eph: {
      href: 'https://15NOV09180446-M1BS-056823192010_01_P002.EPH',
    },
    geo: {
      href: 'https://15NOV09180446-M1BS-056823192010_01_P002.GEO',
    },
    rpb: {
      href: 'https://15NOV09180446-M1BS-056823192010_01_P002.RPB',
    },
    thumbnail: {
      href: 'https://15NOV09180446-M1BS-056823192010_01_P002.JPG',
      roles: ['thumbnail'],
    },
  },
  properties: {
    'dg:feature_type': ['GBDXCatalogRecord', 'WV02', 'DigitalGlobeProduct', '1BProduct'],
    'view:sun_azimuth': 168.7,
    'eo:cloud_cover': 50,
    'view:off_nadir': 18.4,
    'view:azimuth': 34.5,
    platform: 'worldview02',
    'view:sun_elevation': 33.4,
    gsd: 2.047,
    'proj:epsg': null,
    'dg:catalog_id': '103001004B316600',
    'dg:soli': '056823192',
    'dg:part': 2,
    'dg:platform': 'worldview02',
    'dg:product_level': 'LV1B',
    'dg:product': 'worldview02_lv1b',
    datetime: '2015-11-09T18:04:46Z',
  },
  collection: 'dg_worldview02',
  links: [
    {
      rel: 'self',
      href:
        'https://s3.amazonaws.com/digitalglobe-catalog-spec/collections/dg_worldview02_lv1b/103001004B316600_P002_MUL',
    },
    {
      rel: 'collection',
      href: 'https://s3.amazonaws.com/digitalglobe-catalog-spec/collections/dg_worldview02_lv1b.json',
    },
  ],
};

export const DateTimeRangeSample: Item = {
  stac_version: '1.0.0-beta.2',
  stac_extensions: [],
  type: 'Feature',
  id: 'half-moon-bay/video-2018-01-01-0001',
  bbox: [-122.44674682617188, 37.45551035774642, -122.41241455078125, 37.47077095413427],
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-122.44674682617188, 37.45551035774642],
        [-122.41241455078125, 37.45551035774642],
        [-122.41241455078125, 37.47077095413427],
        [-122.44674682617188, 37.47077095413427],
        [-122.44674682617188, 37.45551035774642],
      ],
    ],
  },
  properties: {
    datetime: '2018-01-01T13:21:30Z',
    start_datetime: '2018-01-01T13:21:30Z',
    end_datetime: '2018-01-01T13:31:30Z',
  },
  links: [
    {
      rel: 'self',
      href: 'http://cool-drones.com/catalog/half-moon-bay/video-2018-01-01-0001.json',
    },
  ],
  assets: {
    video: {
      href: 'http://cool-drones.com/catalog/half-moon-bay/video-2018-01-01-0001.mpeg',
      title: '10 minute drone video captured over Half Moon Bay, California, USA.',
      type: 'video/mpeg',
    },
    thumbnail: {
      href: 'http://cool-drones.com/catalog/half-moon-bay/video-2018-01-01-0001.jpg',
      type: 'image/jpeg',
      title: 'Thumbnail',
    },
  },
};

export const Cbers4MuxSample = {
  stac_version: '1.0.0-beta.2',
  stac_extensions: ['projection', 'view', 'https://example.com/stac/cbers-extension/1.0/schema.json'],
  id: 'CBERS_4_MUX_20181029_177_106_L4',
  type: 'Feature',
  geometry: {
    type: 'MultiPolygon',
    coordinates: [
      [
        [
          [-64.800142, -5.815918],
          [-63.719133, -5.979677],
          [-63.488049, -4.915594],
          [-64.566931, -4.752172],
          [-64.800142, -5.815918],
        ],
      ],
    ],
  },
  bbox: [-64.803413, -5.985958, -63.485124, -4.731829],
  properties: {
    datetime: '2018-10-29T14:24:54Z',
    'view:sun_azimuth': 111.113,
    'view:sun_elevation': 65.8018,
    'view:off_nadir': 0.00751271,
    'proj:epsg': 32763,
    'cbers:data_type': 'L4',
    'cbers:path': 177,
    'cbers:row': 106,
  },
  collection: 'CBERS_4_MUX',
  links: [
    {
      rel: 'self',
      href: 'https://cbers-stac-0-6.s3.amazonaws.com/CBERS4/MUX/177/106/CBERS_4_MUX_20181029_177_106_L4.json',
    },
    {
      rel: 'parent',
      href: 'https://cbers-stac-0-6.s3.amazonaws.com/CBERS4/MUX/177/catalog.json',
    },
    {
      rel: 'collection',
      href: 'https://cbers-stac-0-6.s3.amazonaws.com/collections/CBERS_4_MUX_collection.json',
    },
  ],
  assets: {
    thumbnail: {
      href:
        'https://s3.amazonaws.com/cbers-meta-pds/CBERS4/MUX/177/106/CBERS_4_MUX_20181029_177_106_L4/CBERS_4_MUX_20181029_177_106.jpg',
      type: 'image/jpeg',
      roles: ['thumbnail'],
    },
    metadata: {
      href:
        's3://cbers-pds/CBERS4/MUX/177/106/CBERS_4_MUX_20181029_177_106_L4/CBERS_4_MUX_20181029_177_106_L4_BAND6.xml',
      title: 'INPE original metadata',
      type: 'text/xml',
      roles: ['metadata'],
    },
    B5: {
      href:
        's3://cbers-pds/CBERS4/MUX/177/106/CBERS_4_MUX_20181029_177_106_L4/CBERS_4_MUX_20181029_177_106_L4_BAND5.tif',
      type: 'image/tiff; application=geotiff; profile=cloud-optimized',
    },
    B6: {
      href:
        's3://cbers-pds/CBERS4/MUX/177/106/CBERS_4_MUX_20181029_177_106_L4/CBERS_4_MUX_20181029_177_106_L4_BAND6.tif',
      type: 'image/tiff; application=geotiff; profile=cloud-optimized',
    },
    B7: {
      href:
        's3://cbers-pds/CBERS4/MUX/177/106/CBERS_4_MUX_20181029_177_106_L4/CBERS_4_MUX_20181029_177_106_L4_BAND7.tif',
      type: 'image/tiff; application=geotiff; profile=cloud-optimized',
    },
    B8: {
      href:
        's3://cbers-pds/CBERS4/MUX/177/106/CBERS_4_MUX_20181029_177_106_L4/CBERS_4_MUX_20181029_177_106_L4_BAND8.tif',
      type: 'image/tiff; application=geotiff; profile=cloud-optimized',
    },
  },
};
