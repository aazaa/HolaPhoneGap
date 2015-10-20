 var Alarmas = {

     BuscarUltimasAlarmas: function () {
         //Casos Mockeados
         var _this = this;
         barrio1 = {Nombre: "AGRONOMIA"};
         barrio2 = {Nombre: "ALMAGRO"};
         globo1 = {TipoAlarma: 1, Descripcion: "Robo Comercio", Barrio: barrio1};
         globo2 = {TipoAlarma: 2, Descripcion: "Sospechoso esquina", Barrio: barrio2};
         resultado = [globo1, globo2];
         _this.DibujarGlobosChicosAlarmas(resultado);
//Código Verdadero
//        var resultado = [];
//        var _this = this;
//        $.ajax({
//            type: "POST",
//            url: "../../Paginas/Inicio.aspx/UltimasAlarmas",
//            timeout: 60000,
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",
//            success: function (response) {
//                if (response.d.length > 0) {
//                    _this.DibujarGlobosChicosAlarmas(response.d);
//                }
//            },
//            error: function (jqXHR, textStatus, errThrown) {
//                console.log(textStatus);
//                console.log(errThrown);
//                console.log(jqXHR);
//            }
//        });
    },
 
 DibujarGlobosChicosAlarmas: function (resultado) {
        var regex = /^(.*)(\d)+$/i;
        var cloneIndex = 1;
        var _this = this;
        for (var i = 0; i < resultado.length; i++) {
            var id = "globo" + cloneIndex;
            jQuery('#globo0').clone().appendTo('#div_alarmas')
            .attr("id", id);
            _this.CompletarContenidoResumido("#" + id, resultado[i]);
            cloneIndex++;
        };
    },
	
	CompletarContenidoResumido: function (id_div, resultado) {
        var _this = this;
        $(id_div).show();
        _this.AgregarContenidoResumidoDeAlarma($(id_div), resultado);
        _this.AgregarClaseDeAlarma($(id_div), resultado.TipoAlarma);
    },
	
	   AgregarContenidoResumidoDeAlarma: function (div, resultado) {
        $(div).append('<p><strong>' + resultado.Barrio.Nombre + '</strong></p>' +
                      '<div>' + resultado.Descripcion + '</div>');
    },
	
	    AgregarClaseDeAlarma: function (div, tipo_alarma) {
        if (tipo_alarma == 1) {
            div.addClass("robo");
        } else if (tipo_alarma == 2) {
            div.addClass("sospechoso");
        } else if (tipo_alarma == 3) {
            div.addClass("accidente");
        }
    }
}
