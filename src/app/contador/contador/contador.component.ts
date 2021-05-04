import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
})
export class ContadorComponent {
    titulo: string = 'Aplicación de Contador';
    contador: number = 0;
    base: number = 5;
    operacionContador = (operacion: string): number => {
        switch (operacion) {
            case 'sumar':
                this.contador += this.base;
                break;
            case 'restar':
                if (this.contador === 0) {
                    this.contador = 0;
                    break;
                }
                this.contador -= this.base;
                break;
        }
        return this.contador;
    };
}