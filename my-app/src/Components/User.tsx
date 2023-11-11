import { Link, useParams } from "react-router-dom";
import Nav from "./Nav";

const User = () => {
    const params = useParams();
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
    const getUserName = (id: string) => {
        return userList.filter((user) => user.id  === parseInt(id))[0]?.name;
    }

    return (
        <>
            <Nav />
            <div style={{textAlign:'center'}}>
                <h1>This is a User Page {params.id ?? ''} username: {getUserName(params.id ?? '')}</h1>
                <Link to="/Users">Go Back</Link>
            </div>
        </>
    );
};
export default User;