import { lazy, Suspense } from "react";

const MyApp = lazy(() => import("Remote/App"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <MyApp />
      </Suspense>
      <h1>Host</h1>
    </div>
  );
};

export default App;
