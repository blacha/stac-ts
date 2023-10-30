export type StacVersion = '1.0.0';
export type StacExtensions = string[];
export type StacEntity = 'Collection' | 'Catalog' | 'Item';

/**
 * This object describes a relationship with another entity. Data providers are advised to be liberal with links.
 *
 * https://github.com/radiantearth/stac-spec/blob/master/catalog-spec/catalog-spec.md#link-object
 */
export interface StacLink {
  /** The actual link in the format of an URL. Relative and absolute links are both allowed. */
  href: string;
  /**
   * Relationship between the current document and the linked document.
   *
   * See https://github.com/radiantearth/stac-spec/blob/master/catalog-spec/catalog-spec.md#relation-types for more information.
   */
  rel: string;
  /**
   * [Media type](https://github.com/radiantearth/stac-spec/blob/master/catalog-spec/catalog-spec.md#media-types) of the referenced entity.
   */
  type?: string;
  /** A human readable title to be used in rendered displays of the link. */
  title?: string;
  [k: string]: unknown;
}

export type StacAsset = {
  href: string;
  title?: string;
  description?: string;
  type?: string;
  roles?: string[];
  [k: string]: unknown;
} & CommonMetadata;

export type CommonMetadata = BasicDescriptiveFields &
  DateAndTimeFields &
  InstrumentFields &
  LicensingFields &
  ProviderFields;

interface BasicDescriptiveFields {
  /**
   * A human-readable title describing the Item.
   */
  title?: string;
  /**
   * Detailed multi-line description to fully explain the Item.
   */
  description?: string;
  [k: string]: unknown;
}
/**
 * The searchable date/time of the assets, in UTC (Formatted in RFC 3339)
 */
type DateAndTime = string;
interface DateAndTimeFields {
  datetime?: DateAndTime | null;
  start_datetime?: DateAndTime | null;
  end_datetime?: DateAndTime | null;
  created?: DateAndTime | null;
  updated?: DateAndTime | null;
  [k: string]: unknown;
}

interface InstrumentFields {
  platform?: string;
  instruments?: string[];
  constellation?: string;
  mission?: string;
  gsd?: number;
  [k: string]: unknown;
}

interface LicensingFields {
  license?: string;
  [k: string]: unknown;
}
interface ProviderFields {
  providers?: StacProvider[];
  [k: string]: unknown;
}

export type StacRoles = 'producer' | 'licensor' | 'processor' | 'host';
export type StacProvider = {
  name: string;
  description?: string;
  roles?: StacRoles[];
  url?: string;
  [k: string]: unknown;
};
