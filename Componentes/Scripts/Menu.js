var Menu = {

    InicioPorDefault: function () {
        $('nav#menu').mmenu({
            extensions: ['effect-slide-menu', 'pageshadow'],
            searchfield: true,
            counters: true,
            navbar: {
                title: 'Men&#250;'
            },
            navbars: [
						{
						    position: 'top',
						    content: ['searchfield']
						}, {
						    position: 'top',
						    content: [
								'prev',
								'title',
								'close'
							]
						}, {
						    position: 'bottom',
						    content: [
								'<a href="#" target="_blank">Cont&#225;ctanos</a>'
							]
						}
					]
        });
    }
}
