import styled from 'styled-components';

export const Modal = styled.div`
    position: fixed;
    width: 500px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 30px;
    z-index: 1000;
`
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1000;
`