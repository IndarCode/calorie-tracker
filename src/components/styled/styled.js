import styled from "@emotion/styled";


// Buttons
export const PrimaryButton = styled.button`
    border: 1px solid ${props => props.theme.palette.primary[700]};
    background-color: ${props => props.theme.palette.primary[700]};
    padding: 0.8vw 2vw;
    font-size: 1vw;
    border-radius: 3px;
    margin: 0 0.5vw;
    min-width: 14vw;
    color: ${props => props.theme.palette.font[700]};
    text-transform: uppercase;
    :hover {
        border: 1px solid #ddd;
        background-color: #202020; 
        color: #fff;
    }
`

export const CancelButton = styled.button`
    border: none;
    background-color: #999;
    padding: 0.8vw 2vw;
    font-size: 1vw;
    border-radius: 0px;
    margin: 0 0.5vw;
    min-width: 14vw;
    text-transform: uppercase;
    :hover {
        border: 1px solid #666;
        background-color: #666; 
    }
`

export const SecondaryButton = styled.button`
    border: 1px solid ${props => props.theme.palette.primary[700]};
    background-color: transparent;
    padding: 0.8vw 2vw;
    font-size: 1vw;
    border-radius: 0px;
    margin: 0 0.5vw;
    min-width: 14vw;
    text-transform: uppercase;
    color: ${props => props.theme.palette.primary[700]};
    :hover {
        border: 1px solid ${props => props.theme.palette.primary[700]};
        background-color: ${props => props.theme.palette.primary[700]}; 
        color: ${props => props.theme.palette.font[0]};
    }
`


// Text

export const Heading = styled.h1`
    font-size: ${props => props.size ? props.size : '10vw'};
    line-height: 10vw;
`

export const Heading1 = styled.h1`
    font-size: 4vw;
    line-height: 4vw;
`
export const Heading2 = styled.h2`
    font-size: 3vw;
    line-height: 3vw;
`
export const Heading3 = styled.h3`
    font-size: 2.5vw;
    line-height: 2.5vw;
`
export const Heading4 = styled.h4`
    font-size: 2vw;
    line-height: 2vw;
`
export const Heading5 = styled.h5`
    font-size: 1.5vw;
    line-height: 1.5vw;
`
export const Paragraph = styled.p`
    font-size: 1.2vw;
    line-height: 1.2vw;
`

// Layout

export const FlexColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const FlexRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`