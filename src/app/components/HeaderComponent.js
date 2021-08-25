import React,{Component} from 'react';

//Import Navbar and NavbarBrand components from reactstrap
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Form, Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component{
  constructor(props){
      super(props)

      this.state = {
          isNavOpen: true,
          isModalOpen: false    
      };
      this.toggleNav = this.toggleNav.bind(this);
      this.ButtonOptions = this.ButtonOptions.bind(this);
  };


  toggleNav(){
      this.setState({
          isNavOpen: !this.state.isNavOpen
      });
  };

  ButtonOptions(){
      console.log("======> Buttons Options Clicked");
  };

	handlelogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + "Password: " + this.password.value +
            "Remember: " + this.remember.checked);
        event.preventDefault();
    }

  render(){
      return(
          	<div>
              	<Navbar light expand="md">
          			<div className="container">
            			<div className='row'>
                            <NavbarBrand className="mr-auto" href="/">
                          	    <img src="assets/images/logo.png" height="60" width="60"
                              alt="Gestor Académico"/>
                      	    </NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} color="faded" className="col-12 col-sm-6"/>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                          	<Nav navbar>
								<NavItem>
                                    <NavLink className="nav-link" to="/admin">
                                        <span className="fa fa-home fa-lg"></span> Administradores
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/profesores">
                                        <span className="fa fa-info fa-lg"></span> Profesores
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/estudiantes">
                                        <span className="fa fa-list fa-lg"></span> Estudiantes
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/nosotros">
                                        <span className="fa fa-addres-card fa-lg"></span> Sobre Nosotros
                                    </NavLink>
                                </NavItem>
                            </Nav>
                      	</Collapse>   
                        </div>
                      	
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                  	<Button outline onClick={this.ButtonOptions}>
                                      	<span className="fa fa-sign-in fa-lg"> Botón para hacer algo</span>
                                  	</Button>
                              	</NavItem>
                          	</Nav>
          			</div>
      			</Navbar>
              
              	<Jumbotron>
                  	<div className="container">
                      	<div className="row row-header">
                          	<div className="col-12 col-sm-6">
                             	 <h1>Gestor Academico</h1>
                              	<p>Administrar sus programas, notas y estudiantes dejelo en nuestra manos</p>
                          	</div>
                      	</div>
                  	</div>
              	</Jumbotron>			
          	</div>
      );
  }
}

/**
* Nota: React.fragment se puede representar como <React.Fragment>   </>
*/

export default Header