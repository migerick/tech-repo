export interface OutputInput {
    name: string,
    value: string | boolean | undefined
}

export interface ObjectMap {
    [key: string]: any
}

export interface ItemSelect {
    text: string;
    value: string;
}

export interface Step {
    id: number
    name: string
    link: string
    path: string
}

export type DirectionsTooltip = "top" | "right" | "bottom" | "left"
export type ColorTooltip = "dark" | "success" | "warning" | "error"

export interface Response<T> {
    message: string;
    data: T | undefined;
}