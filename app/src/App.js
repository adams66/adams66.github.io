import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/main/Main';

function App() {
	return (
		<main class="container-fluid">
			<Navbar />
			<div class="grid">
				<div>
					<article>
						<a href="https://adams66.github.io/home/">Portfoilo</a>
					</article>
				</div>
				<div>
					<article>
						<a href="https://adams66.github.io/royal-wildcat/">Royal Wildcat</a>
					</article>
				</div>
			</div>
		</main>
	);
}

export default App;
