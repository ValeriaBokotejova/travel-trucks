import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import Loader from "../Loader/Loader.jsx";

const Home = lazy(() => import("../../pages/Home/Home.jsx"));
const Catalog = lazy(() =>
  import("../../pages/Catalog/Catalog.jsx")
);
const Details = lazy(() =>
  import("../../pages/Details/Details.jsx")
);

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id/*" element={<Details />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
