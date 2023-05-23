import styled from 'styled-components';


export const Card = styled.div`
  border-radius: 7px;
  background-color: ${props => props.bg || 'transparent'};
  display: block;
  width: auto;
  height: ${props => props.height || 'auto'};
  border: 1px solid grey;
  margin-bottom: 10px;
  color: black;
  
`;
export const CardBody = styled.div`
  padding: ${props => props.padding || '14px'};
`;
export const CardImage = styled.img`
  width: 100%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;
export const CardTitle = styled.h4`
  text-align: center;
  display: block;
`;
