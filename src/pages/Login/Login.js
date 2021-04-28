import React from "react";
import {
    Container,
    Heading,
    FormContainer,
    FormGroup,
    SubmitButton,
} from "./Login.element";
const Login = () => {
    return (
        <Container>
            <Heading>Login Here!</Heading>
            <FormContainer>
                <form action="">
                    <FormGroup>
                        <label htmlFor="name">Enter Full Name</label> <br />
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            required
                            autoFocus
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
                    <SubmitButton type="submit">Submit</SubmitButton>
                </form>
            </FormContainer>
        </Container>
    );
};

export default Login;
