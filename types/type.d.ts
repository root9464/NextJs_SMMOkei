/* eslint-disable @typescript-eslint/indent */
export type PostType = {
  Id: number;
  Title: string;
  Content: string;
};

export type User = {
  id: number;
  name: string;
  password: string;
  is_admin: boolean;
};

export type ChildComponentProps = {
  onPasswordCorrectChange: (newValue: boolean) => void;
};

export type PostAdd = Omit<PostType, 'Id'>;
