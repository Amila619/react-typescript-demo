// import Heading from "./components/Heading";
// import Button from "./components/Button";
// import Input from "./components/Input";
import Container from "./components/Container";

function App() {
  return (
    <>
      {/* <Heading>Hello</Heading> */}
      {/* <Button handleClick={(event) => console.log("Button Clicked", event)}/> */}
      {/* <Input value="" handleChange={(event => console.log(event))} /> */}
      <Container
        styles={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "#007bff",
        }}
      />
    </>
  );
}

export default App;
