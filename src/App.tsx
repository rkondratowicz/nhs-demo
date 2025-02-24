import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import SomeTable from "./pages/SomeTable";
import EnterDataManually from "./pages/EnterDataManually";
import ReviewEntry from "./pages/ReviewEntry";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<SomeTable />} />
        <Route path="enter-data-manually" element={<EnterDataManually />} />
        <Route path="review-entry" element={<ReviewEntry />} />
      </Route>
    </Routes>
  );
}

export default App;
