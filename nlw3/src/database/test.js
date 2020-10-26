const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async function (db){
    //inserir dados na tabela
    // await saveOrphanage(db, {
        
    //     lat: "-3.7508694",
    //     lng: "-38.6743717",
    //     name: "Cotolengo 3",
    //     about: "Presta assistência a crianças e adolescentes em vulnerabilidade social",
    //     whatsapp: "85999887766",
    //     images: [

    //         "https://images.unsplash.com/photo-1598137203972-e8cb7fc24345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1562790519-004d066ea916?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1594007184512-2a607d1df588?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1595207011175-3d72f5a3b21c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1562790519-2e040476a0c7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1595967783875-c371f35d8049?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

    //     ].toString(),

    //     instructions: "Venha se sentir a vontade e fazer a festa da criançada.",
    //     opening_hours: "Horário de Visitas das 08h às 18h.",
    //     open_on_weekends: "0"


    // })
    
    //consultar dados na tabela
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    //console.log(selectedOrphanages) 

    //consultar somente um orfanato pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(orphanage)

    //deletar somente um orfanato pelo id
    //console.log(await db.all('DELETE FROM orphanages WHERE id = "2"'))

})