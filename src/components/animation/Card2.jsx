import React from 'react';
import styled from 'styled-components';

const Card2 = ({ img, heading, para }) => {
    return (
        <StyledWrapper>
            <div className="card">
                <img src={img} alt={heading} className="imgBox" />
                <div className="textBox">
                    <p className="text head">{heading}</p>
                    <span>{para}</span>
                    <p className="text price">1.654,34€</p>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    aspect-ratio: 4 / 5;
    background: rgba(0, 0, 0, 0.4);       /* translucent black base */
    backdrop-filter: blur(12px);         /* apply blur across the card */
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
    color: white;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  }

  .imgBox {
    position: absolute;
    width: full;
    height: full;
    object-fit: cover;
    transition: 0.3s ease-in-out;
    z-index: 0;
    opacity: 1;
  }

  .textBox {
    position: absolute;
    opacity: 0;                      /* hide by default */
    z-index: 1;
    text-align: center;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .textBox > .text {
    font-weight: bold;
  }

  .textBox > .head {
    font-size: 1.25rem;
  }

  .textBox > .price {
    font-size: 1rem;
    color: #ddd;
  }

  .textBox > span {
    font-size: 0.75rem;
    color: #bbb;
  }

  .card:hover .textBox {
    opacity: 1;
  }

  .card:hover .imgBox {
    filter: blur(5px);
    transform: scale(1.05);
    animation: floatAnim 3s infinite;
    opacity: 0.4;
  }

  .card:hover {
    transform: scale(1.03) rotate(-1deg);
  }

  .tag {
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: white;
    color: #333;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 600;
    z-index: 2;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  @keyframes floatAnim {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;



// const StyledWrapper = styled.div`
//   .card {
//     width: 100%;
//     aspect-ratio: 4 / 5;
//     background: #313131;
//     border-radius: 20px;
//     position: relative;
//     overflow: hidden;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     transition: 0.3s ease-in-out;
//     color: white;
//   }

//   .imgBox {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: 0.3s ease-in-out;
//     z-index: 1;
//   }

//   .textBox {
//     position: absolute;
//     opacity: 0;
//     z-index: 2;
//     text-align: center;
//     transition: 0.3s ease-in-out;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     gap: 10px;
//   }

//   .textBox > .text {
//     font-weight: bold;
//   }

//   .textBox > .head {
//     font-size: 1.25rem;
//   }

//   .textBox > .price {
//     font-size: 1rem;
//   }

//   .textBox > span {
//     font-size: 0.75rem;
//     color: lightgrey;
//   }

//   .card:hover .textBox {
//     opacity: 1;
//   }

//   .card:hover .imgBox {
//     filter: blur(5px);
//     transform: scale(1.05);
//     animation: floatAnim 3s infinite;
//   }

//   .card:hover {
//     transform: scale(1.03) rotate(-1deg);
//   }

//   @keyframes floatAnim {
//     0% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(-10px);
//     }
//     100% {
//       transform: translateY(0);
//     }
//   }
// `;

export default Card2;
