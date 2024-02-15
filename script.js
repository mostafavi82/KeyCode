let $ = document
let locationKey = $.querySelector('#location')
let title = $.querySelector('title')
let keyCode = $.querySelector('#keyCode')
let key = $.querySelector('#key')
let which = $.querySelector('#which')
let code = $.querySelector('#code')

document.body.addEventListener('keydown', function (event) {
	let button = event.key
	keyCode.innerHTML = button.charCodeAt(0)
	key.innerHTML = button
	locationKey.innerHTML = event.location
	which.innerHTML = button.charCodeAt(0)
	code.innerHTML = event.code
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
})
