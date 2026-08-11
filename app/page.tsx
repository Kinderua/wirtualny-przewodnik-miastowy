"use client";

import Header from "./components/Header";
import Button from "./components/Button";
import Alert from "./components/Alert";
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {

  const [isActive,setIsActive] = useEffect(false)

  return (<>
    <Header></Header>
    <Button color="secondary">Button</Button>
  </>)
}

export default Home 