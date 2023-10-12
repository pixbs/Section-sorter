import { GapIcon } from "../icons/icons";
import { direction, theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";

const { widget } = figma;
const { AutoLayout, useSyncedState, Input } = widget;

function Gap() {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)
    const [direction] = useSyncedState<direction>("switch", "horizontal")
    const [gap, setGap] = useSyncedState<number>("gap", 16)

    const directionToRotation = {
        horizontal: 0,
        vertical: 90,
        wrap: 0,
    }

    const handleTextEdit = (event : TextEditEvent) => {
        const value = Number(event.characters)
        if (isNaN(value)) {
            figma.notify("Gap must be a number")
            return
        }
        if (value < 0) {
            figma.notify("Gap must be a positive number")
            return
        }
        if (value > 10000) {
            figma.notify("Gap must be less than 10,000")
            return
        }
        setGap(value)
    }

    const hoverStyle : BaseProps  = {
        //Style
        opacity: 0.5,
    }

    const style : AutoLayoutProps = {
        //Properties
        name: "Gap",

        //Style
        cornerRadius: unit*0.5,
        stroke: theme.secondary,
        strokeWidth: unit*0.125,
        fill: theme.background,

        //Action
        hoverStyle: hoverStyle,
    }

    const iconStyle : Partial<SVGProps> = {
        //Layout
        rotation: directionToRotation[direction],
    }

    const inputStyle : InputProps = {
        //Properties
        name: "Gap input",
        value: gap.toString(),

        //Layout
        width: unit*6,
        height: 'fill-parent',
        verticalAlignText: 'center',

        //Typography
        fill: theme.primary,
        fontSize: unit*1.5,

        //Action
        hoverStyle: hoverStyle,
        onTextEditEnd: handleTextEdit,
    }

    return (
        <AutoLayout {...style}>
            <GapIcon {...iconStyle}/>
            <Input {...inputStyle} />
        </AutoLayout>
    )
}

export default Gap;