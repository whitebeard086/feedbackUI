import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AboutIconLink, FeedbackForm, FeedbackList, FeedbackStats, Header } from "./components";
import FeedbackData from "./data/feedbackData";
import About from "./pages/About";

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
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              </>
            }></Route>
          <Route path="/about" element={<About />} />
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
