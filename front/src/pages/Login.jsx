import { useState } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Container1 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffecec;
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;


const Error = styled.span`
  color: red;
`;
const Container = styled.div``;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  
  return (
    <Container>
       <Announcement /> 
       <Navbar />
      
      <Container1>
      <Wrapper>
        <Title>Connectez-vous à votre compte Udemy</Title>
        <Form>
          <Input
            placeholder="Pseduo"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Mot de passe"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            Se connecter
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Agreement>
          <Link>Mot de passe oublié ?</Link>
          <br></br>
          <Link to="/register">Vous n'avez pas de compte ? Inscrivez-vous</Link></Agreement>
        </Form>
      </Wrapper>
    </Container1>
    </Container>
  );
};

export default Login;