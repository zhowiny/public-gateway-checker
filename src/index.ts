import { Checker } from './Checker'
import gateways from './gateways.json'
import { loadCountly } from './metrics'
import { Log } from './Log'
import { Workbox } from 'workbox-window'
import {getCID} from './getCIDByUrl'

const wb = new Workbox('/sw.js')
void wb.register()

loadCountly()
const log = new Log('App index')

window.checker = new Checker()

initCheckerButton()

function initCheckerButton() {
  const button = document.getElementById('checker.button')
  if (!button) return
  const CIDElement = document.createElement('div')
  CIDElement.style.cssText = 'color: hsl(15 50% 50%);min-width: 4em;width: max-content; margin: 12px auto;padding: 4px 8px;border: 1px solid gray;border-radius: 4px;'
  CIDElement.setAttribute('contentEditable', 'true')
  button?.parentElement?.append(CIDElement)

  const CID = getCID()
  if (!CID) {
    CIDElement.textContent = 'CID 不存在!'
    button!.setAttribute('disabled', 'true')
    button!.style.pointerEvents = 'none'
    return
  }
  CIDElement.textContent = CID

  CIDElement.addEventListener('input', handleCIDChange)
  button.addEventListener('click', checkGateways)

  function handleCIDChange () {
    const id = CIDElement.textContent
    history.replaceState({}, '', `${location.origin}${location.pathname}?cid=${id}`)
    if (!id) {
      button!.setAttribute('disabled', 'true')
      button!.style.pointerEvents = 'none'
    } else if (button!.hasAttribute('disabled')) {
      button!.removeAttribute('disabled')
      button!.style.pointerEvents = 'auto'
    }
  }

  function checkGateways () {
    const id = getCID()
    if (!id) return
    window.checker.nodes.length = 0
    window.checker.checkGateways(gateways).catch((err) => {
      log.error('Unexpected error')
      log.error(err)
    })
  }
}
