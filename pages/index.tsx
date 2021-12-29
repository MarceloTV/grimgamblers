import { NextPage } from "next";
import About from "../components/general/About";
import Footer from "../components/general/Footer";
import Header from "../components/general/Header";
import Members from "../components/general/Members";
import Sponsors from "../components/general/Sponsors";
import Titantron from "../components/general/Titantron";

const Index: NextPage = (props) => {
  return <>
    <Header />
    <Titantron />
    <About />
    <Members />
    <Sponsors />
    <Footer />
  </>
}

export default Index;
