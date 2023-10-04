import { GapIcon } from "../icons/icons";
import { theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";

const { widget } = figma;
const { AutoLayout, Text, useSyncedState, Input } = widget;

function Gap() {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)

    const style : AutoLayoutProps = {
        //Properties
        name: "Gap",

        //Style
        cornerRadius: unit*0.5,
        stroke: theme.secondary,
        strokeWidth: unit*0.125,
        fill: theme.background,
    }

    const inputStyle : InputProps = {
        //Properties
        name: "Gap input",
        value: "16",
        placeholder: "Gap",

        //Layout
        width: unit*6,
        height: 'fill-parent',
        verticalAlignText: 'center',

        //Typography
        fill: theme.primary,
        fontSize: unit*1.5,

        //Action
        onTextEditEnd: (e) => {
            e.characters.trim()
        },
    }

    return (
        <AutoLayout {...style}>
            <GapIcon />
            <Input {...inputStyle} />
        </AutoLayout>
    )
}

export default Gap;