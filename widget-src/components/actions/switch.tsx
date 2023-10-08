import { DownIcon, LeftIcon, WrapIcon } from "../icons/icons";
import { direction, theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";
import SwitchButton from "./switchButton";

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

function Switch() {
    const [display] = useSyncedState<boolean>("display-actions", true)
    if (!display) return null

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)
    const [direction, setDirection] = useSyncedState<direction>("direction", "horizontal")

    const style : AutoLayoutProps = {
        //Properties
        name: "Switch",

        //Style
        cornerRadius: unit*0.5,
        stroke: theme.secondary,
        strokeWidth: unit*0.125,
        fill: theme.background,
    }

    const handleClick = (direction : direction) => {
        setDirection(direction)
    }

    const buttons = [
        { 
            active : direction === "horizontal",
            children : <LeftIcon />,
            tooltip : "Horizontal sort",
            onClick : () => handleClick("horizontal")
        },
        { 
            active : direction === "vertical",
            children : <DownIcon />,
            tooltip : "Vertical sort",
            onClick : () => handleClick("vertical")
        },
        { 
            active : direction === "wrap",
            children : <WrapIcon />,
            tooltip : "Wrap",
            onClick : () => handleClick("wrap")
        },
    ]
      
      return (
        <AutoLayout {...style}>
            {buttons.map((button, index) => (
                <SwitchButton key={index} {...button} />
            ))}
        </AutoLayout>
      )
}

export default Switch;