import type { StacCollection } from './collection.js';
import type { StacLink } from './common.js';
import type { StacItem } from './item.js';

/**
 * A GeoJSON FeatureCollection augmented with foreign members that contain values relevant to a STAC entity.
 *
 * https://github.com/radiantearth/stac-api-spec/tree/main/fragments/itemcollection
 */
export interface StacItemCollection {
  type: 'FeatureCollection';
  /**
   * The list of {@link StacItem} in the collection.
   */
  features: StacItem[];
  /**
   * List of link objects to resources and related URLs.
   *
   * Can be used for pagination, e.g. by providing a link with the `next` relation type.
   */
  links?: StacLink[];
  /** The number of items that match the search criteria. */
  numberMatched?: number;
  /** The number of items in this response. */
  numberReturned?: number;
  [k: string]: unknown;
}

/**
 * A list of collections with related information, e.g. returned by a search.
 *
 * https://github.com/radiantearth/stac-api-spec/tree/main/fragments/collectioncollection
 */
export interface StacCollectionCollection {
  type: string;
  /**
   * The list of {@link StacCollection} in the collection.
   */
  collections: StacCollection[];
  /**
   * List of link objects to resources and related URLs.
   *
   * Can be used for pagination, e.g. by providing a link with the `next` relation type.
   */
  links?: StacLink[];
  /** The number of collections that match the search criteria. */
  numberMatched?: number;
  /** The number of collections in this response. */
  numberReturned?: number;
  [k: string]: unknown;
}
