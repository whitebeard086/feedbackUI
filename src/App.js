import { useState } from "react";
import { FeedbackList, Header } from "./components";
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
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
