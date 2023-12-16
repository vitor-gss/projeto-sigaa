const local = document.querySelector("#semestre-atual")
const data = new Date()
const ano = data.getFullYear()
const semestre = data.getMonth() <= 5 ? 1 : 2

const semestreAtual = `${ano}.${semestre}`
local.textContent = semestreAtual

