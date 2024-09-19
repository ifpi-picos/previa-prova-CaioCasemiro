//Retorna o maior número da lista usando Math.max(). Se a lista for vazia ou inválida, retorna null.
export function maiorNumero(lista){
    if (Array.isArray(lista)){
        if (lista.length>0){
            return Math.max(...lista)
        } else{
            return null
        }
    } else{
        return null
    }
    
}

//Verifica se um número é par ou ímpar usando o operador %.
export function verificarParOuImpar(num){
    if (typeof num !== 'number' || isNaN(num)){
        return null
    } else if (num %2 === 0){
        return "Par"
    }else if (num %2 !== 0){
        return "Ímpar"
    }
}

//Conta quantas vezes o caractere 'a' ou 'A' aparece em uma string usando um loop while.
export function contarCaracter(str){
    if (typeof str !== "string"){
        return null
    } else{
        var contadorDeA = 0
        let i = 0
        while (i < str.length){
            if (str[i] === "a" || str[i] === "A"){
                contadorDeA++
            }
            i++
        }
        if (contadorDeA === 0){
            return null
        }else{
            return contadorDeA
        }
        
    }
}

//Atualiza o valor de uma propriedade existente em um objeto. Se a chave não existir, retorna null.
export function atualizarPropriedade(objeto, propriedade, alteração){
    if (propriedade in objeto){
        objeto[propriedade] = alteração
        return objeto
    } else{
        return null
    }
}