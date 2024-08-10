export type UserResponse = {
  name: string;
  email: string;
  password?: string;
  token?: string;
};

export type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
};
