import { Request, Response } from "express";
import { getCustomRepository, Not, IsNull } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class NpsController {

  async execute (request: Request, response: Response) {
    const { survey_id } = request.params;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveysUsers = await surveysUsersRepository.find({
      survey_id,
      value: Not(IsNull()),
    })

    const detratores = surveysUsers.filter(
      (survey) => survey.value >= 0 && survey.value <= 6
    ).length;

    const promotores = surveysUsers.filter(
      (survey) => survey.value >= 9
    ).length;

    const passivos = surveysUsers.filter(
      (survey) => survey.value >= 7 && survey.value <= 8
    ).length;

    const totalAnswers = surveysUsers.length;

    const calculate = Number((((promotores - detratores) / totalAnswers) * 100).toFixed(2));

    return response.json({
      detratores,
      promotores,
      passivos,
      totalAnswers,
      nps: calculate
    })
  }
}

export { NpsController };
