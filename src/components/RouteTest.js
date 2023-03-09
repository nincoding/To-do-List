import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      <Link to={'/'}>Home</Link>
      <br/>
      <Link to={'/calender'}>Calender</Link>
      <br/>
      <Link to={'/graph'}>Graph</Link>
    </>
  )
}

export default RouteTest;