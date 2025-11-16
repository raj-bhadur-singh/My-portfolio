import React from 'react';
import styled from 'styled-components';

const Button = ({ icon }) => {
  return (
    <StyledWrapper>
      <button className="btn">{icon}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    display: grid;
    place-items: center;
    background: #e3edf7;
    padding: 1.4em;
    border-radius: 10px;
    box-shadow: 
      6px 6px 10px -1px rgba(0, 0, 0, 0.5),
     -6px -6px 10px -1px rgba(220, 220, 220,); /* soft gray */
    border: 1px solid rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: transform 0.5s, box-shadow 0.5s;
  }

  .btn:hover {
    box-shadow: 
      inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
      inset -4px -4px 6px -1px rgba(220, 220, 220, 0.4),
      -0.5px -0.5px 0px rgba(220, 220, 220, 0.8),
      0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
      0px 8px 6px -6px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transform: translateY(0.5em);
  }

  .btn svg {
    transition: transform 0.5s;
  }

  .btn:hover svg {
    transform: scale(0.9);
    fill: #333333;
  }
`;

export default Button;
