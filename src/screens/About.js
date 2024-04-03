import React,{Component} from 'react';
import {CardText, CardTitle} from 'react-bootstrap';

class About extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="Heading"></div>
                <div className="container">
                    <CardTitle>Sobre</CardTitle>
                    <CardText>O QueroPet é uma iniciativa que visa abordar os desafios enfrentados pelos animais abandonados e desabrigados, fornecendo uma plataforma centralizada e acessível para facilitar o processo de adoção. Ao oferecer uma interface intuitiva e recursos abrangentes, o aplicativo QueroPet busca tornar a experiência de adoção de animais mais transparente, eficiente e gratificante tanto para adotantes quanto para os próprios animais.</CardText>
                </div>
            </div>
        );
    }
}

export default About;