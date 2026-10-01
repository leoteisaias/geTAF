const botao = document.getElementById("criarDiv");
const botao2 = document.getElementById("removDiv")
const container = document.getElementById("container");

botao.addEventListener("click", () => {

    const novaDiv = document.createElement("div");
    novaDiv.classList.add("tarefa");


    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const textoTarefa = document.createElement("span");
    textoTarefa.classList.add("txtTaf");
    textoTarefa.textContent = "Nova Tarefa!";

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("btnEdit");
    botaoEditar.textContent = "Editar";

    const botaoRemover = document.createElement("Remover");
    botaoRemover.classList.add("removDiv");
    botaoRemover.textContent = "Remover";

    // botao checkbox acionado
    checkbox.addEventListener("change", () => {

        if (checkbox.checked) {

            textoTarefa.style.textDecoration = "line-through";
            textoTarefa.style.color = "gray";

        } else {

            textoTarefa.style.textDecoration = "none";
            textoTarefa.style.color = "black";

        }

        salvarTarefas();
    });

    // botao de edit acionado
    botaoEditar.addEventListener("click", () => {

        const novoTexto = prompt(
            "Digite o novo texto:",
            textoTarefa.textContent
        );

        if (novoTexto !== null) {

            textoTarefa.textContent = novoTexto;

            salvarTarefas();
        }

    });

    botaoRemover.addEventListener("click", () => {
            novaDiv.remove();
        });

    novaDiv.appendChild(checkbox);
    novaDiv.appendChild(textoTarefa);
    novaDiv.appendChild(botaoEditar);
    novaDiv.appendChild(botaoRemover);
    container.appendChild(novaDiv);

    salvarTarefas();

});

// função que salva as tarefas
function salvarTarefas() {

    const tarefas = [];

    const divs = container.querySelectorAll(":scope > div");

    divs.forEach(div => {

        const checkbox = div.querySelector("input");
        const texto = div.querySelector("span");

        tarefas.push({
            texto: texto.textContent,
            concluida: checkbox.checked
        });

    });

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

window.addEventListener("DOMContentLoaded", () => {

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    tarefas.forEach(tarefa => {

        // div
        const novaDiv = document.createElement("div");
        novaDiv.classList.add("tarefa");
      
        // checkbox
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.checked = tarefa.concluida;

        // txt da tarefa
        const textoTarefa = document.createElement("span");
        textoTarefa.classList.add("txtTaf");
        textoTarefa.textContent = tarefa.texto;

        const botaoRemover = document.createElement("Remover");
        botaoRemover.classList.add("removDiv");
        botaoRemover.textContent = "Remover";

        if (checkbox.checked) {

            textoTarefa.style.textDecoration = "line-through";
            textoTarefa.style.color = "gray";

        }

        // botao de edit
        const botaoEditar = document.createElement("button");
        botaoEditar.classList.add("btnEdit");
        botaoEditar.textContent = "Editar";

        // botao de check acionado
        checkbox.addEventListener("change", () => {

            if (checkbox.checked) {

                textoTarefa.style.textDecoration = "line-through";
                textoTarefa.style.color = "gray";

            } else {

                textoTarefa.style.textDecoration = "none";
                textoTarefa.style.color = "black";

            }

            salvarTarefas();

        });

        // botao de editar acionado
        botaoEditar.addEventListener("click", () => {

            const novoTexto = prompt(
                "Digite o novo texto:",
                textoTarefa.textContent
            );

            if (novoTexto !== null) {

                textoTarefa.textContent = novoTexto;

                salvarTarefas();

            }

        });

        botaoRemover.addEventListener("click", () => {
            novaDiv.remove();
        });

        novaDiv.appendChild(checkbox);
        novaDiv.appendChild(textoTarefa);
        novaDiv.appendChild(botaoEditar);
        novaDiv.appendChild(botaoRemover);
        container.appendChild(novaDiv);

    });
    

});

botao2.addEventListener("click", () => {

    container.innerHTML = "";

    localStorage.removeItem("tarefas");

});
