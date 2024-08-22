new Vue({
            el: '#app',
            data: {
                titulo: 'Tela de Login',
                autenticado: false,
                usuario: { nome: 'João' },
                username: '',
                password: '',
                erro: false,
                mostrarDialogo: false,
            },
            methods: {
                login() {
                    // Simulação de login com credenciais fixas
                    if (this.username === 'user' && this.password === 'password') {
                        this.autenticado = true;
                        this.erro = false;
                        this.mostrarDialogo = false;
                    } else {
                        this.erro = true;
                        this.mostrarDialogo = true;
                    }
                },
                logout() {
                    this.autenticado = false;
                    this.username = '';
                    this.password = '';
                },
                fecharDialogo() {
                    this.mostrarDialogo = false;
                }
            }
        });