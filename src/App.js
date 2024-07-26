import "./App.css";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";

function App() {
  return (
    <div className="App">
      <h1>Review System</h1>
      <ReviewForm />
      <ReviewList />
    </div>
  );
}

export default App;
