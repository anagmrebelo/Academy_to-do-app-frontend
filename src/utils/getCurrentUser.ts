import { IUser } from "../interfaces/IUser";

const getCurrentUser = (users: IUser[], id: number): IUser | "not found" => {
  for (const oneUser of users) {
    if (oneUser.id === id) {
      return oneUser;
    }
  }
  return "not found";
};

export { getCurrentUser };
