import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { FeedbackForm, FeedbackList, FeedbackStats, Header } from "./components";
import FeedbackData from "./data/feedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = id => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
