import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SalesmanService } from 'src/salesman/salesman.service';
import { AssistantService } from 'src/assistant/assistant.service';
import { ROLE } from './enums/role.enum';

type authInput = { email: string; password: string };
type signInData = { email: string; id: number; role: ROLE };
type AuthResult = { accessToken: string; id: number; email: string; role: ROLE };

@Injectable()
export class AuthService {
  constructor(
    private salesmanService: SalesmanService,
    private assistantService: AssistantService,
    private readonly jwtService: JwtService,
  ) { }

  // ------------------------
  // GENERAL AUTHENTICATE()
  // ------------------------
  async authenticate(input: authInput): Promise<AuthResult> {
    const user =
      (await this.validateSalesman(input))  //||
    //     (await this.validateWorker(input)) ||
    //   (await this.validateCompany(input));

    if (!user) throw new UnauthorizedException('Invalid email or password');

    return this.signIn(user);
  }

  // ------------------------
  // Salesman AUTHENTICATION
  // ------------------------
  async authenticateSalesman(input: authInput): Promise<AuthResult> {
    const user = await this.validateSalesman(input);

    if (!user) throw new UnauthorizedException('Invalid Salesman credentials');

    return this.signIn(user);
  }

  async validateSalesman(input: authInput): Promise<signInData | null> {
    const user = await this.salesmanService.findByEmail(input.email);

    if (user && user.password === input.password) {
      return { id: user.id, email: user.email, role: user.role };
    }

    return null;
  }
  
  // ------------------------
  // Assistant AUTHENTICATION
  // ------------------------

  async authenticateAssistant(input: authInput): Promise<AuthResult> {
    const user = await this.validateAssistant(input);

    if (!user) throw new UnauthorizedException('Invalid Salesman credentials');

    return this.signIn(user);
  }

  async validateAssistant(input: authInput): Promise<signInData | null> {
    const user = await this.salesmanService.findByEmail(input.email);

    if (user && user.password === input.password) {
      return { id: user.id, email: user.email, role: user.role };
    }

    return null;
  }


  async signIn(user: signInData): Promise<AuthResult> {
    const tokenPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const accessToken = this.jwtService.sign(tokenPayload);

    return {
      accessToken,
      id: user.id,
      email: user.email,
      role: user.role,
    };
  }


  async generateToken(payload: { sub: number; email: string; role: string }) {
    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }

  async verifyToken(token: string) {
    return this.jwtService.verify(token);
  }
}
