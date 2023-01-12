import styled from 'styled-components';
import './App.css';
import LeftImage from './component/LeftImage';
import RightSide from './component/RightSide';

function App() {
  return (
    <Container>
      <LeftImage/>
      <RightSide/>
    </Container>
  );
}
export default App;
const Container = styled.div`
  display:flex;
  justify-content:space-between;
  height:100vh;
  align-items:center;
  padding:0vw 10vw;
  @media (max-width:1300px){
    padding:0px 10px;
  }
  @media(max-width:1070px){
    flex-direction:column;
  }
`