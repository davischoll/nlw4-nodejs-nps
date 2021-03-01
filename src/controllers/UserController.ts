import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import * as yup from "yup";
import { AppError } from "../errors/AppErrors";

class UserController {

  async create (request: Request, response: Response) {
    const { name, email } = request.body;

    const schema = yup.object().shape({
      name: yup.string().required("Campo Nome obrigatório"),
      email: yup.string().email().required("Campo email é obrigatório")
    })
    
    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      throw new AppError(err);
    }

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({   // Método findOne faz a consulta no banco: SELECT * FROM users WHERE email = "email@email.com" 
      email,
    })

    if (userAlreadyExists) {
      throw new AppError("Usuário já existe!");
    }

    const user = usersRepository.create({
      name, email
    })

    await usersRepository.save(user);

    return response.status(201).json(user);
  }
}

export { UserController };
