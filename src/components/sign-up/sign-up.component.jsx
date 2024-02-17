import { useState } from "react"
import { userWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {
    const [formField, setFormField] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formField;

    console.log(formField);

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert('the password is not the same as confirmPassword');
            return;
        }

        try {
            const response = await userWithEmailAndPassword(email, password)
        } catch (error) {
            if(error.code === "auth/email-already-in-use") {
                console.error("El correo electronico ya esta en uso")
            } else{
                console.error("Ocurrio un error al crear el user:", error)
            }
        }

        
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" onChange={handleChange} name="displayName" value={displayName} />

                <label>Email</label>
                <input type="email" onChange={handleChange} name="email" value={email} />

                <label>Password</label>
                <input type="password" onChange={handleChange} name="password" value={password} />

                <label>Confirm Password</label>
                <input type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default SignUp;