import Badges from "../badges/badges";
import { theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";
import Headline from "./headline";

const { widget } = figma;
const { AutoLayout, Text, useSyncedState } = widget;

function HeadlineWrapper() {
    const [displayTitle] = useSyncedState('display-title', true);
    const [displayStatus] = useSyncedState('display-status', true);
    const [displayDescription] = useSyncedState('display-description', true);
  
    const display = displayTitle || displayStatus || displayDescription
    if (!display) return null
    
    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)

    const style : AutoLayoutProps = {
        //Properties
        name: "Headline wrapper",

        //Layout
        minWidth: unit*32,
        direction: "vertical",
        spacing: unit,
        width: 'fill-parent',
    }

    return (
        <AutoLayout {...style}>
            <Headline />
            <Badges />
        </AutoLayout>
    )
}

export default HeadlineWrapper;