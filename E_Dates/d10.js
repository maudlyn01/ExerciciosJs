//10.Crie uma função que retorna quantos dias faltam para o final do ano.
function finalAno(){
    const hoje=new Date();
    const ano=hoje.getFullYear();
    const fimDeAno=new Date(ano,11,31);

    const dif_ms=fimDeAno-hoje;

    const ms_dia=1000*60*60*24;
    return Math.ceil(dif_ms/ms_dia);


}
console.log("Faltam "+finalAno()+" dias para o final do ano ");
