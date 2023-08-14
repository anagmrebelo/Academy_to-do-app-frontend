import { IUser } from "../interfaces/IUser";
import { getCurrentUser } from "../utils/getCurrentUser";

interface HeaderProps {
  currUserId: number;
  users: IUser[];
}

function Header({ currUserId, users }: HeaderProps): JSX.Element {
  const currUser = getCurrentUser(users, currUserId);
  return (
    <div>
      <h1>{typeof currUser === "object" && currUser.name} To Dos</h1>
    </div>
  );
}

export { Header };
