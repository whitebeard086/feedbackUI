import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutIconLink, FeedbackForm, FeedbackList, FeedbackStats, Header } from "./components";
import About from "./pages/About";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }></Route>
            <Route path="/about" element={<About />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
