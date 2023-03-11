import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  
  background-color: black;
  border-top: 1px solid #e2e2e2;
`

const MyFooter = () => {
  return (
    <Footer>
    <footer>
      <Link to={'/'}>Home</Link>
      <br/>
      <Link to={'/calender'}>Calender</Link>
      <br/>
      <Link to={'/graph'}>Graph</Link>
    </footer>
    </Footer>
  )
}

export default MyFooter;