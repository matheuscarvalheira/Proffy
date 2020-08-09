//Inserir dados no banco de dados através de JS
//função com parametros de estrutura e os valores para as tabelas
module.exports = async function (db, {proffyValue, classValue, classScheduleValues}){

//inserir dados na table de proffys
// estruturas + dados 
    const  insertedProffy =  await db.run(`
        INSERT INTO  proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `) // aguarda até concluir

    const proffy_id = insertedProffy.lastID



    //inserir dados na tabela classes

    const insertedClass =  await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"

            );
    
    
    `)

    const class_id = insertedClass.lastID

    //Inserir dados na tabela class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => { // mapeia o array
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to

            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"

            );
        
        `)
    })

        //aqui executa todos os db.runs() das class_schedules
        await  Promise.all(insertedAllClassScheduleValues)

                
}

