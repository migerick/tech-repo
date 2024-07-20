export class FetchApi {
    #baseUrl = 'http://localhost:3001';

    async get(url: string): Promise<any> {
        const response = await fetch(`${this.#baseUrl}${url}`);
        return await response.json();
    }

    async post(url: string, data: any): Promise<any> {
        const response = await fetch(`${this.#baseUrl}${url}`, {
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    async put(url: string, data: any): Promise<any> {
        const response = await fetch(`${this.#baseUrl}${url}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    async delete(url: string): Promise<any> {
        const response = await fetch(`${this.#baseUrl}${url}`, {
            method: 'DELETE'
        });
        return await response.json();
    }
}