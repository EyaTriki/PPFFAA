import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import { useState } from "react";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
text-decoration: none;
  font-size: 20 px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  function handleClick() {
    setIsOpen(!isOpen)
  }
  const quantity =useSelector(state=>state.cart.quantity)
  console.log(quantity)
  const user = useSelector((state) => state.user.currentUser);
  console.log(user)
  return (
    <Container>
      <Wrapper>
        <Left>
 
         <div className="language-selector">
      <FontAwesomeIcon icon={faLanguage} onClick={handleClick} />
      {isOpen && (
        <ul className="language-list">
          <li>English</li>
          <li>Français</li>
          <li>Español</li>
        </ul>
      )}
    </div>
       
          <SearchContainer>
            <Input placeholder="Rechercher" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/"style={ {textDecoration: 'none'}}><Logo>UDEMY.</Logo></Link>
        </Center>
        <Right>
          {user ? (
            <>
            
                <MenuItem style={{ textDecoration: "none" }} >hello ,<Link to="/profile" style={{ textDecoration: "none" }}> {user.name.split(" ")[0]}</Link></MenuItem>
              
              <Link to="/logout" style={{ textDecoration: "none" }}>
                <MenuItem>Se déconnecter</MenuItem>
              </Link>
              <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </MenuItem>
              </Link>
              
            </>
          ) : (
            <>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <MenuItem>S'inscrire</MenuItem>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <MenuItem>Se connecter</MenuItem>
              </Link>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;