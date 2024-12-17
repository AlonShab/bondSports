import styled from "styled-components";

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f3f3f3;
`;

export const AppView = styled.div`
    height: 760px;
    width: calc(100% - 240px);
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    
    > .title {
        color: white;
        background-color: ${props => props.theme.colors.primary};
        margin-top: 0;
        padding: 10px 20px;
    }
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100% - 60px);
    margin: 0 30px;
    height: 650px;
    gap: 10px;
    
    > div {
        border: 1px solid black;
        width: 50%;
    }
`;