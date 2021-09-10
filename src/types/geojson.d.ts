export type GeoJSONGeometry =
  | GeoJSONPoint2
  | GeoJSONLineString2
  | GeoJSONPolygon2
  | GeoJSONMultiPoint2
  | GeoJSONMultiLineString2
  | GeoJSONMultiPolygon2;

export interface GeoJSONFeature {
  type: 'Feature';
  id?: number | string;
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
