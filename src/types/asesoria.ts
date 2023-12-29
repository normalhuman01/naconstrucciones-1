import { Content, Embedded, GUID, TProductLinks } from "./other";

export interface TAdvisoryEmbedded {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  featured_media: number;
  template: string;
  product_category: number[];
  product_tag: number[];
  _links: TProductLinks;
  _embedded: Embedded;
}
