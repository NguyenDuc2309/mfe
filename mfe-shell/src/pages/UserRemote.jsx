import React from "react";
import RemoteBoundary from "../components/RemoteBoundary";

const UserApp = React.lazy(() => import("user/App"));

export default function UserRemote() {
  return (
    <RemoteBoundary>
      <React.Suspense fallback={<div>Loading User...</div>}>
        <UserApp />
      </React.Suspense>
    </RemoteBoundary>
  );
}
