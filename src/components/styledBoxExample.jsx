import React from 'react';
import styled from 'styled-components';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

function styledComponents(theme) {
    const Box = styled.div`
        display: inline-flex;
        flex-direction: column;
        margin: 1rem;
        padding: 1.5rem;
        background-color: ${theme.bgColor};
        align-items: center;
        border-radius: 5px;
    `

    const BoxName = styled.h5`
            color: ${theme.textColor};
            font-weight: 700;
            font-size: 1.2rem;
            margin-top: 0;
            margin-bottom: 1rem;
        `

    const BoxButton = styled.button`
        color: ${theme.textColor};
        border: none;
        background-color: ${theme.uiColor};
        padding: 1rem 2rem;
        font-size: 1.5rem;
        border-radius: 5px;
    `

    return {Box, BoxName, BoxButton}
}
  

class styledBoxExample extends React.Component {

    render() {
        return (
            <AuthContext.Consumer>{(authContext) => { return (
                <ThemeContext.Consumer>{(styleContext) => {
                    const {isLightTheme, dark, light} = styleContext;
                    const theme = isLightTheme ? light : dark;
                    const {Box, BoxName, BoxButton} = styledComponents(theme);

                    const { toggleAuth } = authContext;
                    return (
                        <Box>   
                            <BoxName>I'm a styled authentification box!</BoxName>
                            <BoxButton onClick={toggleAuth}>toggle auth</BoxButton>
                        </Box>
                    )
                }}
                </ThemeContext.Consumer>
            )}}
            </AuthContext.Consumer>    
        )
    }
    
}

export default styledBoxExample;