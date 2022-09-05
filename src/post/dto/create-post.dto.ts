export interface CreatePost {
  readonly banner: string;
  readonly title: string;
  readonly content: string;
  readonly slug: string;
  readonly status: string;
  readonly tag: string[];
}
