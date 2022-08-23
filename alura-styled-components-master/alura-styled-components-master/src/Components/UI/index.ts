import styled from "styled-components";
import React from 'react'

export const ImageIcon = styled.img `
  height: 25px;
  width: 25px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;
  background-color: white;

  button{
    margin: 15px auto 0px auto;
    display: block;
    border-radius: 20px;
    border: none;
    font-weight: 600;
    font-size: 14px;
    padding: 8px 20px;
    cursor: pointer;
    color: white;
    background-color: #41d3be;
    img{
      margin-top: 2px; 
    }
  }

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }

`;
