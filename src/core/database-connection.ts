import mysql from 'mysql2/promise';

export class DatabaseConnection {
    private host: string;
    private database: string;
    private user: string;
    private password: string;
    private connection: mysql.Connection;

    constructor() {
        this.host = "localhost";
        this.user = "root";
        this.password = "";
        this.database = "nodedb";
        this.connection = mysql.createPool(
            {
                host: this.host,
                user: this.user,
                database: this.database,
                password: this.password
            }
        );
    }

    async getConnection() {
        try{
            return await this.connection;
        }
        catch(e : any){
            console.log(e.message);
        }
    }
}