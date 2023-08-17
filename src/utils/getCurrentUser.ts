import { IUser } from "../interfaces/IUser";

const getCurrentUser = (users: IUser[], id: number): IUser | undefined => {
  for (const oneUser of users) {
    if (oneUser.id === id) {
      return oneUser;
    }
  }
  return undefined;
};

export { getCurrentUser };
