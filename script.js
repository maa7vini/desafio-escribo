var userNumber = prompt("Digite o número: ")

function calculator(number){

    try {

        const convertInt = Number(number)

        if(Number.isNaN(convertInt)){
            return alert("Deve ser um número!")
        } else {
            if(!Number.isInteger(convertInt)){
                return alert("Deve ser um número inteiro!")
            } else {
                if(convertInt < 0){
                    return alert("Deve ser um número positivo!")
                } else {
                    
                    let finalResult = 0

                    for (let i = 1; i < convertInt; i++) {
                       const result3 = i / 3 

                       const result5 = i / 5

                       if(Number.isInteger(result3) || Number.isInteger(result5)){
                        finalResult += i
                       }
                        
                    }

                    return alert(`O resultado final é ${finalResult}`)


                }
            }
        }
        
    } catch (error) {
        console.error(error)
    }

}

calculator(userNumber)