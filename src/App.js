import { useState } from "react";
import { FeedbackList, Header } from "./components";
import FeedbackData from "./data/feedbackData";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
