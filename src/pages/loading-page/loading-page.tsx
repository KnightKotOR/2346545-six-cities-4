import { useState, CSSProperties } from 'react';

import ClipLoader from 'react-spinners/ClipLoader';


const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

function LoadingScreen() {
  const [loading] = useState(true);
  const [color] = useState('#ffffff');

  return (
    <div className="sweet-loading">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoadingScreen;
