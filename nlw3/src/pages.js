const orphanages = require('./database/fakedata.js')

module.exports = {
    index(request, response) {
        //const city = request.query.city
        return response.render('index')
    },

    orphanage(request, response) {
        return response.render('orphanage')
    },

    orphanages(request, response) {
        return response.render('orphanages', { orphaganes })
    },

    createOrphanage(request, response) {
        return response.render('createOrphanage')
    }

}