function calcularRank(nomeHeroi, quaVitorias, quaDerrotas){
        let saldorank = quaVitorias - quaDerrotas

        if (saldorank <= 10){
                console.log(nomeHeroi + " O seu rank é "+ saldorank + " você esta no rank FERRO ")
        }else if (saldorank >= 11 && saldorank <= 20){
                console.log(nomeHeroi + " O seu rank é "+ saldorank + " você esta no rank BROZE ")
        }else if(saldorank >= 21 && saldorank <= 50){
                console.log(nomeHeroi + " O seu rank é "+ saldorank + " você esta no rank PRATA ")
        }else if(saldorank >= 51 && saldorank <= 80){
                console.log(nomeHeroi + " O seu rank é "+ saldorank + " você esta no rank DIAMANTE ")
        }else if(saldorank >= 91 && saldorank <= 100){
                console.log(nomeHeroi + " O seu rank é "+ saldorank + " você esta no rank LEADÁRIO ")
        }else{
                console.log(nomeHeroi + " O seu rank é "+ saldorank + " você esta no rank IMORTAL ")
        }
}

calcularRank("Pedrinho", 300, 10)
calcularRank("Ana", 49, 5)

