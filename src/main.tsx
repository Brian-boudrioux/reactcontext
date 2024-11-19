import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'
import BasketProvider from './context/basket.tsx'
import ThemeProvider from './context/theme.tsx'
import './index.css'

createRoot(document.getElementById("root") || document.body).render(
	<StrictMode>
		<ThemeProvider>
			<BasketProvider>
				<RouterProvider router={router} />
			</BasketProvider>
		</ThemeProvider>
	</StrictMode>,
);
