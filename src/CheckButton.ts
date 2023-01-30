import type { GatewayNode } from './GatewayNode'

import { Log } from './Log'
import {UiComponent} from './UiComponent'

const log = new Log('Ipns')

class CheckButton extends UiComponent {
  _className = 'CheckButton'
  _tagName = 'div'
  constructor (protected parent: GatewayNode) {
    super(parent, 'div')
  }

  checked (): void {
    log.warn('Not implemented yet')
  }

  onerror (): void {
    this.tag.err()
  }
}

export { CheckButton }
