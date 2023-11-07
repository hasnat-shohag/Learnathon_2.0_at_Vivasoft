import { Link } from "react-router-dom";
import Nav from "./Nav";

const Users = () => {
    const userList = [
        {
            id: 1,
            name: "John",
        },
        {
            id: 2,
            name: "Jane",
        },
        {
            id: 3,
            name: "Bob",
        },
    ];
    return (
        <div>
            <Nav />
            <h1 style={{ textAlign: "center" }}>Users Page</h1>
            <ul>
                {userList.map((user) => (
                    <li
                        key={user.id}
                        style={{
                            margin: "10px",
                            padding: "10px",
                            backgroundColor: "yellow",
                            textAlign: "center",
                            listStyle: "none",
                        }}
                    >
                        <Link to={`/User/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Users;
