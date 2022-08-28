let inputSaldo = document.getElementById("saldo");
let res1 = document.getElementById("res1");
let res2 = document.getElementById("res2");
let res3 = document.getElementById("res3");

function calcular1(){
    let saldo = inputSaldo.value;
    if(saldo > 0){

        let necessidade = saldo/2;
        let lazer = 30/100 * saldo;
        let guardar = 20/100 * saldo

        
        res1.innerHTML = `<hr/><p>NECESSIDADES: <b>${necessidade.toFixed(2)}<b/>R$<p/>`
        res2.innerHTML = `<p>LAZER: <b>${lazer.toFixed(2)}R$<b/><br><p/>`
        res3.innerHTML = `<p>GUARDAR: <b>${guardar.toFixed(2)}R$<b/><p/><br>`;
    }else{
        window.alert("Número inválido");
    }
   
   
}

let inputSaldo2 = document.getElementById("saldo2");
let res4 = document.getElementById("res4");
let res5 = document.getElementById("res5");
let res6 = document.getElementById("res6");



function calcular2(){
    saldo = inputSaldo2.value;

    if(saldo > 0){
        let necessidade = saldo/2.;
        let lazer = 15/100 * saldo;
        let guardar = 35/100 * saldo

        res4.innerHTML = `<hr/><p>NECESSIDADES: <b>${necessidade.toFixed(2)}<b/>R$<p/>`;
        res5.innerHTML = `<p>LAZER: <b>${lazer.toFixed(2)}<b/>R$<p/>`;
        res6.innerHTML = `<p>GUARDAR: <b>${guardar.toFixed(2)}<b/>R$<p/><br>`;
    }else{
        window.alert("Número inválido");
    }
}

let inputSaldo3 = document.getElementById("saldo3");
let res7 = document.getElementById("res7");
let res8 = document.getElementById("res8");


function calcular3(){
    saldo = inputSaldo3.value;

    if(saldo > 0){
        let necessidade = 70/100 * saldo;
        let guardar = 30/100 * saldo

        res7.innerHTML = `<hr/><p>NECESSIDADES: <b>${necessidade.toFixed(2)}<b/>R$<p/>`;
        res8.innerHTML = `<p>GUARDAR: <b>${guardar.toFixed(2)}<b/>R$<p/><br>`;
    }else{
        window.alert("Número inválido");
    }

    
}