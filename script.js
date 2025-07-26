function showTrivia() {
    alert("¿Sabías que Cada agente tiene una nacionalidad real?");
    alert("¿Sabías que Jett es el agente más jugado en Valorant?");
    alert("¿Sabías que Las armas tienen patrones de retroceso únicos?");
}

function startQuiz() {
    let result = prompt("¿Prefieres atacar o defender? (Escribe 'atacar' o 'defender')");
    
    if (result.toLowerCase() === "atacar") {
        alert("Eres como Jett o Reyna, un Duelista agresivo.");
    } else {
        alert("Eres como Sage o Killjoy, un gran soporte para tu equipo.");
    }
}