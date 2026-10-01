const botao = document.getElementById("criarDiv");
const botao2 = document.getElementById("removDiv")
const container = document.getElementById("container");

/*
botao.addEventListener("click", () => {
    const novaDiv = document.createElement("div");
    novaDiv.textContent = "Nova Tarefa!";
    novaDiv.style.border = "1px solid #000";
    novaDiv.style.padding = "8px";
    novaDiv.style.marginTop = "5px";
    container.appendChild(novaDiv);

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    
    tarefas.push(novaDiv.textContent);

    localStorage.setItem("tarefas", JSON.stringify(tarefas));

});

window.addEventListener("DOMContentLoaded", () => {

    const divs = JSON.parse(localStorage.getItem("tarefas")) || [];

    divs.forEach(texto => {
        const novaDiv = document.createElement("div");

        novaDiv.textContent = texto;
        novaDiv.style.border = "1px solid #000";
        novaDiv.style.padding = "8px";
        novaDiv.style.marginTop = "5px";
        container.appendChild(novaDiv);
    });

});

botao2.addEventListener("click", () => {
    container.innerHTML = "";
    localStorage.removeItem("tarefas");
});



*/
botao.addEventListener("click", () => {

    const novaDiv = document.createElement("div");
    novaDiv.classList.add = "novaDiv"
    novaDiv.style.border = "1px solid #000";
    novaDiv.style.padding = "8px";
    novaDiv.style.marginTop = "5px";
    novaDiv.style.gap = "15px";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = "Nova Tarefa!";

    const botaoEditar = document.createElement("button");

    botaoEditar.textContent = "Editar";
    botaoEditar.style.marginLeft = "10px";

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

    novaDiv.appendChild(checkbox);
    novaDiv.appendChild(textoTarefa);
    novaDiv.appendChild(botaoEditar);

    container.appendChild(novaDiv);

    salvarTarefas();

});

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

        const novaDiv = document.createElement("div");
        novaDiv.classList.add("novaDiv")


        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.checked = tarefa.concluida;

        const textoTarefa = document.createElement("span");

        textoTarefa.textContent = tarefa.texto;

        if (checkbox.checked) {

            textoTarefa.style.textDecoration = "line-through";
            textoTarefa.style.color = "gray";

        }

        const botaoEditar = document.createElement("button");

        botaoEditar.textContent = "Editar";
        botaoEditar.style.marginLeft = "10px";

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


        novaDiv.appendChild(checkbox);
        novaDiv.appendChild(textoTarefa);
        novaDiv.appendChild(botaoEditar);

        container.appendChild(novaDiv);

    });

});

botao2.addEventListener("click", () => {

    container.innerHTML = "";

    localStorage.removeItem("tarefas");

});
