import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'
import App from './App.jsx'
import './index.scss'
import MobileMenuProvider from './contextApi/MobileMenuContext.jsx'
import OffCanvasProvider from './contextApi/OffCanvasContext.jsx'
import ScrollHideProvider from './contextApi/ScrollHideContext.jsx'
import PropertyFilterProvider from './contextApi/PropertyFilterContext.jsx'
import ServerlessEmailService from './services/emailServiceServerless.js'

// Initialize Nodemailer email service
ServerlessEmailService.init()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <PropertyFilterProvider>
        <ScrollHideProvider>
          <OffCanvasProvider>
            <MobileMenuProvider>
              <App />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </MobileMenuProvider>
          </OffCanvasProvider>
        </ScrollHideProvider>
      </PropertyFilterProvider>
    </HelmetProvider>
  </React.StrictMode>
)
