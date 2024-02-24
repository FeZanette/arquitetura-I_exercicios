
// tipagem do que vem do banco de dados
export interface PlaceDB {
    id: string,
    nome: string,
    latitude: string,
    longitude: string
}

// representação da entidade dentro do TS/Express

export class Place {
    constructor(
        private id: string,
        private nome: string,
        private latitude: string,
        private longitude: string
    ) {}

    public getId() {
        return this.id
    }

    public setId(value: string) {
        return this.id
    }

    public getNome() {
        return this.nome
    }

    public setNome(value: string) {
        return this.nome
    }

    public getLatitude() {
        return this.latitude
    }

    public setLatitude(value: string) {
        return this.latitude
    }

    public getLongitude() {
        return this.longitude
    }

    public setLogitude(value: string) {
        return this.longitude
    }
}