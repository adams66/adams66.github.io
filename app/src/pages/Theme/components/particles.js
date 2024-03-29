import Key from '../../../key/key.json';
import "./particles.css";


function Particles(props) {
	document.documentElement.style.setProperty('--pColor', props.particleColor);
    


	return (
		<div style={{backgroundColor:Key.background}} class="wrapper">
			<div class="particle partical1" />
			<div class="particle partical2" />
			<div class="particle partical3" />
			<div class="particle partical4" />
		</div>
	);
}

export default Particles;
