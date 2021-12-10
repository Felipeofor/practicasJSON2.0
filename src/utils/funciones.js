export function funciones(parametro) {

    //Guardar sexos disponibles

    function sexoPaciente(parametro) {
        var sexo = [];
        parametro.forEach(item => {
            if (!sexo.includes(item.paciente.sexo)) {
                sexo.push(item.paciente.sexo);
            }
        })
        console.log(sexo);
    }
    sexoPaciente(parametro);

    //Guardar instituciones disponibles

    function instituciones(parametro) {
        var nombres = [];
        parametro.forEach(item => {
            if (!nombres.includes(item.institucion.prestador)) {
                nombres.push(item.institucion.prestador);
            }
        })
        console.log(nombres);
    }
    instituciones(parametro);


    //Guardar estados disponibles

    function estados(parametro) {
        var estado = [];
        parametro.forEach(item => {
            if (!estado.includes(item.estado.nombre)) {
                estado.push(item.estado.nombre);
            }
        })
        console.log(estado);
    }
    estados(parametro);


    //Guardar uge disponibles

    function uge(parametro) {
        var tipo = [];
        parametro.forEach(item => {
            if (!tipo.includes(item.uge.nombre)) {
                tipo.push(item.uge.nombre);
            }
        })
        console.log(tipo);
    }
    uge(parametro);

    //Guardar tipo de internacion disponibles

    function internacion(parametro) {
        var tipo = [];
        parametro.forEach(item => {
            if (!tipo.includes(item.tipoInternacion.nombre)) {
                tipo.push(item.tipoInternacion.nombre);
            }
        })
        console.log(tipo);
    }
    internacion(parametro);
}