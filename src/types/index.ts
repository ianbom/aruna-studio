export type ProjectCategory = "Residential" | "Hospitality" | "Commercial";

export interface ProjectGalleryItem {
  url: string;
  caption?: string;
  aspect?: "landscape" | "portrait" | "wide";
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  subCategory: string;
  year: number;
  location: string;
  area: string;
  heroImage: string;
  overview: string;
  narrative: string[];
  specs: { label: string; value: string }[];
  collaborators?: string[];
  gallery: ProjectGalleryItem[];
  featured?: boolean;
}

export interface DesignItem {
  slug: string;
  title: string;
  category: "Furniture" | "Lighting" | "Objects";
  year: number;
  material: string;
  heroImage: string;
  gallery: string[];
  description: string;
  dimensions: string;
  finish: string;
}

export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  content: string[];
}
