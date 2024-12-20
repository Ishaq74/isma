import type { CollectionEntry } from 'astro:content';

// Blog Types
export type BlogEntry = CollectionEntry<'blog'>;
export type BlogData = BlogEntry['data'];

// Product Types
export type ProductEntry = CollectionEntry<'products'>;
export type ProductData = ProductEntry['data'];

// User Types
export type UserEntry = CollectionEntry<'users'>;
export type UserData = UserEntry['data'];

// Category Types
export type CategoryEntry = CollectionEntry<'categories'>;
export type CategoryData = CategoryEntry['data'];

// Order Types
export type OrderEntry = CollectionEntry<'orders'>;
export type OrderData = OrderEntry['data'];

// Service Types
export type ServiceEntry = CollectionEntry<'services'>;
export type ServiceData = ServiceEntry['data'];

// Feature Types
export type FeatureEntry = CollectionEntry<'features'>;
export type FeatureData = FeatureEntry['data'];

// FAQ Types
export type FaqEntry = CollectionEntry<'faqs'>;
export type FaqData = FaqEntry['data'];

// Review Types
export type ReviewEntry = CollectionEntry<'reviews'>;
export type ReviewData = ReviewEntry['data'];

// Menu Types
export type MenuEntry = CollectionEntry<'menus'>;
export type MenuData = MenuEntry['data'];

// Contact Point Types
export type ContactPointEntry = CollectionEntry<'contactPoints'>;
export type ContactPointData = ContactPointEntry['data'];

// Organization Types
export type OrganizationEntry = CollectionEntry<'organizations'>;
export type OrganizationData = OrganizationEntry['data'];

// Opening Hours Types
export type OpeningHoursEntry = CollectionEntry<'openingHours'>;
export type OpeningHoursData = OpeningHoursEntry['data'];
