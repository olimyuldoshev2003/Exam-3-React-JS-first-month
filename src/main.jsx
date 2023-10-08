import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './18n'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="text-center text-[25px] text-[#212B31]">
          ...Loading
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>
);
