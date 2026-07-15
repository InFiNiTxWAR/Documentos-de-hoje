const documentos = [

    {
        id: "DOCUMENTO-001",
        senha: "greyfield",
        arquivo: "documentos/greyfield.html"
    },

    {
        id: "DOCUMENTO-002",
        senha: "convergencia",
        arquivo: "documentos/convergencia.html"
    },

    {
        id: "DOCUMENTO-003",
        senha: "tiberio",
        arquivo: "documentos/tiberio.html"
    },

    {
        id: "DOCUMENTO-004",
        senha: "ecos",
        arquivo: "documentos/livro.html"
    },

    {
        id: "DOCUMENTO-005",
        senha: "proximaconvergencia",
        arquivo: "documentos/carta.html"
    },

    {
        id: "DOCUMENTO-006",
        senha: "ashara",
        arquivo: "documentos/ashara.html"
    },

    {
        id: "DOCUMENTO-007",
        senha: "condutor",
        arquivo: "documentos/condutores.html"
    },

    {
        id: "DOCUMENTO-008",
        senha: "decreto88",
        arquivo: "documentos/decreto88.html"
    },

    {
        id: "DOCUMENTO-009",
        senha: "dragaoazul",
        arquivo: "documentos/dragao.html"
    },

    {
        id: "DOCUMENTO-010",
        senha: "fissura",
        arquivo: "documentos/fissura.html"
    },

    {
        id: "DOCUMENTO-011",
        senha: "icypeak",
        arquivo: "documentos/icypeak.html"
    },
    {
        id: "DOCUMENTO-012",
        senha: "tharzul",
        arquivo: "documentos/diario/tharzul.html"
    },
    {
        id: "DOCUMENTO-013",
        senha: "conselho",
        arquivo: "documentos/conselhos-dos-setes.html"
    },
    {
        id: "DOCUMENTO-014",
        senha: "zh5000",
        arquivo: "documentos/registro-cronologico.html"
    },
    {
        id: "DOCUMENTO-015",
        senha: "profecia",
        arquivo: "documentos/profecia-ultima-aurora.html"
    },
    {
        id: "DOCUMENTO-016",
        senha: "arvore",
        arquivo: "documentos/arvore-genealogica.html"
    },
    {
        id: "DOCUMENTO-017",
        senha: "oberon",
        arquivo: "documentos/oberon.html"
    },
    {
        id: "DOCUMENTO-018",
        senha: "cinco",
        arquivo: "documentos/homem-cinco-tempestades.html"
    },
    {
        id: "DOCUMENTO-019",
        senha: "elyndra",
        arquivo: "documentos/elyndra.html"
    },
    {
        id: "DOCUMENTO-020",
        senha: "guerra",
        arquivo: "documentos/guerra-escarlate.html"
    },
    {
    id: "DOCUMENTO-021",
    senha: "mana",
    arquivo: "documentos/nascimento-primeira-mana.html"
}
];

const grid = document.getElementById("gridDocumentos");

documentos.forEach(doc => {

    grid.innerHTML += `

<div class="card">

<h2>${doc.id}</h2>

<p>
Status: <span>ARQUIVADO</span>
</p>

<input
type="password"
placeholder="Senha de acesso"
id="${doc.id}">

<button onclick="abrir('${doc.id}')">
Acessar
</button>

</div>

`;

});

function abrir(id) {

    const doc = documentos.find(d => d.id === id);

    const senha = document.getElementById(id).value.trim();

    if (senha.toLowerCase() === doc.senha.toLowerCase()) {

        window.location.href = doc.arquivo;

    } else {

        alert("Senha incorreta.");

    }

}   