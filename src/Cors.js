import fetchPonyfill from 'fetch-ponyfill';
import { CheckBase } from './CheckBase';
import { Log } from './Log';
import { getCID } from './getCIDByUrl';
const { fetch } = fetchPonyfill();
const log = new Log('Cors');
class Cors extends CheckBase {
    constructor(parent) {
        super(parent, 'div', 'Cors');
        this.parent = parent;
        this._className = 'Cors';
        this._tagName = 'div';
    }
    async check() {
        const now = Date.now();
        const gatewayAndHash = this.parent.gateway.replace(':hash', getCID());
        const testUrl = `${gatewayAndHash}?now=${now}#x-ipfs-companion-no-redirect`;
        // response body can be accessed only if fetch was executed when
        // liberal CORS is present (eg. '*')
        try {
            const response = await fetch(testUrl);
            const { status } = response;
            this.tag.title = `Response code: ${status}`;
            if (status === 200) {
                // this.parent.checked()
                this.tag.asterisk();
                this.parent.tag.classList.add('cors');
            }
            else {
                log.debug(`The response status did not match the expected code. (status: ${status}, expected status: 200)`);
                this.onerror();
                throw new Error(`URL '${testUrl} does not support CORS`);
            }
        }
        catch (err) {
            log.error(err);
            this.onerror();
            throw err;
        }
    }
    checked() {
        log.warn('Not implemented yet');
    }
    onerror() {
        this.tag.empty();
    }
}
export { Cors };
//# sourceMappingURL=Cors.js.map