import React from 'react';
import styled from 'styled-components';

const TextBox = () => {
    return (
        <StyledWrapper>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1228 780" height={780} width={1228}> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1228 780" height={500} width={1000}>

                <g id="Frame">
                    <g id="box-figma">
                        <g id="text">
                            {/* Texts remain unchanged, only spacing (y) can be adjusted as needed */}
                            <text x="100" y="140" fill="white" fontSize="60" fontFamily="sans-serif" fontWeight="bold">
                                Java Full Stack Developer Intern
                            </text>
                            <text x="100" y="190" fill="#60A5FA" fontSize="45" fontFamily="sans-serif">
                                TechVistra, Pune • Nov 2024 – Apr 2025
                            </text>
                            <text x="100" y="260" fill="white" fontSize="35" fontFamily="sans-serif">
                                • Developed full-stack apps with Spring Boot & React.js
                            </text>
                            <text x="100" y="310" fill="white" fontSize="35" fontFamily="sans-serif">
                                • Built responsive, SEO-optimized corporate site
                            </text>
                            <text x="100" y="360" fill="white" fontSize="35" fontFamily="sans-serif">
                                • Created reusable React components for dynamic UI
                            </text>
                            <text x="100" y="410" fill="white" fontSize="35" fontFamily="sans-serif">
                                • Secured REST APIs with authentication & SQL tuning
                            </text>
                        </g>

                        {/* Blue Box */}
                        <g id="box">
                            <path strokeWidth={4} stroke="#2563EB" fillOpacity="0.05" fill="#2563EB" d="M1174 40H56V612H1174V40Z" />
                            <path strokeWidth={4} stroke="#2563EB" fill="white" d="M66 30H46V50H66V30Z" />
                            <path strokeWidth={4} stroke="#2563EB" fill="white" d="M66 602H46V622H66V602Z" />
                            <path strokeWidth={4} stroke="#2563EB" fill="white" d="M1184 602H1164V622H1184V602Z" />
                            <path strokeWidth={4} stroke="#2563EB" fill="white" d="M1184 30H1164V50H1184V30Z" />
                        </g>

                        {/* Cursor */}
                        <g id="cursor">
                            <path strokeWidth={2} stroke="white" fill="#2563EB" d="M906.766 686L896 634L942 662L919.49 667L906.766 686Z" />
                            <path fill="#2563EB" d="M1174 686H939.864V752H1174V686Z" />
                            <text
                                x="1056"
                                y="724"
                                fill="white"
                                fontSize="26"
                                fontFamily="Segoe UI, sans-serif"
                                textAnchor="middle"
                                alignmentBaseline="middle"
                            >
                                Raj bhadur singh
                            </text>
                        </g>
                    </g>
                </g>
            </svg>

        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  #cursor,
  #box,
  #text {
    cursor: pointer;
  }

  #cursor {
    overflow: visible;
    transform: translate3d(300px, 0, 0) scale(1);
    transform-origin: center center;
    transform-box: fill-box;
    animation: cursor 5s ease infinite alternate;
  }

  @keyframes cursor {
    0% { opacity: 0; transform: translate3d(300px, 0, 0) scale(1); }
    30% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
    60% { opacity: 1; transform: translate3d(-200px, -200px, 0) scale(1); }
    65% { opacity: 1; transform: translate3d(-200px, -200px, 0) scale(0.95); }
    70% { opacity: 1; transform: translate3d(-200px, -200px, 0) scale(1); }
    100% { opacity: 1; transform: translate3d(-300px, -50px, 0) scale(1); }
  }

  #box {
    opacity: 0;
    animation: box 5s ease infinite alternate;
  }

  @keyframes box {
    0%, 60% { opacity: 0; }
    65%, 100% { opacity: 1; }
  }
`;

export default TextBox;
