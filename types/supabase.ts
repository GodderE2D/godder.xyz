type BlogsType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  content: string;
  views: number;
  likes: number;
};

type CommentsType = {
  id: string;
  createdAt: string;
  author: string;
  content: string;
  likes: number;
  hearted: boolean;
};

export type { BlogsType, CommentsType };
