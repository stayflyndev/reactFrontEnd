import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button} from "react-strap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from 'uuid';
import '../App.css';

class ShoppingList extends Component{
 state={
     items: [
         {id: uuid(), name: 'eggs'},
         {id: uuid(), name: 'potatoes'},
         {id: uuid(), name: 'toast'},
         {id: uuid(), name: 'grits'}
     ]
 }   

 render (){
     const { items } = this.state;
     return(
         <Container>
             <Button>Add Item </Button>

             </Container>
     );
 }

}


export default ShoppingList;