import styled from '@emotion/styled'

export const SectionWrap = styled.section`
padding-top: 100px;
width: 500px;
margin: 0 auto;
padding-bottom: 100px;`;

export const Title = styled.h2`   font-size: 24px;
padding-top: 20px;
padding-bottom: 20px;
font-size: 32px;
text-align: center;`;

export const List = styled.ul`display: flex;`;

const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
export const Item = styled.li`display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
height: 100px;
width: 800px;
gap: 10px;
align-items: center;
background-color: ${randColor};
` ;


