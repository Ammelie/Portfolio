window.onload = () => {
	let portrait = document.getElementById('portrait2')

	portrait.onmouseover = () => {
		portrait.classList.toggle('smile')
		window.setTimeout(() => {
			portrait.classList.toggle('smile')
		}, 1500)
	}
}
