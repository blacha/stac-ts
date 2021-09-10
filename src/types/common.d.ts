export type StacVersion = '1.0.0';
export type StacExtensions = string[];
export type StacEntity = 'Collection' | 'Catalog' | 'Item';

export interface StacLink {
  href: string;
  rel: string;
  type?: string;
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
