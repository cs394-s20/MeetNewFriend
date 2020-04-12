import React from "react";
import { Button,Navbar,NavbarDropdown, Container} from "rbx";
import { Link } from "react-router-dom";
import "../../styles/HeaderBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const HeaderBar = ({ title }) => (
<Navbar color='primary' variant="dark">
<Navbar.Brand text-align='center'>
    
    <Container>
    <Button>
        Back
    </Button> 
    </Container>   
    {title}


</Navbar.Brand>  
</Navbar>        
);

export default HeaderBar;
