module.exports.setVisibleHeight = (varName = 'visible-height') => {
	const setVisibleHeight = () =>
		document.documentElement.style.setProperty(`--${varName}`, `${window.innerHeight / 100}px`)
	setVisibleHeight()
	window.addEventListener('resize', setVisibleHeight)
}
