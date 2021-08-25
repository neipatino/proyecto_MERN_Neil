import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Header from './HeaderComponent';


class Main extends Component {
	constructor(props){
		super(props);
	}

  	componentDidMount(){
    //Pendiente
  	}

  	render(){
    	return(
    		<div>
        		<Header/>
        		<h1>Pendiente por hacer</h1>
      		</div>
    	);
  	}
}

export default Main;