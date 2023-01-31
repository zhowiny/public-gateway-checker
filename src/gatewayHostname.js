import { getCID } from './getCIDByUrl';
function gatewayHostname(url) {
    let urlString = url.toString();
    if (url?.hostname != null) {
        urlString = url.hostname.toString();
    }
    return urlString.replace(`${getCID()}.ipfs.`, '') // skip .ipfs. in subdomain gateways
        .replace(`${getCID()}.`, ''); // path-based
}
export { gatewayHostname };
//# sourceMappingURL=gatewayHostname.js.map