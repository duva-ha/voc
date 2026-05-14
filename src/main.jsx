import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * ReactDOM.createRoot: Khởi tạo điểm bắt đầu cho ứng dụng React.
 * document.getElementById('root'): Tìm thẻ div có id="root" trong file index.html.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
