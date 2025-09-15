import React from "react";
import RemoteBoundary from "../components/RemoteBoundary";

const OrderApp = React.lazy(() => import("order/App"));

export default function OrderRemote() {
  return (
    <RemoteBoundary>
      <React.Suspense fallback={<div>Loading Order...</div>}>
        <OrderApp />
      </React.Suspense>
    </RemoteBoundary>
  );
}
