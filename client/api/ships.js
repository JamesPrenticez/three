import request from 'superagent'

export function getShips() {
    return request.get('/api/ships')
        .then(res => res.body.ships)
}