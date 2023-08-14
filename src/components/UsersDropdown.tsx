import { IUser } from "../interfaces/IUser";

interface UsersDropdownProps {
  users: IUser[];
  currUserId: number;
  setCurrUserId: React.Dispatch<React.SetStateAction<number>>;
}

function UsersDropdown({
  users,
  currUserId,
  setCurrUserId,
}: UsersDropdownProps): JSX.Element {
  const userOptions = users.map((oneUser) => (
    <option key={oneUser.id} value={oneUser.id}>
      {oneUser.name}
    </option>
  ));
  return (
    <select
      value={currUserId}
      onChange={(e) => setCurrUserId(parseInt(e.target.value))}
    >
      {userOptions}
    </select>
  );
}

export { UsersDropdown };
