import React, { Suspense } from 'react';

const OtherComponent = React.lazy();

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>you</h1>
      </Suspense>
    </div>
  );
}
export default App;