import StartUp from './StartUp';

const porta = process.env.PORT || '3010';

StartUp.app.listen(porta, ()=>{
    console.log('Servidor executando na porta '.concat(porta));
})

