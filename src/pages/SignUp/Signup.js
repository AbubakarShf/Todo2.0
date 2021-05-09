import { React, useState } from "react";
import {
    Container,
    Heading,
    FormContainer,
    FormGroup,
    SubmitButton,
} from "./Signup.element";
const Signup = () => {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleSubmit = () => {};
    return (
        <Container>
            <Heading>Create an Account</Heading>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <label htmlFor="name">Enter Full Name</label> <br />
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            required
                            autoFocus
                            onChange={(e) => {
                                setDetails({
                                    ...details,
                                    name: e.target.value,
                                });
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="email">Enter Email Address</label>{" "}
                        <br />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            required
                            onChange={(e) => {
                                setDetails({
                                    ...details,
                                    email: e.target.value,
                                });
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label htmlFor="password">Enter Password</label> <br />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="cnfPassword">Confirm Password</label>{" "}
                        <br />
                        <input
                            type="password"
                            name="cnfPassword"
                            id="cnfPassword"
                            placeholder="Confirm Password"
                            required
                            onChange={(e) => {
                                setDetails({
                                    ...details,
                                    password: e.target.value,
                                });
                            }}
                        />
                    </FormGroup>
                    <SubmitButton onClick={handleSubmit} type="submit">
                        Submit
                    </SubmitButton>
                </form>
            </FormContainer>
        </Container>
    );
};

export default Signup;
