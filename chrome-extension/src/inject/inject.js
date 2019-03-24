const Extension = function() {

  const config = {
    spinnerSize: '70px',
    blockSiteOnLoading: true,
  }

  // Spinner taken from https://icons8.com/preloaders/en/free
  const svgSpinnerMarkup = `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="${config.spinnerSize}" height="${config.spinnerSize}" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#788ca5" fill-opacity="1"/><path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#dee3e9" fill-opacity="0.25" transform="rotate(45 64 64)"/><path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#dee3e9" fill-opacity="0.25" transform="rotate(90 64 64)"/><path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#dee3e9" fill-opacity="0.25" transform="rotate(135 64 64)"/><path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#dee3e9" fill-opacity="0.25" transform="rotate(180 64 64)"/><path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#dee3e9" fill-opacity="0.25" transform="rotate(225 64 64)"/><path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#dee3e9" fill-opacity="0.25" transform="rotate(270 64 64)"/><path d="M38.52 33.37L21.36 16.2A63.6 63.6 0 0 1 59.5.16v24.3a39.5 39.5 0 0 0-20.98 8.92z" fill="#dee3e9" fill-opacity="0.25" transform="rotate(315 64 64)"/><animateTransform attributeName="transform" type="rotate" values="0 64 64;45 64 64;90 64 64;135 64 64;180 64 64;225 64 64;270 64 64;315 64 64" calcMode="discrete" dur="1040ms" repeatCount="indefinite"></animateTransform></g></svg>`

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
      transition: 'opacity 0.2s ease',
      opacity: '0',
    }

    if (config.blockSiteOnLoading) {
      css.pointerEvents = 'all'
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

  return {
    init
  }
}

chrome.extension.sendMessage({}, () => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval)
      const app = new Extension()
      app.init()
    }
  }, 10)
})
