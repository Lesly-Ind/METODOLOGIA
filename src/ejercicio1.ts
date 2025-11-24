class CuentaBancaria {
    private _saldo: number; // atributo privado con tipo number

    constructor(saldoInicial: number) {
        this._saldo = saldoInicial;
    }

    depositar(cantidad: number): void {
        this._saldo += cantidad;
    }

    mostrarSaldo(): void {
        console.log("Saldo actual: $" + this._saldo);
    }
}

let cuenta = new CuentaBancaria(2000);
cuenta.depositar(800);
cuenta.mostrarSaldo();
