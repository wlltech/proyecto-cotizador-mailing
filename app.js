// Arreglo para los objetos de cada servicio
const servicios = [
    {
        nombre: "Maquetación a la medida",
        descripcion: "Maquetación única y personalizada que se adapta específicamente a la marca.",
        servicio: "Maquetación",
        paquete: "advanced"
    },
    {
        nombre: "Maquetación con plantilla",
        descripcion: "Maquetación mediante la selección de plantillas predefinidas con la opción de añadir o quitar componentes",
        servicio: "Maquetación",
        paquete: "growth"
    },
    {
        nombre: "Personalize emails using contact attributes",
        descripcion: "Inserción del nombre del destinatario en el asunto y/o de los datos básicos en el contenido",
        servicio: "personalize emails",
        paquete: "growth"
    },
    {
        nombre: "Personalized groups of contacts by segments",
        descripcion: "Envío de mensajes en base al comportamiento de los destinatarios.",
        servicio: "personalize emails",
        paquete: "advanced"
    },
    {
        nombre: "Mantenimiento de la base de datos",
        descripcion: "Depuración de: usuarios inactivos, rebotes suaves y duros, bajas",
        servicio: "contacts",
        paquete: "growth"
    },
    {
        nombre: "Envío de E-mails de marketing",
        descripcion: "E-mails de marketing masivos para campañas de promoción, venta, newsletter, etc.",
        servicio: "sending service",
        paquete: "growth"
    },
    {
        nombre: "Envío de E-mails transaccionales",
        descripcion: "Se activan después de que el usuario ejecuta alguna acción como, compra de un artículo, registro de un formulario, carrito abandonado, etc.",
        servicio: "sending service",
        paquete: "advanced"
    },
    {
        nombre: "Envío de E-mails de Automatización",
        descripcion: "Se activan de forma automática desde la plataforma, basados en el comportamiento de usuarios como, mensajes de bienvenida, e-mails de cumpleaños",
        servicio: "sending service",
        paquete: "advanced"
    }
];

// Función para filtrar los servicios por tipo de paquete
const consultarServicios = paquete => {
    for (let filtrarServicios of servicios) {
        if (filtrarServicios.paquete === paquete) {
            console.log(filtrarServicios.nombre);
        }
    }
};

// Función para consultar los detalles del servicio
const consultarDetallesServicios = nombre => {
    for (let detallesServicios of servicios){
        if (detallesServicios.nombre === nombre){
            console.log(detallesServicios.descripcion)
        }
    }
}


consultarServicios("growth");
consultarDetallesServicios("Mantenimiento de la base de datos");