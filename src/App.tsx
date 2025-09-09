// import Heading from "./components/Heading";
// import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <>
      {/* <Heading>Hello</Heading> */}
      {/* <Button handleClick={(event) => console.log("Button Clicked", event)}/> */}
      <Input value="" handleChange={(event => console.log(event))} />
    </>
  );
}

export default App;
