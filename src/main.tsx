import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import { parseAmplifyConfig } from "aws-amplify/utils";

Amplify.configure(parseAmplifyConfig(outputs));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
