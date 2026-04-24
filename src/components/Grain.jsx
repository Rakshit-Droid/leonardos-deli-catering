import React from 'react';

const Grain = React.memo(function Grain() {
  return <div className="grain-layer" aria-hidden="true" />;
});

export default Grain;
