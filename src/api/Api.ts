import {FetchApi} from "./FetchApi";

export class Api extends FetchApi {
    #provider = new FetchApi();

    async get<T>(path: string): Promise<T | undefined> {
        try {
            return await this.#provider.get(path)
        } catch (e: any) {
            return e
        }
    }

    async post<T>(path: string, data: any): Promise<T | undefined> {
        try {
            return await this.#provider.post(path, data)
        } catch (e: any) {
            return e
        }
    }

    async put<T>(path: string, data: any): Promise<T | undefined> {
        try {
            return await this.#provider.put(path, data)
        } catch (e: any) {
            return e
        }
    }

    async delete<T>(path: string): Promise<T | undefined> {
        try {
            return await this.#provider.delete(path)
        } catch (e: any) {
            return e
        }
    }

}