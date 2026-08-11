import Header from "./components/Header";
import Button from "./components/Button";
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  return (<>
    <Header></Header>
    <Button color="primary" onClick={()=>{console.log("Clicked")}}>Przycisk</Button>
  </>)
}

export default Home