export interface theme {
    // Greyscale
    readonly primary: string
    readonly secondary: string
    readonly background: string
    // Colors
    readonly colorRed: string
    readonly colorOrange: string
    readonly colorGreen: string
    readonly colorBlue: string
    readonly colorPurple: string
}

export type direction = 'horizontal' | 'vertical' | 'wrap'