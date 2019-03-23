(() => {

  const init = () => {
    const linksWithNavigationEffect = document.querySelectorAll('a, button')
    Array.from(linksWithNavigationEffect).forEach(link => {
      link.addEventListener('click', e => {
        console.log('Clicked!')
      })
    })
  }

  init()

})()
