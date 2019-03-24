(() => {

  // Spinner taken from https://icons8.com/preloaders/en/free
  const svgSpinnerMarkup = `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><circle cx="16" cy="64" r="16" fill="#788ca5" fill-opacity="1"/><circle cx="16" cy="64" r="14.344" fill="#788ca5" fill-opacity="1" transform="rotate(45 64 64)"/><circle cx="16" cy="64" r="12.531" fill="#788ca5" fill-opacity="1" transform="rotate(90 64 64)"/><circle cx="16" cy="64" r="10.75" fill="#788ca5" fill-opacity="1" transform="rotate(135 64 64)"/><circle cx="16" cy="64" r="10.063" fill="#788ca5" fill-opacity="1" transform="rotate(180 64 64)"/><circle cx="16" cy="64" r="8.063" fill="#788ca5" fill-opacity="1" transform="rotate(225 64 64)"/><circle cx="16" cy="64" r="6.438" fill="#788ca5" fill-opacity="1" transform="rotate(270 64 64)"/><circle cx="16" cy="64" r="5.375" fill="#788ca5" fill-opacity="1" transform="rotate(315 64 64)"/><animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="800ms" repeatCount="indefinite"></animateTransform></g></svg>`

  const doOverlayElement = () => {
    const div = document.createElement('div')
    div.id = 'navigation-presentation-overlay'

    const css = {
      position: 'fixed',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      zIndex: '9999999',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      pointerEvents: 'none',
      fontFamily: 'inherit',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all 0.2s ease',
      opacity: '0',
    }

    Object.getOwnPropertyNames(css).forEach(key => {
      div.style[key] = css[key]
    })
    div.innerHTML = svgSpinnerMarkup
    document.body.appendChild(div)
    setTimeout(() => {
      div.style.opacity = '1'
    }, 1)
  }


  const visualizeLoading = e => {
    doOverlayElement()
  }


  const init = () => {
    window.addEventListener('popstate', visualizeLoading)
    window.addEventListener('beforeunload', visualizeLoading)
  }

  init()

})()
