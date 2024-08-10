import { User } from "@prisma/client";

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

export function toUserResponse(user: User): UserResponse {
  return {
    name: user.name,
    email: user.email,
  };
}
