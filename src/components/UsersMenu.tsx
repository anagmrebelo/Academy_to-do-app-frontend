import { IUser } from "../interfaces/IUser";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  IconButton,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { FiUsers } from "react-icons/fi";
import { getCurrentUser } from "../utils/getCurrentUser";

interface UsersDropdownProps {
  users: IUser[];
  currUser: IUser | undefined;
  setCurrUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

function UsersMenu({
  users,
  currUser,
  setCurrUser,
}: UsersDropdownProps): JSX.Element {
  const userOptions = users.map((oneUser) => (
    <MenuItemOption key={oneUser.id} value={oneUser.id.toString()}>
      {oneUser.name}
    </MenuItemOption>
  ));
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Users"
        icon={<FiUsers />}
        colorScheme="blue"
      />
      <MenuList>
        <MenuOptionGroup
          value={currUser ? currUser.id.toString() : undefined}
          title="User"
          type="radio"
          onChange={(value) =>
            setCurrUser(getCurrentUser(users, parseInt(value[0])))
          }
        >
          {userOptions}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export { UsersMenu };
