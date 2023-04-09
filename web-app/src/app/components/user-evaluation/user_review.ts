export interface date{
    day: number;
    month: string;
    year: number;
}

export class User_review {
    nome!: string;
    country!: string;
    comment!: string;
    date_of_comment!: date;

    constructor(name :string, country :string, comment :string, date: date) {
        this.nome = name;
        this.country = country;
        this.comment = comment;
        this.date_of_comment = date;
    }
}
