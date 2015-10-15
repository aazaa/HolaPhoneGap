var CrearAlarma = {

    InicioPorDefault: function () {
        this.CambiarTipoDeAlarma();
    },

    CambiarTipoDeAlarma: function () {
        var tipo = $("#id_tipo_alarma").val()
        if (tipo == 1) {
            $("#div_robo").show()
        } else {
            $("#div_robo").hide()
        };
        this.CambiarTipoDeRobo();
    },

    CambiarTipoDeRobo: function () {
        var tipo = $("#id_tipo_robo").val()
        if (tipo == 2) {
            $("#div_vehiculo").show()
        } else {
            $("#div_vehiculo").hide()
        }
    },

    DarAlarma: function () {
        resumen = [];
        $.ajax({
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            url: "../../Paginas/CrearAlarma.aspx/HelloWorld", 
           // data: JSON.stringify({ ListJson: resultado }),  //JSON.stringify({ ListJson: resultado }),  //JSON.stringify(resultado),
            timeout: 60000,
            success: function (response) {
//                if (response.d.length == 0) {
//                    resumen = [];
//                } else {
//                    resumen = JSON.parse(response.d);
//                }
            },
            error: function (jqXHR, textStatus, errThrown) {
                console.log(textStatus);
                console.log(errThrown);
                console.log(jqXHR);
            }

        });
        return resumen;

    }
}
