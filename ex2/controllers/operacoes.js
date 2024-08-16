function somar(body){
    return (parseFloat(body.n1) + parseFloat(body.n2));
}

function subtrair(body){
    return (parseFloat(body.n1) - parseFloat(body.n2));
}

module.exports = {
    somar, subtrair
}