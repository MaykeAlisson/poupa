const formatBR = (value=0) => {

    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
};

export default formatBR;