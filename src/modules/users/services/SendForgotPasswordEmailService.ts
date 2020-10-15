// import { hash } from 'bcryptjs';
// import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository'
// import User from '../infra/typeorm/entities/User';
import { injectable, inject } from 'tsyringe';

interface Request {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }
  public async execute(): Promise<void> {

  }
}

export default SendForgotPasswordEmailService;
