import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthService} from "./auth.service";

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true }
]