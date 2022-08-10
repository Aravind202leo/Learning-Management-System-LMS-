import React, { useState } from 'react';
import { Data } from './data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './faq.css';
const AccordionSection = styled.div `
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
height:100vh;
margin-bottom:20px;
background:#fff;
h3{
color:black;
}
`;

const Container = styled.div `
position:absolute;
top:30%;
box-shadow:2px 10px 35px 1px rgba(153,153,153,0.3);
`;

const Wrap = styled.div `
background:#4169e1;
color:#fff;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
text-align:center;
cusrsor:pointer;
h3{
    padding:2rem;
    font-size:1rem;

}
`;

const Dropdown = styled.div `
background:#1c1c1c;
color:white;
width:100%;
height:100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-bottom:1px solid #00ffb9;
border-top:1px solid #00ffb9;

p{
    font-size:20px;
    padding:25px;
    
}
`;

const Faq = () => {

    const [clicked, setclicked] = useState(false);
    const toggle = index => {
        if (clicked === index) {
            return setclicked(null);
        }

        setclicked(index);
    }

    return ( < > <IconContext.Provider value = {
            { color: 'blue', size: '25px' }
        } >
        < h3 > FAQ </h3>  <AccordionSection >
        <Container > {
            Data.map((item, index) => {
                return ( < >
                    <Wrap onClick = {
                        () => toggle(index)
                    }
                    key = { index } >
                    <h3 > < b > { item.question } </b> </h3 >
                    <span > { clicked === index ? < FiMinus /> : < FiPlus /> } </span> </Wrap > {
                        clicked === index ? ( <
                            Dropdown >
                            <p > { item.answer } </p> </Dropdown > ) : null
                    } </>
                );
            })
        } </Container> </AccordionSection > </IconContext.Provider >
        </>
    )
}
export default Faq;