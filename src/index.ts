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
window.checkGateways = () => {
  const cid = getCID()
  if (!cid) return
  window.checker.checkGateways(gateways.slice(0, 20)).catch((err) => {
    log.error('Unexpected error')
    log.error(err)
  })
}
