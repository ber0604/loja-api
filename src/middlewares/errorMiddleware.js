function errorMiddleware(err, req, res, next) {
    console.error('[ERRO]:', err.stack);
    // Exibe o erro completo no console para depuração
    const statusCode = err.statusCode || 500;
    // Define o código de status da resposta: usa o informado no erro ou 500
    res.status(statusCode).json({
    error: err.message || 'Erro interno no servidor',
    status: statusCode,
    // Retorna uma resposta JSON padronizada com a mensagem de erro e o status
    });
}
   module.exports = errorMiddleware;
   