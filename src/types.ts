/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  num: string;
  name: string;
  description: string;
  details?: string;
  ageRange?: string;
  image?: string;
  whatsappText?: string;
  ctaText?: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  gridClass: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  service: string;
}
