import styled from 'styled-components';

//tagged template literal
//
const MyButton = styled.button`
   backgroundColor: blue;
   color: white;
   width: 100%;

   &:focus {
     backgroundColor: white;
     color: blue;
   }

    @media (min-width:768px){
        width: auto;
    }
`;


export default MyButton;