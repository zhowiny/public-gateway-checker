function getURLSearchParams() {
    return [...new URLSearchParams(location.search)].reduce((res, [k, v]) => {
        if (res[k]) {
            if (Array.isArray(res[k])) {
                res[k].push(v);
            }
            else {
                res[k] = [res[k], v];
            }
        }
        else {
            res[k] = v;
        }
        return res;
    }, {});
}
function getCID() {
    const queryParams = getURLSearchParams();
    return queryParams.cid;
}
export { getURLSearchParams, getCID, };
//# sourceMappingURL=getCIDByUrl.js.map