import { Roles, ROLES_KEY } from './../../../decorators/roles.decorators';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLE } from 'src/auth/enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector:Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean {
    
    const requiredRoles=this.reflector.getAllAndOverride<ROLE[]>(ROLES_KEY,[
      context.getHandler(),
      context.getClass()
    ])
    const user =context.switchToHttp().getRequest().user; 
    const hasRequiredRoles=requiredRoles.some(role=>user.role==role)
    return hasRequiredRoles;
  }
}
