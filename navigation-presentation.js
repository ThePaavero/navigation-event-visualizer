(() => {

  const config = {
    changeLinkOpacity: true,
    preventFurtherClicks: true,
  }

  const visualizeLoading = e => {
    const link = e.currentTarget
    if (config.changeLinkOpacity) {
      link.style.opacity = 0.3
    }
    if (config.preventFurtherClicks) {
      link.addEventListener('click', e => {
        e.preventDefault()
      })
    }
  }


  const init = () => {
    const linksWithNavigationEffect = document.querySelectorAll('a, button')
    Array.from(linksWithNavigationEffect).forEach(link => {
      link.addEventListener('click', visualizeLoading)
    })
  }

  init()

})()
