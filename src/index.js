import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css"
import PICASAPP from './PICASPP';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className=' mx-20 text-center text-6xl bg-slate-500 rounded-lg border-solid font-semibold'>TIMELESS TREASURES</div>
    <PICASAPP />
  </React.StrictMode>
);


