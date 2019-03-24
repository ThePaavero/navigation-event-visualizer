(() => {

  const svgSpinnerMarkup = `
  <?xml version="1.0" standalone="no"?>1
  <!-- Generator: SVG Circus (http://svgcircus.com) -->
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg id="SVG-Circus-a34a898c-4267-6c74-58aa-b0c217c7a4bd" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><rect id="actor_5" x="76" y="46" width="8" height="8" opacity="1" fill="rgba(106,143,176,1)" fill-opacity="1" stroke="rgba(106,143,176,1)" stroke-width="0" stroke-opacity="1" stroke-dasharray=""></rect><rect id="actor_4" x="60" y="45" width="10" height="10" opacity="1" fill="rgba(106,143,176,1)" fill-opacity="1" stroke="rgba(106,143,176,1)" stroke-width="1" stroke-opacity="1" stroke-dasharray=""></rect><rect id="actor_3" x="45" y="45" width="10" height="10" opacity="1" fill="rgba(106,143,176,1)" fill-opacity="1" stroke="rgba(106,143,176,1)" stroke-width="1" stroke-opacity="1" stroke-dasharray=""></rect><rect id="actor_2" x="30" y="45" width="10" height="10" opacity="1" fill="rgba(106,143,176,1)" fill-opacity="1" stroke="rgba(106,143,176,1)" stroke-width="1" stroke-opacity="1" stroke-dasharray=""></rect><rect id="actor_1" x="15" y="45" width="10" height="10" opacity="1" fill="rgba(106,143,176,1)" fill-opacity="1" stroke="rgba(106,143,176,1)" stroke-width="1" stroke-opacity="1" stroke-dasharray=""></rect><script type="text/ecmascript"><![CDATA[(function(){var actors={};actors.actor_1={node:document.getElementById("SVG-Circus-a34a898c-4267-6c74-58aa-b0c217c7a4bd").getElementById("actor_1"),type:"square",cx:20,cy:50,dx:10,dy:22,opacity:1};actors.actor_2={node:document.getElementById("SVG-Circus-a34a898c-4267-6c74-58aa-b0c217c7a4bd").getElementById("actor_2"),type:"square",cx:35,cy:50,dx:10,dy:22,opacity:1};actors.actor_3={node:document.getElementById("SVG-Circus-a34a898c-4267-6c74-58aa-b0c217c7a4bd").getElementById("actor_3"),type:"square",cx:50,cy:50,dx:10,dy:22,opacity:1};actors.actor_4={node:document.getElementById("SVG-Circus-a34a898c-4267-6c74-58aa-b0c217c7a4bd").getElementById("actor_4"),type:"square",cx:65,cy:50,dx:10,dy:22,opacity:1};actors.actor_5={node:document.getElementById("SVG-Circus-a34a898c-4267-6c74-58aa-b0c217c7a4bd").getElementById("actor_5"),type:"square",cx:80,cy:50,dx:8,dy:22,opacity:1};var tricks={};tricks.trick_1=(function(t,i){i=(function(n){return.5>n?2*n*n:-1+(4-2*n)*n})(i)%1,i=0>i?1+i:i;var _=t.node;0.75>=i?_.setAttribute("opacity",t.opacity-i*(t.opacity/0.75)):i>=0.9?_.setAttribute("opacity",(i-0.9)*(t.opacity/(1-0.9))):_.setAttribute("opacity",0)});var scenarios={};scenarios.scenario_1={actors: ["actor_1","actor_2","actor_3","actor_4","actor_5"],tricks: [{trick: "trick_1",start:0,end:1}],startAfter:0,duration:1400,actorDelay:100,repeat:0,repeatDelay:0};var _reqAnimFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame,fnTick=function(t){var r,a,i,e,n,o,s,c,m,f,d,k,w;for(c in actors)actors[c]._tMatrix=[1,0,0,1,0,0];for(s in scenarios)for(o=scenarios[s],m=t-o.startAfter,r=0,a=o.actors.length;a>r;r++){if(i=actors[o.actors[r]],i&&i.node&&i._tMatrix)for(f=0,m>=0&&(d=o.duration+o.repeatDelay,o.repeat>0&&m>d*o.repeat&&(f=1),f+=m%d/o.duration),e=0,n=o.tricks.length;n>e;e++)k=o.tricks[e],w=(f-k.start)*(1/(k.end-k.start)),tricks[k.trick]&&tricks[k.trick](i,Math.max(0,Math.min(1,w)));m-=o.actorDelay}for(c in actors)i=actors[c],i&&i.node&&i._tMatrix&&i.node.setAttribute("transform","matrix("+i._tMatrix.join()+")");_reqAnimFrame(fnTick)};_reqAnimFrame(fnTick);})()]]></script></svg>
  `

  const config = {
    changeLinkOpacity: true,
    preventFurtherClicks: true,
  }

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

    // div.innerHTML = svgSpinnerMarkup

    div.innerHTML = '<span style="display: block">Loading...</span>'
    document.body.appendChild(div)
    setTimeout(() => {
      div.style.opacity = '1'
    }, 1)
  }


  const visualizeLoading = e => {
    doOverlayElement()
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
