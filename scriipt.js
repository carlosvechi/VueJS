var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Aprendendo Vue JS',
        linguagens: [
            {nome: 'HTML', status: true},
            {nome: 'CSS', status: true},
            {nome: 'JavaScript', status: false},
            {nome: 'PHP', status: false},
            {nome: 'Python', status: false},
        ]
    }
})