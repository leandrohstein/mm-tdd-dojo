export const isBissexto = (ano) => {
    verifyRestDivisorIsFour(ano)
};

export const verifyRestDivisorIsFour = (number) => {
    if(typeof number !== 'number') {
        return false;
    }

    const result = number % 4;
    return result === 0;
};
