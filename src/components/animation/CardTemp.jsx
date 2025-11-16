import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import styled from 'styled-components';

const CardTemp = ({ img, heading, para, previewLink, githubLink }) => {
    return (
        <StyledWrapper>
            <div className="card">
                <img src={img} alt={heading} className="card__image" />

                <div className="card__content">
                    <p className="card__title">{heading}</p>
                    <p className="card__description">{para}</p>

                    <div className="card__buttons">
                        {previewLink && (
                            <a href={previewLink} className="card__btn" target="_blank" rel="noopener noreferrer">
                                <FiExternalLink className="btn-icon" />
                                <span>Preview</span>
                            </a>
                        )}
                        {githubLink && (
                            <a href={githubLink} className="card__btn secondary" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="btn-icon" />
                                <span>GitHub</span>
                            </a>
                        )}
                    </div>

                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  
  .card:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 24px rgba(255, 255, 255, 0.15);
  }

  .card {
  position: relative;
  width: 100%;
  min-height: 300px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  padding: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  display: flex;                /* ✅ add */
  align-items: center;          /* ✅ vertical center */
  justify-content: center;      /* ✅ horizontal center */
}

.card__image {
  display: block;               /* ✅ correct typo (was "isplay") */
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 12px;
  opacity: 0.6;
}

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    font-size: 24px;
    color: #6257aa;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .card__description {
    font-size: 16px;
    color: #ccc;
    flex: 1;
    line-height: 1.5;
  }

.card__buttons {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 24px;
  width: 100%;
  align-items: center;
}

.card__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 90%;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  border-radius: 999px;
  border: 1.5px solid #8a80ff;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: inset 0 0 0 0 transparent;
}

.card__btn:hover {
  background-color: #8a80ff;
  color: #fff;
  box-shadow: 0 0 12px #8a80ff80, 0 0 24px #8a80ff40;
  transform: scale(1.03);
}

.card__btn.secondary {
  background-color: transparent;
  color: #8a80ff;
  border: 1.5px solid #8a80ff;
}

.card__btn.secondary:hover {
  background-color: #8a80ff;
  color: #fff;
}

.btn-icon {
  font-size: 1.2rem;
}


@media (max-width: 600px){
  .card__description {
    font-size: 14px;
  }

  .card__btn {
  }

}

@media (max-width: 400px){
  .card__description {
    font-size: 12px;
  }
}

`;

export default CardTemp;
