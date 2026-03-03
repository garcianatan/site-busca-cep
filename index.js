function buscarCep() {
    let cep = document.getElementById("cep").value;

    if(cep.length != 8) {
        Alert.alert("cep inválido, digite 8 números")
        return
      }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(dados => {
        if (dados.erro) {
            alert("CEP não encontrado!");
            return;
        }
        
        document.getElementById("cepRetorno").textContent = dados.cep;
        document.getElementById("logradouro").textContent = dados.logradouro;
        document.getElementById("bairro").textContent = dados.bairro;
        document.getElementById("cidade").textContent = dados.localidade;
        document.getElementById("estado").textContent = dados.uf;
    })
    .catch(error => {
        console.error("Erro ao buscar CEP:", error);
        alert("Erro na requisição!");
    })
  
}

function limparCampos() {
    
    document.getElementById("cep").value = "";
    document.getElementById("cepRetorno").textContent = "";
    document.getElementById("logradouro").textContent = "";
    document.getElementById("bairro").textContent = "";
    document.getElementById("cidade").textContent = "";
    document.getElementById("estado").textContent = "";

    // Foca novamente no input
    document.getElementById("cep").focus();
}



    