export interface Blog {
  objectId?: string;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  tags?: string;
  created?: number;
  updated?: number;
}