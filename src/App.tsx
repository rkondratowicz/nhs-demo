import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import SomeTable from "./pages/SomeTable";
import EnterDataManually from "./pages/EnterDataManually";
import ReviewEntry from "./pages/ReviewEntry";
import Batches from "./pages/Batches";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Batches />} />
        <Route path="enter-data-manually" element={<EnterDataManually />} />
        <Route path="review-entry" element={<ReviewEntry />} />
        <Route path="batches" element={<Batches />} />
        <Route path="batches/1" element={<SomeTable />} />
      </Route>
    </Routes>
  );
}

export default App;
