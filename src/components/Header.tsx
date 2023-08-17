import { Flex } from "@chakra-ui/react";
import { IUser } from "../interfaces/IUser";
import { UsersMenu } from "./UsersMenu";

interface HeaderProps {
  currUser: IUser | undefined;
  users: IUser[];
  setCurrUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

function Header({ currUser, users, setCurrUser }: HeaderProps): JSX.Element {
  return (
    <Flex justifyContent="space-between" alignItems="center" p={4}>
      <h1>{currUser && currUser.name} To Dos</h1>
      <UsersMenu users={users} currUser={currUser} setCurrUser={setCurrUser} />
    </Flex>
  );
}

export { Header };
