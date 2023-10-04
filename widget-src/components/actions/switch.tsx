import { DownIcon, LeftIcon, WrapIcon } from "../icons/icons";
import { theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

function Switch() {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)
    
    const style : AutoLayoutProps = {
        //Properties
        name: "Switch",

        //Style
        cornerRadius: unit*0.5,
        stroke: theme.secondary,
        strokeWidth: unit*0.125,
        fill: theme.background,
    }

    return (
        <AutoLayout {...style}>
            <LeftIcon />
            <DownIcon />
            <WrapIcon />
        </AutoLayout>
    )
}

export default Switch;