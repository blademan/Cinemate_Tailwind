import { FooterC, Header } from './components'
import { AllRoutes } from './routes/AllRoutes'
function App() {
	return (
		<div className='dark:bg-darkbg'>
			<Header />
			<AllRoutes />
			<FooterC />
		</div>
	)
}

export default App
