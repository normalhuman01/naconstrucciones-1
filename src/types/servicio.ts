import { Content, Embedded, GUID, TProductLinks, WhatsappLink } from "./other";

export interface TServiceEmbedded {
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
  whatsapp_link: WhatsappLink;
  _links: TProductLinks;
  _embedded: Embedded;
}
