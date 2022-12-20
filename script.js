//Preparo le mie variabili e pesco gli elementi dal dom
const panello = document.querySelector('.panel');
const giorni = document.getElementById('days');
const ore = document.getElementById('hours');
const minuti = document.getElementById('minutes');
const secondi = document.getElementById('seconds');
const secondims = 1000;
const minutims = 60 * secondims
const orems = 60 * minutims
const giornims = 24 * orems
const natale = new Date ("December 25 2022")
const natalems = natale.getTime()
//Svolgimento
function timer () {
    const giornoCorrentems = new Date ().getTime()
    const scarto = natalems - giornoCorrentems;
    if ( scarto > 0) {
        const giorniMancanti = Math.floor ( scarto / giornims)
        const oreMancanti = Math.floor ((scarto % giornims) / orems)
        const minutiMancanti = Math.floor ((scarto % orems) / minutims)
        const secondiMancanti = Math.floor ((scarto % minutims) / secondims)
        giorni.innerText=giorniMancanti
        ore.innerText=oreMancanti
        minuti.innerText=minutiMancanti
        secondi.innerText=secondiMancanti
    } 
    else {
        clearInterval(timer)
        panello.innerHTML = "<h1>Buon Natale!</h1>"
    }
}
const conteggio = setInterval (timer, 1000)