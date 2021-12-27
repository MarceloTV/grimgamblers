import { NextPage } from "next";
import About from "../components/general/About";
import Header from "../components/general/Header";
import Members from "../components/general/Members";
import Titantron from "../components/general/Titantron";

const Index: NextPage = (props) => {
  return <>
    <Header />
    <Titantron />
    <About />
    <Members />
  </>
}

export default Index;
