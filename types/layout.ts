import { PostType } from './post';


export interface MetaProps
  extends Pick<PostType, 'date' | 'description' | 'image' | 'title'> {
  type?: string;
}

export type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};
