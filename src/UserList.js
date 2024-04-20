import { Msg } from './Msg';

export function UserList() {
  const users = [
    {
      name: "vimal",
      pic: "https://th.bing.com/th/id/OIP.8sEQq9-fsOY0T-R-vYtVqgHaIB?w=180&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      name: "raj",
      pic: "https://th.bing.com/th/id/OIP.8sEQq9-fsOY0T-R-vYtVqgHaIB?w=180&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      name: "ruban",
      pic: "https://th.bing.com/th/id/OIP.8sEQq9-fsOY0T-R-vYtVqgHaIB?w=180&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
  ];
  return (
    <div>
      {users.map((usr) => (<Msg name={usr.name} pic={usr.pic} />))}
    </div>
  );
}
