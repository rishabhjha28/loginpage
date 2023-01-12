import styled from 'styled-components';

const LeftImage = () => {
  return (
    <Container>
        <Img src='./image.jpg' alt='image'/>
    </Container>
  )
}
export default LeftImage

const Container = styled.div({
    
})
const Img = styled.img`
    width:543px;
    @media(max-width:1070px){
        margin-top:0.5rem;
    };
    @media(max-width:550px){
        width:90vw;
    };
`
    