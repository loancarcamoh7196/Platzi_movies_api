/**
 * Archivo de Datos de Pruebas
 */
 const moviesMock = [
    {"id":"42d597f3-0d29-435e-81d0-8d395566feb0","title":"Private Parts","year":1966,"cover":"http://dummyimage.com/164x100.png/ff4444/ffffff","description":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","duration":569,"contentRating":"R","source":"http://hostgator.com/tellus/semper/interdum/mauris/ullamcorper.html?ante=vel&ipsum=nulla&primis=eget&in=eros&faucibus=elementum&orci=pellentesque&luctus=quisque&et=porta&ultrices=volutpat&posuere=erat&cubilia=quisque&curae=erat&duis=eros&faucibus=viverra&accumsan=eget&odio=congue&curabitur=eget&convallis=semper","tags":"Comedy|Drama"},
    {"id":"db11191a-c331-4046-ab3a-a1200e5ee6d1","title":"Bloodtide","year":2002,"cover":"http://dummyimage.com/103x100.png/ff4444/ffffff","description":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","duration":1788,"contentRating":"PG-13","source":"https://topsy.com/tortor/eu/pede.aspx?varius=odio&ut=in&blandit=hac&non=habitasse&interdum=platea&in=dictumst&ante=maecenas&vestibulum=ut&ante=massa&ipsum=quis&primis=augue&in=luctus&faucibus=tincidunt&orci=nulla&luctus=mollis&et=molestie&ultrices=lorem&posuere=quisque&cubilia=ut&curae=erat&duis=curabitur&faucibus=gravida&accumsan=nisi&odio=at&curabitur=nibh&convallis=in&duis=hac&consequat=habitasse&dui=platea&nec=dictumst&nisi=aliquam&volutpat=augue&eleifend=quam&donec=sollicitudin&ut=vitae&dolor=consectetuer&morbi=eget&vel=rutrum&lectus=at&in=lorem&quam=integer&fringilla=tincidunt&rhoncus=ante&mauris=vel&enim=ipsum&leo=praesent&rhoncus=blandit&sed=lacinia&vestibulum=erat&sit=vestibulum&amet=sed&cursus=magna&id=at&turpis=nunc&integer=commodo&aliquet=placerat&massa=praesent&id=blandit&lobortis=nam&convallis=nulla&tortor=integer&risus=pede&dapibus=justo&augue=lacinia&vel=eget&accumsan=tincidunt","tags":"Horror"},
    {"id":"1a46dc67-a64c-4a62-a56b-c275d6b338f8","title":"Man from Snowy River, The","year":2009,"cover":"http://dummyimage.com/170x100.png/5fa2dd/ffffff","description":"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.","duration":728,"contentRating":"G","source":"http://nhs.uk/amet/consectetuer.xml?tincidunt=morbi&ante=quis&vel=tortor&ipsum=id&praesent=nulla&blandit=ultrices&lacinia=aliquet&erat=maecenas&vestibulum=leo&sed=odio&magna=condimentum&at=id&nunc=luctus&commodo=nec&placerat=molestie&praesent=sed&blandit=justo&nam=pellentesque&nulla=viverra&integer=pede&pede=ac&justo=diam&lacinia=cras&eget=pellentesque&tincidunt=volutpat&eget=dui&tempus=maecenas&vel=tristique&pede=est&morbi=et&porttitor=tempus&lorem=semper&id=est&ligula=quam&suspendisse=pharetra&ornare=magna&consequat=ac&lectus=consequat&in=metus&est=sapien&risus=ut&auctor=nunc&sed=vestibulum&tristique=ante&in=ipsum&tempus=primis&sit=in&amet=faucibus&sem=orci&fusce=luctus&consequat=et&nulla=ultrices&nisl=posuere&nunc=cubilia&nisl=curae&duis=mauris&bibendum=viverra&felis=diam&sed=vitae&interdum=quam&venenatis=suspendisse&turpis=potenti&enim=nullam&blandit=porttitor&mi=lacus&in=at&porttitor=turpis&pede=donec&justo=posuere&eu=metus&massa=vitae&donec=ipsum&dapibus=aliquam&duis=non&at=mauris&velit=morbi","tags":"Drama|Romance|Western"},
];

function filteredMoviesMock(tag) {
    return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
    async getMovies() {
        return Promise.resolve(moviesMock);
    }

    async createMovie() {
        return Promise.resolve(moviesMock[0]);
    }
}

module.exports = { moviesMock, filteredMoviesMock, MoviesServiceMock }