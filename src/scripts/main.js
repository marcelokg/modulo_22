AOS.init();

const dataDoEvento = new Date("Jan 12, 2024 19:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contadorParaEvento = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()
    
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual

    const diaEmMs = 1000 * 60 * 60 * 24
    const horasEmMs = 1000 * 60 * 60
    const minutosEmMs = 1000 * 60

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs) // arrendoda pra baixo
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMs) // % pega o resto da divisão
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs)
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(distanciaAteOEvento < 0){
        clearInterval(contadorParaEvento)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }

},1000)