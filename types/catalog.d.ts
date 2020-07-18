/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This object represents Catalogs in a SpatioTemporal Asset Catalog.
 */
export type STACCatalogSpecification = Catalog;
export type STACVersion = string;
export type ReferenceToAJSONSchema = string;
export type ReferenceToACoreExtension = string;
export type STACExtensions = (ReferenceToAJSONSchema | ReferenceToACoreExtension)[];
export type Identifier = string;
export type Title = string;
export type Description = string;
export type LinkReference = string;
export type LinkRelationType = string;
export type LinkType = string;
export type LinkTitle = string;
export type Links = Link[];

export interface Catalog {
  stac_version: STACVersion;
  stac_extensions?: STACExtensions;
  id: Identifier;
  title?: Title;
  description: Description;
  links: Links;
  [k: string]: unknown;
}
export interface Link {
  href: LinkReference;
  rel: LinkRelationType;
  type?: LinkType;
  title?: LinkTitle;
  [k: string]: unknown;
}
