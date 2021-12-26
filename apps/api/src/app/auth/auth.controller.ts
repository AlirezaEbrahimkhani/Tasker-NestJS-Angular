import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('task')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Get()
  getMessage() {
    return { message: 'Hello world' };
  }
}
