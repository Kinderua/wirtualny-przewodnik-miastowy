import Header from "./components/Header";
import Button from "./components/Button";
import Alert from "./components/Alert";
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  return (<>
    <Header></Header>
    <Button color="secondary" onClick={()=>{return <Alert></Alert>}}>Button</Button>
  </>)
}

export default Home 