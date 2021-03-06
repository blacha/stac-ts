/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This object represents the metadata for an item in a SpatioTemporal Asset Catalog.
 */
export type STACItem = Core;
export type Core = GeoJSONFeature & {
  stac_version: STACVersion;
  stac_extensions?: STACExtensions;
  id: ProviderID;
  links: ItemLinks;
  assets: AssetLinks;
  properties: CommonMetadata;
  collection?: CollectionID;
  [k: string]: unknown;
};
export type GeoJSONGeometry =
  | GeoJSONPoint2
  | GeoJSONLineString2
  | GeoJSONPolygon2
  | GeoJSONMultiPoint2
  | GeoJSONMultiLineString2
  | GeoJSONMultiPolygon2;
export type STACVersion = string;
export type ReferenceToAJSONSchema = string;
export type ReferenceToACoreExtension = string;
export type STACExtensions = (ReferenceToAJSONSchema | ReferenceToACoreExtension)[];
/**
 * Provider item ID
 */
export type ProviderID = string;
export type LinkReference = string;
export type LinkRelationType = string;
export type LinkType = string;
export type LinkTitle = string;
export type CreationTime = string;
export type LastUpdateTime = string;
/**
 * Links to item relations
 */
export type ItemLinks = Link[];
export type AssetReference = string;
export type AssetTitle = string;
export type AssetDescription = string;
export type AssetType = string;
export type AssetRoles = string[];
export type CommonMetadata = BasicDescriptiveFields &
  DateAndTimeFields &
  InstrumentFields &
  LicensingFields &
  ProviderFields;
/**
 * A human-readable title describing the Item.
 */
export type ItemTitle = string;
/**
 * Detailed multi-line description to fully explain the Item.
 */
export type ItemDescription = string;
export type DateAndTimeFields = {
  created?: CreationTime;
  updated?: LastUpdateTime;
  [k: string]: unknown;
} & (
  | {
      datetime: DateAndTime;
      start_datetime?: StartDateAndTime;
      end_datetime?: EndDateAndTime;
      [k: string]: unknown;
    }
  | {
      datetime: DateAndTime | null;
      start_datetime: StartDateAndTime;
      end_datetime: EndDateAndTime;
      [k: string]: unknown;
    }
);
/**
 * The searchable date/time of the assets, in UTC (Formatted in RFC 3339)
 */
export type DateAndTime = string;
/**
 * The searchable start date/time of the assets, in UTC (Formatted in RFC 3339)
 */
export type StartDateAndTime = string;
/**
 * The searchable end date/time of the assets, in UTC (Formatted in RFC 3339)
 */
export type EndDateAndTime = string;
export type Platform = string;
export type Instruments = string[];
export type Constellation = string;
export type Mission = string;
export type GroundSampleDistance = number;
export type OrganizationName = string;
export type OrganizationDescription = string;
export type OrganizationRoles = ('producer' | 'licensor' | 'processor' | 'host')[];
export type OrganizationHomepage = string;
export type Providers = {
  name?: OrganizationName;
  description?: OrganizationDescription;
  roles?: OrganizationRoles;
  url?: OrganizationHomepage;
  [k: string]: unknown;
}[];
/**
 * The ID of the STAC Collection this Item references to.
 */
export type CollectionID = string;

export interface GeoJSONFeature {
  type: 'Feature';
  properties: null | {
    [k: string]: unknown;
  };
  geometry:
    | null
    | GeoJSONPoint
    | GeoJSONLineString
    | GeoJSONPolygon
    | GeoJSONMultiPoint
    | GeoJSONMultiLineString
    | GeoJSONMultiPolygon
    | GeoJSONGeometryCollection;
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONPoint {
  type: 'Point';
  coordinates: number[];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONLineString {
  type: 'LineString';
  coordinates: number[][];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONPolygon {
  type: 'Polygon';
  coordinates: number[][][];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONMultiPoint {
  type: 'MultiPoint';
  coordinates: number[][];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONMultiLineString {
  type: 'MultiLineString';
  coordinates: number[][][];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONMultiPolygon {
  type: 'MultiPolygon';
  coordinates: number[][][][];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONGeometryCollection {
  type: 'GeometryCollection';
  geometries: (
    | GeoJSONPoint1
    | GeoJSONLineString1
    | GeoJSONPolygon1
    | GeoJSONMultiPoint1
    | GeoJSONMultiLineString1
    | GeoJSONMultiPolygon1
  )[];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONPoint1 {
  type: 'Point';
  coordinates: number[];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONLineString1 {
  type: 'LineString';
  coordinates: number[][];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONPolygon1 {
  type: 'Polygon';
  coordinates: number[][][];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONMultiPoint1 {
  type: 'MultiPoint';
  coordinates: number[][];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONMultiLineString1 {
  type: 'MultiLineString';
  coordinates: number[][][];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONMultiPolygon1 {
  type: 'MultiPolygon';
  coordinates: number[][][][];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONPoint2 {
  type: 'Point';
  coordinates: number[];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONLineString2 {
  type: 'LineString';
  coordinates: number[][];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONPolygon2 {
  type: 'Polygon';
  coordinates: number[][][];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONMultiPoint2 {
  type: 'MultiPoint';
  coordinates: number[][];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONMultiLineString2 {
  type: 'MultiLineString';
  coordinates: number[][][];
  bbox?: number[];
  [k: string]: unknown;
}
export interface GeoJSONMultiPolygon2 {
  type: 'MultiPolygon';
  coordinates: number[][][][];
  bbox?: number[];
  [k: string]: unknown;
}
export interface Link {
  href: LinkReference;
  rel: LinkRelationType;
  type?: LinkType;
  title?: LinkTitle;
  created?: CreationTime;
  updated?: LastUpdateTime;
  [k: string]: unknown;
}
/**
 * Links to assets
 */
export interface AssetLinks {
  [k: string]: Asset;
}
export interface Asset {
  href: AssetReference;
  title?: AssetTitle;
  description?: AssetDescription;
  type?: AssetType;
  roles?: AssetRoles;
  [k: string]: unknown;
}
export interface BasicDescriptiveFields {
  title?: ItemTitle;
  description?: ItemDescription;
  [k: string]: unknown;
}
export interface InstrumentFields {
  platform?: Platform;
  instruments?: Instruments;
  constellation?: Constellation;
  mission?: Mission;
  gsd?: GroundSampleDistance;
  [k: string]: unknown;
}
export interface LicensingFields {
  license?: string;
  [k: string]: unknown;
}
export interface ProviderFields {
  providers?: Providers;
  [k: string]: unknown;
}
