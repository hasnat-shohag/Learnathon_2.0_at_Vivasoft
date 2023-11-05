import { useState } from "react";

const FormSubmit = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const EmailChange = (event: { target: { value: any; }; }) =>{
        setEmail(event.target.value);
    }
    const PasswordChange = (event: { target: { value: any; }; }) =>{
        setPassword(event.target.value);
    }
    return (
        <form onSubmit={(e) => {e.preventDefault(); console.log("Email:", email, " ","Password:",password);}}>
            <p>
                Email: <input type="text" name="email" onChange={EmailChange} />
            </p>
            <p>
                Password: <input type="password" name="password" onChange={PasswordChange}/>
            </p>
            <button type="submit"> Submit </button>
        </form>
    );
}
//! Controlled Component and Uncontrolled Component must be learn later
export default FormSubmit;