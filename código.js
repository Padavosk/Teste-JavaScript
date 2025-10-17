
function mostrarNome() {
            const nomeInput = document.getElementById("nomeInput").value;
            
            if (nomeInput.trim() === "" ) { // trim usa para verificar se deixou em branco, ou so digitou tudo "espaço, espaço espaço e tals"
                window.alert("Por favor digite seu nome") 
            }
            else window.alert("Seu cadastro está completo " + nomeInput);
        }

