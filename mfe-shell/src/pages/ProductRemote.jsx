import React from "react";
import RemoteBoundary from "../components/RemoteBoundary";

const ProductApp = React.lazy(() => import("product/App"));

export default function ProductRemote() {
  return (
    <RemoteBoundary>
      <React.Suspense fallback={<div>Loading Product...</div>}>
        <ProductApp />
      </React.Suspense>
    </RemoteBoundary>
  );
}
