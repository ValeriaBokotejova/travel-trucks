import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import Loader from "../Loader/Loader.jsx";

const Home = lazy(() => import("../../pages/Home/Home.jsx"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog.jsx"));
const Details = lazy(() => import("../../pages/Details/Details.jsx"));

const DetailsFeatures = lazy(() =>
  import("../DetailsFeatures/DetailsFeatures.jsx")
);
const Reviews = lazy(() => import("../Reviews/Reviews.jsx"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />

          <Route path="/catalog/:id" element={<Details />}>
            <Route index element={<Navigate to="features" replace />} />
            <Route path="features" element={<DetailsFeatures />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
