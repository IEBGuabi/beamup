import { TReadinessUseCaseInput, TReadinessUseCaseOutput } from "./TReadinessUseCase";
import { IReadinessUseCase } from "./IReadinessUseCase";
import { InternalServerError } from "@infra/http/errors/http-errors/InternalServerError";
import { inject, injectable } from "tsyringe";
@injectable()
export class ReadinessUseCase implements IReadinessUseCase {
  constructor(
  ) {}

  async execute(_: TReadinessUseCaseInput): Promise<TReadinessUseCaseOutput> {
    return
  }
}