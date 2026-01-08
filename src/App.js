import "./App.css";
import CardsApi from "./Component/CardsApi";
import Context from "./Component/Context";
import ImageApi from "./Component/ImageApi";
import InputHandle from "./Component/InputHandle";
import Postman from "./Component/Postman";
import ReactApi from "./Component/ReactApi";
import Task1 from "./Component/Task1";
import Task2 from "./Component/Task2";
import Task3 from "./Component/Task3";
import Task4 from "./Component/Task4";
import Task5 from "./Component/Task5";
import About from "./Router/About";
import Contact from "./Router/Contact";
// import Footer from "./Router/Footer";
// import Header from "./Router/Header";
import Home from "./Router/Home";
// import Layout from "./Router/Layout";
// import StateTask1 from "./Component/StateTask1";
// import StateTask2 from "./Component/StateTask2";
// import First from "./Component/First";
// import Api from "./Component/Api";
// import StateExample from "./Component/StateExample";
// import Bootstrap from "./Component/Bootstrap";
// import PropsExample from "./Component/PropsExample";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App main">
        {/* <Postman></Postman> */}
        {/* <ImageApi></ImageApi> */}
        <CardsApi></CardsApi>
        {/* <Context></Context> */}

        {/* <table border={2}>
        <tr>
          <td>No</td>
          <td>Name</td>
          <td>Maths</td>
          <td>Science</td>
          <td>Physics</td>
          <td>English</td>
          <td>Gujarati</td>
          <td>Total</td>
          <td>Percentage</td>
          <td>Grade</td>
          <td>Minimum</td>
          <td>Maximum</td>
        </tr>
        <First
          No="1"
          Name="Pratik"
          Maths="65"
          Science="77"
          Physics="56"
          English="76"
          Gujarati="67"
        />
        <First
          No="2"
          Name="Parth"
          Maths="60"
          Science="57"
          Physics="76"
          English="73"
          Gujarati="58"
        />
        <First
          No="3"
          Name="Raj"
          Maths="75"
          Science="67"
          Physics="50"
          English="76"
          Gujarati="67"
        />
        <First
          No="4"
          Name="Parin"
          Maths="75"
          Science="57"
          Physics="70"
          English="66"
          Gujarati="47"
        />
        <First
          No="5"
          Name="Sujal"
          Maths="95"
          Science="47"
          Physics="56"
          English="69"
          Gujarati="80"
        />
      </table> */}
        {/* // <Api
        //   imageUrl="https://rickandmortyapi.com/api/character/avatar/165.jpeg"
        //   cardName="Investigator Rick"
        //   dead="Dead : Human"
        //   last="Lasr known  location :"
        //   location="Citadel Ricks"
        //   first="First seen in :"
        //   seen="The Ricklantis Mixup"
        // /> */}
        {/* <StateExample></StateExample> */}
        {/* <StateTask1 /> */}
        {/* <StateTask2 /> */}
        {/* <Bootstrap></Bootstrap> */}
        {/* <PropsExample></PropsExample> */}
        {/* <InputHandle></InputHandle> */}
        {/* <Task1></Task1> */}
        {/* <Task2 /> */}
        {/* <Task3></Task3> */}
        {/* <Task4></Task4>/ */}
        {/* <Task5></Task5> */}
        {/* <ReactApi /> */}
      </div>
      {/* <Router>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
