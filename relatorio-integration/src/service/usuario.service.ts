import { ConfigService } from '@nestjs/config';
import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Usuario } from '../entity/usuario/usuario';

@Injectable()
export class UsuarioService {
  readonly baseUrl: string;

  constructor(readonly config: ConfigService, readonly http: HttpService) {
    this.baseUrl = config.get<string>('USUARIO_ENDPOINT', 'http://usuario-microservice',);
  }

  getUsuario(id: number) {
    return this.http
      .get<Usuario>(`${this.baseUrl}/${id}`)
      .pipe(map((u) => u.data));
  }
}
