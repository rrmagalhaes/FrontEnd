const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {
    index(request, response) {
        //const city = request.query.city
        return response.render('index')
    },

//Mostrar a página de um orfanato - Desafio If Ternário

    async orphanage(request, response) {
        const id = request.query.id

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = results[0]

            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0]

            //pesquisar sobre if ternario
            if (orphanage.open_on_weekends == "0") {
                orphanage.open_on_weekends = false
            } else {
                orphanage.open_on_weekends = true                
            }

            return response.render('orphanage', { orphanage })

        } catch (error) {
            console.log(error)
            return response.send('Erro no Banco de Dados')
        }
    },

//Mostrar todos os orfanatos no mapa

    async orphanages(request, response) {
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return response.render('orphanages', { orphanages })

        } catch (error) {
            console.log(error)
            return response.send('Erro no Banco de Dados')
            
        }
        
    },

    createOrphanage(request, response) {
        return response.render('create-orphanage')
    },

//Salvar um orfanto
    
    async saveOrphanage(request, response) {
        const fields = request.body
        
        //validar se todos os campos estão preenchidos
        if(Object.values(fields).includes('')) {
             return response.send('Todos os camapos devem ser preenchidos!')
        }

        //salvar um orfanato
        try {
            
        const db = await Database
        await saveOrphanage(db, {
            lat: fields.lat,
            lng: fields.lng,
            name: fields.name,
            about: fields.about,
            whatsapp: fields.whatsapp,
            images: fields.images.tostring(),
            instructions: fields.instructions,
            opening_hours: fields.opening_hours,
            open_on_weekends: fields.open_on_weekends,

        })

        //redirecionamento
        return redirect('/orphanages')
            
        } catch (error) {
            console.log(error)
            return response.send('Erro no banco de dados!')
        }
        
        
    }

}