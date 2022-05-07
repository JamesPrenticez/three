import request from 'superagent'

export function getReviews(id){
    return request.get(`/api/reviews/${id}`)
        .then(res => res.body.result)
}