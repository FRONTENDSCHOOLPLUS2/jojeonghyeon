export type CommentType = {
  data: {
    _id: number;
    user: {
      _id: number;
      name: string;
    };
    content: string;
    createdAt: string;
    updatedAt: string;
  };
};
