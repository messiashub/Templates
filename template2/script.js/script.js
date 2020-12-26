

$('#twitter').on({
    mouseover: function () {

        $("#twitter").attr('src', 'icon/twitter-grande.png')
    },
    mouseout: function () {
        $('#twitter').attr('src', 'icon/twiter.png')
    },

});

$('#feed').on({
    mouseover: function () {

        $("#feed").attr('src', 'icon/feed-maior.png')
    },
    mouseout: function () {
        $('#feed').attr('src', 'icon/feed-min.png')
    },

});


let goo = document.getElementById('google');
goo.addEventListener('mouseover', trocar);

goo.addEventListener('mouseout', voltar);

function trocar() {
    console.log('oi');
    goo.setAttribute("src", 'icon/g-grande.png');
};

function voltar() {
    console.log('de novo');
    goo.setAttribute('src', 'icon/google+.png')
}


let linke = document.getElementById('linke');
linke.addEventListener('mouseover', () => linke.setAttribute('src', 'icon/linkedin-maior.png'));
linke.addEventListener('mouseout', () => linke.setAttribute('src', 'icon/linkedin-min.png'));

let face = document.querySelector('#face');
face.addEventListener('mouseover',()=> face.setAttribute('src','icon/facebook-maior.png'));
face.addEventListener('mouseout',()=> face.setAttribute('src','icon/facebook-min.png'));


