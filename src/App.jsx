import CustomButton from "react-button-test-publish";
// import "./App.css";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <CustomButton onClick={handleClick} variant="primary">
        Primary Button
      </CustomButton>
      <CustomButton onClick={handleClick} variant="secondary">
        Secondary Button
      </CustomButton>
      <CustomButton onClick={handleClick} variant="success">
        Success Button
      </CustomButton>
      <CustomButton onClick={handleClick} variant="danger">
        Danger Button
      </CustomButton>
    </div>
  );
}

export default App;
