import styled from "styled-components";

export const WrapperSelect = styled.div`
    width: ${props => props.width  ? props.width+"px" : "100%"};
    font-family: 'Calibri';
    position: relative;
`;

export const SelectInput = styled.div`
    border: 1px grey solid;
    border-radius: 8px;
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    span{
        font-size: 12px;
        font-weight: 600;
        margin: 0;
        padding: 0;
    }
    img{
        width: 14px;
        height: 14px;
        transform: ${props => props.visibility ? "rotate(180deg)" : "rotate(0deg)"};
        transition: transform 0.4s;
    }
`;

export const WrapperOptions = styled.div`
    width: ${props => props.width ? props.width+"px" : "100%"};
    visibility: ${props => props.visibility ? "visible" : "hidden"};
    opacity: ${props => props.visibility ? "1" : "0"};
    transform: ${props => props.visibility ? "translateY(4px)" : "translateY(0px)"};
    border: 1px grey solid;
    border-radius: 6px;
    position: absolute;
    transition: visibility 0.2s, opacity 0.6s, transform 0.4s;
`;

export const Options = styled.div`
    padding: 8px 12px;
    font-size: 12px;
    font-weight: 600;
    &:first-child{
        border-radius: 4px 4px 0 0;
    }
    &:last-child{
        border-radius: 0 0 4px 4px;
    }
    &:hover{
        background-color: gray;
        color: white;
    }
`;
