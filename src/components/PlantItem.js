import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName, water, id, cover, light) {
	console.log(plantName, water, id, cover, light)
	alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function handleClickWater(value) {
	console.log(value)
}

// function handleClickLight() {

// }

function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item' >
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} onClick={() => handleClick(name, water, id, cover, light)} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} onClick={() => handleClickWater(water)} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem