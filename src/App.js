import { useState } from "react";
import { FeedbackList, FeedbackStats, Header } from "./components";
import FeedbackData from "./data/feedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = id => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
