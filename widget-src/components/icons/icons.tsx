import { theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";

const { widget } = figma;
const { AutoLayout, SVG, useSyncedState } = widget;

interface IconProps {
    name: string,
    src: string,
}

function Icon({name, src} : IconProps) {

    const [unit] = useSyncedState<number>("unit", 0)

    const style : SVGProps = {
        //Properties
        name: name,
        src: src,

        //Layout
        width: unit*4,
        height: unit*4,
    }

    return <SVG {...style} />
}

export function LeftIcon() {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)

    const src = `
        <svg width="32" height="32" fill="none">
        <path stroke-width="${unit*0.125}" stroke="${theme.primary}" stroke-linecap="round" stroke-linejoin="round" d="M20.667 16h-9.334M17.333 19.333 20.667 16M17.333 12.667 20.667 16"/>
        </svg>
    `

    return <Icon name="Left icon" src={src} />

}

export function DownIcon() {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)

    const src = `
        <svg width="32" height="32" fill="none">
        <path stroke-width="${unit*0.125}" stroke="${theme.primary}" stroke-linecap="round" stroke-linejoin="round" d="M16 20.667v-9.334M19.334 17.333 16 20.667l-3.334-3.334"/>
        </svg>
    `

    return <Icon name="Down icon" src={src} />
}

export function WrapIcon() {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)

    const src = `
        <svg width="32" height="32" fill="none">
        <path stroke-width="${unit*0.125}" stroke="${theme.primary}" stroke-linecap="round" stroke-linejoin="round" d="m13.333 20.667-2-2 2-2"/>
        <path stroke-width="${unit*0.125}" stroke="${theme.primary}" stroke-linecap="round" stroke-linejoin="round" d="M11.333 18.667h6c2.21 0 4-1.642 4-3.667v0c0-2.025-1.79-3.667-4-3.667H12"/>
        </svg>
    `

    return <Icon name="Wrap icon" src={src} />
}

export function GapIcon() {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)

    const src = `
        <svg width="32" height="32" fill="none">
        <path stroke-width="${unit*0.125}" stroke="${theme.primary}" stroke-linecap="round" stroke-linejoin="round" d="M10 10.5h2v11h-2m6-3v-5m6-3h-2v11h2"/>
        </svg>
    `

    return <Icon name="Gap icon" src={src} />
}

export function UpdateIcon() {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)

    const src = `
    <svg width="32" height="32" fill="none">
    <path stroke-width="${unit*0.125}" stroke="${theme.primary}" stroke-linecap="round" stroke-linejoin="round" d="M21.328 16.021a5.31 5.31 0 0 1-1.557 3.75 5.334 5.334 0 0 1-8.453-1.22M10.67 15.913a5.313 5.313 0 0 1 1.559-3.684 5.334 5.334 0 0 1 8.453 1.22"/>
    <path stroke-width="${unit*0.125}" stroke="${theme.primary}" stroke-linecap="round" stroke-linejoin="round" d="M18.635 13.45h2.357v-2.357M13.365 18.55h-2.357v2.357"/>
    </svg>
    `

    return <Icon name="Update icon" src={src} />
}