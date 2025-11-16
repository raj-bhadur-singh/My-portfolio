// ServiceCard.js
import React from 'react';
import styled from 'styled-components';

const ServiceCard = ({ number, icon, title, description }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="number">
          <p className="text">{number}</p>
        </div>
        <div className="icon">{icon}</div>
        <p className="heading">{title}</p>
        <p className="content">{description}</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    background: #0f0f0f;
    border-radius: 10px;
    padding: 50px 30px;
    position: relative;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px #22c55e44;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
  }

  .icon,
  .heading,
  .content {
    position: relative;
    z-index: 5;
    transition: all 0.5s;
    text-align: center;
  }

  .icon {
    width: 40px;
    margin: 0 auto 20px;
    color: #a3e635;
  }

  .heading {
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 20px;
    color: #fff;
  }

  .content {
    font-size: 14px;
    color: #d4d4d4;
  }

  .number {
    position: absolute;
    top: -90px;
    right: -85px;
    padding: 80px 100px 30px 30px;
    background: #a3e635;
    border-radius: 100%;
    z-index: 5;
  }

  .number .text {
    font-size: 28px;
    font-weight: 600;
    color: #0f0f0f;
  }

  .number::after {
    content: "";
    width: 50px;
    height: 50px;
    background: #a3e635;
    position: absolute;
    border-radius: 100%;
    top: 50%;
    right: 50%;
    transform: translateX(50%) translateY(-50%);
    z-index: -1;
    transition: all 0.5s;
  }

  .card:hover {
    scale: 1.02;
    box-shadow: 0 5px 20px #22c55e80;
  }

  .card:hover .number::after {
    width: 900px;
    height: 900px;
  }

  .card:hover .icon,
  .card:hover .heading,
  .card:hover .content {
    color: #f5f5f5;
    fill: #f5f5f5;
  }
`;

export default ServiceCard;
