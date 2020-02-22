const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    descp: 'Marca como completado o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion,
        completado

    })
    .command('borrar', 'Borra una tarea ya realizada', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}