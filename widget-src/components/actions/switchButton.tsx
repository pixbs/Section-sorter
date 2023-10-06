import { theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";

const { widget } = figma;
const { AutoLayout, Text, useSyncedState, useWidgetNodeId } = widget;

interface switchButtonProps {
    active: boolean,
    children: FigmaDeclarativeNode,
    tooltip: string,
    onClick: () => void,
}

function SwitchButton({active, children, tooltip,onClick}: switchButtonProps) {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)

    const hoverStyle : AutoLayoutProps = {
        //Style
        opacity: 0.5,
    }

    
    const style : AutoLayoutProps = {
        //Properties
        name: "Switch button",
        
        //Style
        fill: theme.background,
        
        //Actions
        hoverStyle: hoverStyle,
        tooltip: tooltip,
        onClick: onClick,
    }
    
    const activeStyle : AutoLayoutProps = {
        ...style,

        //Style
        fill: theme.secondary,
    }

    return (
        <AutoLayout {...(active ? activeStyle : style)}>
            {children}
        </AutoLayout>
    )
}

export default SwitchButton;