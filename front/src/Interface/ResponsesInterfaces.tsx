export type StatusType = 'error' | 'success';

export interface LoginResponseInterface {
    status: StatusType,
    message?: string,
    token?: string,
    email?: string
}

export interface ReviewPostResponseInterface {
    status: StatusType,
    message: string
}

export interface ReviewInterface {
    id?: number,
    userId: number,
    movieId: number,
    comment: string,
    date: date
}

export interface MovieInterface {
    id?: number,
    name: string,
    creator: string,
    published: date,
    affiche: string
}
