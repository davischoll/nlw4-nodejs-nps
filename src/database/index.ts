import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();  // getConnectionOptions() pega todas as informações que estão dentro do ormconfig.json. Quando estiver utilizando testes, vai mudar o database para um db de teste. Mas as informações do db vão permanecer iguais. 

  return createConnection(
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === 'test'                 // Se a variável de ambiente é teste, vai usar o db de teste. Caso contrário, usa o banco padrão(default).
          ? "./src/database/database.test.sqlite"
          : defaultOptions.database,
    })
  );
};
