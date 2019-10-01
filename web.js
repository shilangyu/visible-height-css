function setVisibleHeight(varName) {
	varName = varName || 'visible-height'
	function setVisibleHeight() {
		document.documentElement.style.setProperty('--' + varName, window.innerHeight / 100 + 'px')
	}
	setVisibleHeight()
	window.addEventListener('resize', setVisibleHeight)
}
