export namespace ModelsAuth {

  export const PathUsers = 'Users'
  export const PathIntentsLogin = 'intentsLogin'

  export const StrongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

  export interface DatosResgister {
      email: string;
      password: string;
  }

  export interface DatosLogin {
      email: string;
      password: string;
  }

  export interface UpdateProfileI {
      displayName?: string,
      photoURL?: string
  }

  export interface UserProfile {
      name: string;
      photo: string;
      colegio: string;
      id: string;
      email: string;
      roles?: {
          admin?: boolean;
          usuario?: boolean;
      }
  }

  export interface ProviderLoginI {
      name: string;
      id: IdProviderLogin;
      color: string;
      textColor: string;
      icon: string;
  }

  export type IdProviderLogin = 'password' | 'google' | 'facebook' | 'apple'

  export type Rol = 'admin' | 'usuario';

}
