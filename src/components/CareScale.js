import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function handleClickWater(value, type) {
    switch (value) {
        case 2:
            value = "modérement"
            break;
        case 3:
            value = "beaucoup"
          break;
        default:
            value = "peu"
    }
    
	type = type === 'light' ? "lumière" : "d'arrosage"

    alert(`Cette plante requiert ${value} de ${type}`)
}

function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3]
    const scaleType = 
        careType === 'light' 
            ? <img src={Sun} alt="sun-icon" /> 
            : <img src={Water} alt="water-icon" />

    return (
        <div onClick={() => handleClickWater(scaleValue, careType)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale;