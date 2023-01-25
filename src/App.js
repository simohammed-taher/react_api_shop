import React from 'react';
import Navbar from './compoenents/Navbar';
import ProductsList from './compoenents/ProductsList';
import Slider from './compoenents/Slider';
import { Routes, Route, Link } from 'react-router-dom';
import About from './compoenents/About';
import ProductDetails from './compoenents/ProductDetails';
function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Slider />
							<ProductsList />
						</>
					}
				/>
				<Route path='about' element={<About />} />
        <Route path='product/:productId' element={<ProductDetails />} />
			</Routes>
		</div>
	);
}

export default App;
