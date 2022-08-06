import { useState } from 'react'
import { plantList } from '../datas/plantList'

function Categories() {
    const [selectCategorie, setSelectCategorie] = useState(0)
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return (
        <select>
            <option onSelect={}>
            {categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
            </option>
        </select>
    )
}

export default Categories