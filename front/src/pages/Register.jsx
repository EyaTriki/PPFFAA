import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../Responsive';
import { Link } from 'react-router-dom';
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Container = styled.div``;
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
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 15px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin-left: 180px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const CheckBoxLabel = styled.label`
margin-right: 150px;
  font-size: 16px;
  color: #555;
`;
const CheckBox = styled.input`
  margin-right: 10px;

  &:checked + ${CheckBoxLabel}::before {
    content: '\\2713';
    font-size: 18px;
    color: teal;
    margin-right: 5px;
  }
`;
const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
 
  margin-top: 20px;
  margin-bottom: 10px;
`;


const Register = () => {
  const [selectedButton, setSelectedButton] = useState(undefined);

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
    console.log(buttonType)
  };

  return (
    <Container>
      <Announcement />
       <Navbar />
      
      <Container1>
      <Wrapper>
        <Title>Inscrivez-vous et commencez à apprendre</Title>
        <Form>
          <Input placeholder="Prénom" />
          <Input placeholder="Nom" />
          <Input placeholder="Pseudo" />
          <Input placeholder="Email" />
          <Input placeholder="Mot de passe" />
          <Input placeholder="Confirmer Mot de passe" />


          <CheckBoxContainer>
  <CheckBox
    type="checkbox"
    id="student"
    checked={selectedButton === 'student'}
    onChange={() => handleButtonClick('student')}
  />
  <CheckBoxLabel htmlFor="student">Je suis étudiant</CheckBoxLabel>
</CheckBoxContainer>

<CheckBoxContainer>
  <CheckBox
    type="checkbox"
    id="teacher"
    checked={selectedButton === 'teacher'}
    onChange={() => handleButtonClick('teacher')}
  />
  <CheckBoxLabel htmlFor="teacher">Je suis enseignant</CheckBoxLabel>
</CheckBoxContainer>



          <Agreement>
            <input
              type="checkbox"
            />
            Je consens à{' '}
            <b>la politique de confidentialité et la collecte et le traitement de mes données personnelles.</b>
            <p>
              Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
            </p>
          </Agreement>

          <Button>S'inscrire</Button>
        </Form>
      </Wrapper>
      </Container1>
    </Container>
  );
};

export default Register;
