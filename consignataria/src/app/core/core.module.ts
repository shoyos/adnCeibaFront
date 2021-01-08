import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { ManejadorError } from './interceptor/manejador-error';
import { NotificationService } from './services/notificaciones.service';
import { ServerErrorInterceptor } from './interceptor/server-error.interceptor';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    MatCardModule,
  ],
  providers:[
    NotificationService,
    { provide: ErrorHandler, useClass: ManejadorError },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
  ]
  
})
export class CoreModule { }
