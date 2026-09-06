import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "@/App"
import { LanguageProvider } from "@/i18n/LanguageContext"
import { MotionPreferenceProvider } from "@/motion/MotionPreference"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <MotionPreferenceProvider>
        <App />
      </MotionPreferenceProvider>
    </LanguageProvider>
  </StrictMode>,
)
