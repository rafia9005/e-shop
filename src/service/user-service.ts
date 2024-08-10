import { CreateUserRequest, UserResponse } from "../model/user-model";

export class UserService {
  static async register(reqeust: CreateUserRequest): Promise<UserResponse> {}
}
