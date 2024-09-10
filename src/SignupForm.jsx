import React, { useEffect, useState } from "react";

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "username") {
            setUsername(value);
            localStorage.setItem("username", value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "confirmPassword") {
            setConfirmPassword(value);
            setPasswordsMatch(value === password);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            alert(`User ${username} signed up successfully!`);
            localStorage.setItem("password", password);
        } else {
            alert("Password do not match!");
        }
    };

    return (
        <div style={styles.container}>
            <h2>SignUp Form</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label>Username: </label>
                    <input
                        type="text"
                        name="username"
                        vale={username}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        vale={password}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label>Confirm Password: </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        vale={confirmPassword}
                        onChange={handleInputChange}
                        style={styles.input}
                        required
                    />
                </div>
                {!passwordsMatch && (
                    <p style={styles.error}>Passwords do not match!</p>
                )}
                <button type="submit" style={styles.button}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#f9f9f9",
    },
    formGroup: {
        marginBottom: "15px",
    },
    input: {
        width: "100%",
        padding: "8px 4px",
        marginTop: "5px",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    button: {
        padding: "10px 15px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    error: {
        color: "red",
        fontSize: "12px",
    },
};

export default SignupForm;
