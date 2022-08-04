import { useState } from 'react'
import '../styles/Footer.css'



function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInputChange(e) {
		setInputValue(e.target.value)
	}

	function checkValue(value) {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
                value={inputValue}
				placeholder='Entrez votre mail'
				onChange={handleInputChange}
                onBlur={checkValue}
            />
		</footer>
	)
}

export default Footer