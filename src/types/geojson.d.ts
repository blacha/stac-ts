export type GeoJSONGeometry =
  | GeoJSONPoint
  | GeoJSONLineString
  | GeoJSONPolygon
  | GeoJSONMultiPoint
  | GeoJSONMultiLineString
  | GeoJSONMultiPolygon;

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
    | GeoJSONPoint
    | GeoJSONLineString
    | GeoJSONPolygon
    | GeoJSONMultiPoint
    | GeoJSONMultiLineString
    | GeoJSONMultiPolygon
  )[];
  bbox?: number[];
  [k: string]: unknown;
}
