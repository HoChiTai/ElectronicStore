import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StoreProvider } from './Store';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<StoreProvider>
			<PayPalScriptProvider>
				<App />
			</PayPalScriptProvider>
		</StoreProvider>
	</React.StrictMode>
);
