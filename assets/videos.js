// Evento de clique para os botões de assistir curso

const watchButtons = document.querySelectorAll('.watch-course');
watchButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playlistId = button.dataset.playlist;
        const playlistTitle = button.closest('.card').querySelector('.card-text').textContent;
        let data = [];

        // Definir os vídeos para cada playlist/curso
        if (playlistId === 'htmlcss') {
            data = [{
                    'id': 'a1',
                    'title': 'Começa aqui o novo!',
                    'link': 'https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n',
                    'duration': '2:24',
                },
                {
                    'id': 'a2',
                    'title': 'O Que vamos aprender?',
                    'link': 'https://www.youtube.com/watch?v=jgQjeqGRdgA&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=2',
                    'duration': '7:52',
                },
                {
                    'id': 'a3',
                    'title': 'Precisamos fazer um acordo!',
                    'link': 'https://www.youtube.com/watch?v=VfIXgGJWLvA&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=3',
                    'duration': '19:26',
                },
                {
                    'id': 'a4',
                    'title': 'Será que este curso é para mim?',
                    'link': 'https://www.youtube.com/watch?v=57wyfS560Uk&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=4',
                    'duration': '15:34',
                },
                {
                    'id': 'a5',
                    'title': 'Melhores livros para aprender HTML5!',
                    'link': 'https://www.youtube.com/watch?v=0zLjVhHdOm8&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=5',
                    'duration': '20:55',
                },
                {
                    'id': 'a6',
                    'title': 'Como a Internet chega na minha casa?',
                    'link': 'https://www.youtube.com/watch?v=F74GKCLXUWM&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=6',
                    'duration': '27:01',
                },
                {
                    'id': 'a7',
                    'title': 'Como a Internet funciona?',
                    'link': 'https://www.youtube.com/watch?v=nlO5hySqJFA&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=7',
                    'duration': '22:15',
                },
                {
                    'id': 'a8',
                    'title': 'O que é domínio e hospedagem?',
                    'link': 'https://www.youtube.com/watch?v=RFHSt1PCy0k&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=8',
                    'duration': '19:38',
                },
                {
                    'id': 'a9',
                    'title': 'A diferença entre HTML, CSS e JavaScript',
                    'link': 'https://www.youtube.com/watch?v=B4FU3NFRTDw&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=9',
                    'duration': '26:33',
                },
                {
                    'id': 'a10',
                    'title': 'Front-end, Back-end e Full stack',
                    'link': 'https://www.youtube.com/watch?v=0zLjVhHdOm8&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=5',
                    'duration': '19:22',
                },
            ];
        } else if (playlistId === 'python') {
            data = [{
                    'id': 'b1',
                    'title': 'Seja um Programador',
                    'link': 'https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0',
                    'duration': '29:07',
                },
                {
                    'id': 'b2',
                    'title': 'Para que serve o Python?',
                    'link': 'https://www.youtube.com/watch?v=Mp0vhMDI7fA&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0&index=3',
                    'duration': '21:53',
                },
                {
                    'id': 'b3',
                    'title': 'Instalando o Python3 e o IDLE',
                    'link': 'https://www.youtube.com/watch?v=VuKvR1J2LQE&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0&index=4',
                    'duration': '17:49',
                },
                {
                    'id': 'b4',
                    'title': 'Primeiros comandos em Python3',
                    'link': 'https://www.youtube.com/watch?v=31llNGKWDdo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0&index=5',
                    'duration': '27:33',
                },
                {
                    'id': 'b5',
                    'title': 'Instalando o PyCharm e o QPython3',
                    'link': 'https://www.youtube.com/watch?v=ElRd0cbXIv4&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0&index=6',
                    'duration': '31:41',
                },
                {
                    'id': 'b6',
                    'title': 'Exercício Python 1',
                    'link': 'https://www.youtube.com/watch?v=nIHq1MtJaKs&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0&index=7',
                    'duration': '12:31',
                },
                {
                    'id': 'b7',
                    'title': 'Exercício Python 2',
                    'link': 'https://www.youtube.com/watch?v=FNqdV5Zb_5Q&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0&index=8',
                    'duration': '4:46',
                },
                {
                    'id': 'b8',
                    'title': 'Tipos Primitivos e Saída de Dados',
                    'link': 'https://www.youtube.com/watch?v=hdDHg1p3YVc&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0&index=9',
                    'duration': '29:41',
                },
                {
                    'id': 'b9',
                    'title': 'Somando dois números',
                    'link': 'https://www.youtube.com/watch?v=PB254Cfjlyk&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0&index=10',
                    'duration': '5:36',
                },
                {
                    'id': 'b10',
                    'title': 'Exercício Python 3',
                    'link': 'https://www.youtube.com/watch?v=tHYxjJxtJko&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0&index=11',
                    'duration': '8:37',
                },
            ];
        } else if (playlistId === 'raspberry') {
            data = [{
                    'id': 'c1',
                    'title': 'O que vou aprender no curso?',
                    'link': 'https://www.youtube.com/watch?v=CbIeFxsfgzk&list=PLHz_AreHm4dnGZ_nudmN4rvyLk2fHFRzy&index=2',
                    'duration': '11:40',
                },
                {
                    'id': 'c2',
                    'title': 'De onde vem o Raspberry Pi?',
                    'link': 'https://www.youtube.com/watch?v=5_PrhCeKzNI&list=PLHz_AreHm4dnGZ_nudmN4rvyLk2fHFRzy&index=3',
                    'duration': '18:06',
                },
                {
                    'id': 'c3',
                    'title': 'Conheça as gerações do Raspberry Pi',
                    'link': 'https://www.youtube.com/watch?v=0gIc81LyWEM&list=PLHz_AreHm4dnGZ_nudmN4rvyLk2fHFRzy&index=4',
                    'duration': '11:18',
                },
                {
                    'id': 'c4',
                    'title': 'Onde comprar Raspberry Pi mais barato?',
                    'link': 'https://www.youtube.com/watch?v=1xR0TN2rj3U&list=PLHz_AreHm4dnGZ_nudmN4rvyLk2fHFRzy&index=5',
                    'duration': '15:50',
                },
                {
                    'id': 'c5',
                    'title': 'Hardware do Raspberry Pi (parte 1)',
                    'link': 'https://www.youtube.com/watch?v=V-DTUfZ0XmQ&list=PLHz_AreHm4dnGZ_nudmN4rvyLk2fHFRzy&index=6',
                    'duration': '20:41',
                },
                {
                    'id': 'c6',
                    'title': 'Arquitetura do Raspberry Pi (parte 2)',
                    'link': 'https://www.youtube.com/watch?v=02N7y92ug-M&list=PLHz_AreHm4dnGZ_nudmN4rvyLk2fHFRzy&index=7',
                    'duration': '21:08',
                },
                {
                    'id': 'c7',
                    'title': 'Raspberry Pi versus Arduino: qual é o melhor?',
                    'link': 'https://www.youtube.com/watch?v=bFry5s3czvo&list=PLHz_AreHm4dnGZ_nudmN4rvyLk2fHFRzy&index=8',
                    'duration': '21:53',
                },
                {
                    'id': 'c8',
                    'title': 'Além do Raspberry Pi, o que preciso ter?',
                    'link': 'https://www.youtube.com/watch?v=i93_xi6ROv8&list=PLHz_AreHm4dnGZ_nudmN4rvyLk2fHFRzy&index=9',
                    'duration': '24:42',
                },
                {
                    'id': 'c9',
                    'title': 'Unboxing e montagem de três Raspberry Pi',
                    'link': 'https://www.youtube.com/watch?v=oezhGZkQw4A&list=PLHz_AreHm4dnGZ_nudmN4rvyLk2fHFRzy&index=10',
                    'duration': '22:11',
                },
                {
                    'id': 'c10',
                    'title': 'Instalando ferramentas úteis',
                    'link': 'https://www.youtube.com/watch?v=iBMXYA5rva8&list=PLHz_AreHm4dnGZ_nudmN4rvyLk2fHFRzy&index=11',
                    'duration': '4:51',
                },
            ];
        } else if (playlistId === 'github') {
            data = [{
                    'id': 'd1',
                    'title': 'O que é Git e GitHub?',
                    'link': 'https://www.youtube.com/watch?v=DqTITcMq68k',
                    'duration': '15:42',
                },
                {
                    'id': 'd2',
                    'title': 'Como usar Git e GitHub na prática!',
                    'link': 'https://www.youtube.com/watch?v=UBAX-13g8OM&t=796s',
                    'duration': '43:24',
                },
            ];
        } else if (playlistId === 'frontend') {
            data = [{
                    'id': 'e1',
                    'title': 'O que é FrontEnd e BackEnd?',
                    'link': 'https://www.youtube.com/watch?v=Em0R3csNMVE&list=PLhkO7OMKgT_p3VoB47VHdLGpYTzxYTv8R',
                    'duration': '6:23',
                },
                {
                    'id': 'e2',
                    'title': '5 minutos de HTML para iniciar em programação!',
                    'link': 'https://www.youtube.com/watch?v=3oSIqIqzN3M&list=PLhkO7OMKgT_p3VoB47VHdLGpYTzxYTv8R&index=2',
                    'duration': '5:13',
                },
                {
                    'id': 'e3',
                    'title': 'O que é CSS?',
                    'link': 'https://www.youtube.com/watch?v=LWU2OR19ZG4&list=PLhkO7OMKgT_p3VoB47VHdLGpYTzxYTv8R&index=3',
                    'duration': '10:06',
                },
                {
                    'id': 'e4',
                    'title': 'Formulários com HTML e CSS!',
                    'link': 'https://www.youtube.com/watch?v=wwqOJ2o84S4&list=PLhkO7OMKgT_p3VoB47VHdLGpYTzxYTv8R&index=4',
                    'duration': '28:57',
                },
                {
                    'id': 'e5',
                    'title': 'O que são Frameworks e Bibliotecas?',
                    'link': 'https://www.youtube.com/watch?v=dp0zB4n3MUs&list=PLhkO7OMKgT_p3VoB47VHdLGpYTzxYTv8R&index=5',
                    'duration': '5:28',
                },
                {
                    'id': 'e6',
                    'title': '10 ideias de projetos em HTML e CSS para adicionar no portfólio!',
                    'link': 'https://www.youtube.com/watch?v=y4ltLH9iK8E&list=PLhkO7OMKgT_p3VoB47VHdLGpYTzxYTv8R&index=6',
                    'duration': '13:16',
                },
                {
                    'id': 'e7',
                    'title': 'Landing Page com HTML e CSS!',
                    'link': 'https://www.youtube.com/watch?v=llF6vD-RljE&list=PLhkO7OMKgT_p3VoB47VHdLGpYTzxYTv8R&index=7',
                    'duration': '1:03:14',
                },
                {
                    'id': 'e8',
                    'title': 'Posicionamento do Site com Flexbox pt 1',
                    'link': 'https://www.youtube.com/watch?v=KbjLtEgmZ_E&list=PLhkO7OMKgT_p3VoB47VHdLGpYTzxYTv8R&index=8',
                    'duration': '20:34',
                },
                {
                    'id': 'e9',
                    'title': 'Posicionamento do Site com Flexbox pt 2',
                    'link': 'https://www.youtube.com/watch?v=hjz6ezV9_uc&list=PLhkO7OMKgT_p3VoB47VHdLGpYTzxYTv8R&index=9',
                    'duration': '30:54',
                },
                {
                    'id': 'e10',
                    'title': 'É possível programar com HTML e CSS? São linguagens de Programação?',
                    'link': 'https://www.youtube.com/watch?v=ymOYxge70Mc&list=PLhkO7OMKgT_p3VoB47VHdLGpYTzxYTv8R&index=10',
                    'duration': '7:26',
                },
            ];
        } else if (playlistId === 'algoritmo') {
            data = [{
                    'id': 'f1',
                    'title': 'Introdução a Algoritmos',
                    'link': 'https://www.youtube.com/watch?v=8mei6uVttho',
                    'duration': '14:07',
                },
                {
                    'id': 'f2',
                    'title': 'Primeiro Algoritmo',
                    'link': 'https://www.youtube.com/watch?v=M2Af7gkbbro',
                    'duration': '35:46',
                },
                {
                    'id': 'f3',
                    'title': 'Comando de Entrada e Operadores',
                    'link': 'https://www.youtube.com/watch?v=RDrfZ-7WE8c',
                    'duration': '31:47',
                },
                {
                    'id': 'f4',
                    'title': 'Operadores Lógicos e Relacionais',
                    'link': 'https://www.youtube.com/watch?v=Ig4QZNpVZYs',
                    'duration': '26:40',
                },
                {
                    'id': 'f5',
                    'title': 'Introdução ao Scratch',
                    'link': 'https://www.youtube.com/watch?v=GrPkuk1ezyo',
                    'duration': '24:57',
                },
                {
                    'id': 'f6',
                    'title': 'Exercícios de Algoritmo Resolvidos',
                    'link': 'https://www.youtube.com/watch?v=v2nCgGSVCeE',
                    'duration': '26:29',
                },
                {
                    'id': 'f7',
                    'title': 'Estruturas Condicionais 1',
                    'link': 'https://www.youtube.com/watch?v=_g05aHdBAEY',
                    'duration': '27:34',
                },
                {
                    'id': 'f8',
                    'title': 'Estruturas Condicionais 2',
                    'link': 'https://www.youtube.com/watch?v=7gGFHzqh4d8',
                    'duration': '24:21',
                },
                {
                    'id': 'f9',
                    'title': 'Estruturas de Repetição 1 ',
                    'link': 'https://www.youtube.com/watch?v=U5PnCt58Q68',
                    'duration': '31:10',
                },
                {
                    'id': 'f10',
                    'title': 'Estruturas de Repetição 2',
                    'link': 'https://www.youtube.com/watch?v=fP49L1i_-HU',
                    'duration': '29:58',
                },
            ];
        } else if (playlistId === 'linguagemc') {
            data = [{
                    'id': 'g1',
                    'title': 'Começando do absoluto zero',
                    'link': 'https://www.youtube.com/watch?v=2w8GYzBjNj8&list=PLpaKFn4Q4GMOBAeqC1S5_Fna_Y5XaOQS2',
                    'duration': '6:09',
                },
                {
                    'id': 'g2',
                    'title': 'Aprenda a usar o DEV C++',
                    'link': 'https://www.youtube.com/watch?v=QgE1zh0xCns&list=PLpaKFn4Q4GMOBAeqC1S5_Fna_Y5XaOQS2&index=2',
                    'duration': '29:51',
                },
                {
                    'id': 'g3',
                    'title': 'Aprenda a DEBUGAR em Linguagem C',
                    'link': 'https://www.youtube.com/watch?v=jV2OWKb2sUk&list=PLpaKFn4Q4GMOBAeqC1S5_Fna_Y5XaOQS2&index=3',
                    'duration': '15:37',
                },
                {
                    'id': 'g4',
                    'title': 'Aprenda a mostrar mensagens em Linguagem C',
                    'link': 'https://www.youtube.com/watch?v=eK9lfMmkDe0&list=PLpaKFn4Q4GMOBAeqC1S5_Fna_Y5XaOQS2&index=4',
                    'duration': '14:23',
                },
                {
                    'id': 'g5',
                    'title': 'Inserindo dados pelo teclado em C',
                    'link': 'https://www.youtube.com/watch?v=cKagvm-BiwI&list=PLpaKFn4Q4GMOBAeqC1S5_Fna_Y5XaOQS2&index=5',
                    'duration': '15:03',
                },
                {
                    'id': 'g6',
                    'title': 'Entenda variáveis e atrubuição de dados',
                    'link': 'https://www.youtube.com/watch?v=tfLC_huv-Ko&list=PLpaKFn4Q4GMOBAeqC1S5_Fna_Y5XaOQS2&index=6',
                    'duration': '16:01',
                },
                {
                    'id': 'g7',
                    'title': 'Aprenda a realizar cálculos em C',
                    'link': 'https://www.youtube.com/watch?v=kksV1wmnBe8&list=PLpaKFn4Q4GMOBAeqC1S5_Fna_Y5XaOQS2&index=7',
                    'duration': '19:51',
                },
                {
                    'id': 'g8',
                    'title': 'Domine o comando IF em C',
                    'link': 'https://www.youtube.com/watch?v=LQNzQCddjHQ&list=PLpaKFn4Q4GMOBAeqC1S5_Fna_Y5XaOQS2&index=8',
                    'duration': '12:46',
                },
                {
                    'id': 'g9',
                    'title': 'Operações lógicas: disjunção, conjunção e negação',
                    'link': 'https://www.youtube.com/watch?v=uGkX7tdqV8A&list=PLpaKFn4Q4GMOBAeqC1S5_Fna_Y5XaOQS2&index=9',
                    'duration': '14:09',
                },
                {
                    'id': 'g10',
                    'title': 'Domine os comandos IF e ELSE em C',
                    'link': 'https://www.youtube.com/watch?v=MGUpDTEc3SM&list=PLpaKFn4Q4GMOBAeqC1S5_Fna_Y5XaOQS2&index=10',
                    'duration': '8:06',
                },
            ];
        } else if (playlistId === 'java') {
            data = [{
                    'id': 'h1',
                    'title': 'Criando primeiro programa em Java',
                    'link': 'https://www.youtube.com/watch?v=X8AnVQ-GqLU&list=PLx4x_zx8csUjFC5WWjoNUL7LOOD7LCKRW',
                    'duration': '20:47',
                },
                {
                    'id': 'h2',
                    'title': 'Comandos de impressão e primeiras prática com variáveis',
                    'link': 'https://www.youtube.com/watch?v=xap-zvN8pOc&list=PLx4x_zx8csUjFC5WWjoNUL7LOOD7LCKRW&index=2',
                    'duration': '23:45',
                },
                {
                    'id': 'h3',
                    'title': 'Comandos de decisão em Java',
                    'link': 'https://www.youtube.com/watch?v=qQWizjnAtbs&list=PLx4x_zx8csUjFC5WWjoNUL7LOOD7LCKRW&index=3',
                    'duration': '20:59',
                },
                {
                    'id': 'h4',
                    'title': 'Obtendo dados do teclado com um objeto da classe Scanner',
                    'link': 'https://www.youtube.com/watch?v=sRsAbGjBb4g&list=PLx4x_zx8csUjFC5WWjoNUL7LOOD7LCKRW&index=4',
                    'duration': '16:57',
                },
                {
                    'id': 'h5',
                    'title': 'Tipos de Loops em Java',
                    'link': 'https://www.youtube.com/watch?v=CSEGE9Ie1Rc&list=PLx4x_zx8csUjFC5WWjoNUL7LOOD7LCKRW&index=5',
                    'duration': '18:01',
                },
                {
                    'id': 'h6',
                    'title': 'Como criar Array/Vetor em Java',
                    'link': 'https://www.youtube.com/watch?v=-Hmzi-mhThc&list=PLx4x_zx8csUjFC5WWjoNUL7LOOD7LCKRW&index=6',
                    'duration': '25:48',
                },
                {
                    'id': 'h7',
                    'title': 'Métodos da classe Array em Java',
                    'link': 'https://www.youtube.com/watch?v=d5Kl1hAs_A8&list=PLx4x_zx8csUjFC5WWjoNUL7LOOD7LCKRW&index=7',
                    'duration': '19:56',
                },
                {
                    'id': 'h8',
                    'title': 'Matrizes em Java',
                    'link': 'https://www.youtube.com/watch?v=XKDSNSJvlxM&list=PLx4x_zx8csUjFC5WWjoNUL7LOOD7LCKRW&index=8',
                    'duration': '12:51',
                },
                {
                    'id': 'h9',
                    'title': 'Entendendo Métodos em Java',
                    'link': 'https://www.youtube.com/watch?v=yf8FQem1JMg&list=PLx4x_zx8csUjFC5WWjoNUL7LOOD7LCKRW&index=9',
                    'duration': '22:06',
                },
                {
                    'id': 'h10',
                    'title': 'Aprendendo sobre classes em Java',
                    'link': 'https://www.youtube.com/watch?v=Xr9kjsra1Sw&list=PLx4x_zx8csUjFC5WWjoNUL7LOOD7LCKRW&index=10',
                    'duration': '15:31',
                },
            ];
        } else if (playlistId === 'django') {
            data = [{
                    'id': 'i1',
                    'title': 'Instalando o Django no Windows',
                    'link': 'https://www.youtube.com/watch?v=LZsjuSBW5YM&list=PLnDvRpP8BnewqnMzRnBT5LeTpld5bMvsj',
                    'duration': '13:38',
                },
                {
                    'id': 'i2',
                    'title': 'Instalando o Django no Linux',
                    'link': 'https://www.youtube.com/watch?v=L3UJvx-58hY&list=PLnDvRpP8BnewqnMzRnBT5LeTpld5bMvsj&index=2',
                    'duration': '7:49',
                },
                {
                    'id': 'i3',
                    'title': 'Iniciando o projeto do Curso, criando URL e View',
                    'link': 'https://www.youtube.com/watch?v=NAstsS4rVrY&list=PLnDvRpP8BnewqnMzRnBT5LeTpld5bMvsj&index=3',
                    'duration': '11:53',
                },
                {
                    'id': 'i4',
                    'title': 'URLs, Views e Templates',
                    'link': 'https://www.youtube.com/watch?v=6EpHpUoBQDc&list=PLnDvRpP8BnewqnMzRnBT5LeTpld5bMvsj&index=4',
                    'duration': '8:53',
                },
                {
                    'id': 'i5',
                    'title': 'Estendendo templates e template base para o projeto',
                    'link': 'https://www.youtube.com/watch?v=gBnLE2rFpqk&list=PLnDvRpP8BnewqnMzRnBT5LeTpld5bMvsj&index=5',
                    'duration': '6:48',
                },
                {
                    'id': 'i6',
                    'title': 'Adicionado CSS, JS e Bootstrap',
                    'link': 'https://www.youtube.com/watch?v=zKHxYWIjj3U&list=PLnDvRpP8BnewqnMzRnBT5LeTpld5bMvsj&index=6',
                    'duration': '10:47',
                },
                {
                    'id': 'i7',
                    'title': 'Criando o layout da aplicação',
                    'link': 'https://www.youtube.com/watch?v=biuNVj1PuGs&list=PLnDvRpP8BnewqnMzRnBT5LeTpld5bMvsj&index=7',
                    'duration': '17:05',
                },
                {
                    'id': 'i8',
                    'title': 'Models e Migrations',
                    'link': 'https://www.youtube.com/watch?v=Jd6_c3QD3bY&list=PLnDvRpP8BnewqnMzRnBT5LeTpld5bMvsj&index=8',
                    'duration': '18:00',
                },
                {
                    'id': 'i9',
                    'title': 'Inserindo dados do banco no template',
                    'link': 'https://www.youtube.com/watch?v=xFin4lRI39k&list=PLnDvRpP8BnewqnMzRnBT5LeTpld5bMvsj&index=9',
                    'duration': '13:36',
                },
                {
                    'id': 'i10',
                    'title': 'Inserindo dados no banco de dados',
                    'link': 'https://www.youtube.com/watch?v=la_MTnWEBMM&list=PLnDvRpP8BnewqnMzRnBT5LeTpld5bMvsj&index=10',
                    'duration': '14:01',
                },
            ];
        }

        // Armazenar os dados no localStorage
        localStorage.setItem('playlistData', JSON.stringify(data));
        localStorage.setItem('playlistId', playlistId);
        localStorage.setItem('playlistTitle', playlistTitle);

        // Redirecionar para a página da playlist de vídeos
        window.location.href = 'video.html';
    });
});