export default (prefix = '', routes) => routes.map(rout => { rout.path = prefix + rout.path; return rout })
