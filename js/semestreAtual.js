const local = document.querySelector("#semestre-atual")
const anoAtual = document.querySelector('#anoAtual')
const dataAtual = document.querySelector('#dataAtual')
const horaAtual = document.querySelector('#horaAtual')

const data = new Date()
const ano = data.getFullYear()
const semestre = data.getMonth() <= 5 ? 1 : 2

const semestreAtual = `${ano}.${semestre}`
local.textContent = semestreAtual

anoAtual.textContent = ano

const segundos = data.getSeconds()
const minutos = data.getMinutes()
const hora = data.getHours()

const dia = data.getDate()
const mes = data.getMonth()

const formatarHorario = (tempo) => {
    return tempo <= 9 ? '0'+tempo : tempo
}

dataAtual.textContent = `${formatarHorario(dia)}/${formatarHorario(mes)}/${formatarHorario(ano)}`


const atualizarHora = () => {
    horaAtual.textContent = `${formatarHorario(hora)}:${formatarHorario(minutos)}:${formatarHorario(segundos)}`  
}


setInterval(atualizarHora(), 1000)




