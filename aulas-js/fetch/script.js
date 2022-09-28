const cep = '01001000';

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

fetchResult
    .then(response => {
        console.log("SUCESSO NO FETCH", response);
        const json = response.json();
        json
            .then(result => {
                console.log("Sucesso no JSON: ", result);
            })
            .catch(error => {
                console.log("Erro no JSON: ", error);
            })
    })
    .catch(error => {
        console.log("DEU ERRO NO FETCH", error);
    })

    console.log("A");
    console.log("B");



