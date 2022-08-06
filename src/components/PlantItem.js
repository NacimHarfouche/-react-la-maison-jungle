import CareScale from './CareScale'
import '../styles/PlantItem.css'

// set to Uppercase the first letter of the word => Capitalize
const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${capitalize(plantName)} ? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light, price }) {
	return (
		<li className='lmj-plant-item' >
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} onClick={() => handleClick(name)} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem