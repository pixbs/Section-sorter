import { theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";

const { widget } = figma;
const { Text, useSyncedState } = widget;

function Emoji() {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)

    const [emoji] = useSyncedState<string>("emoji", '')

    const style : TextProps = {
        //Properties
        name: "Emoji",

        //Typography
        fill: theme.primary,
        fontSize: unit*5,
    }
    
    if (emoji === '') return

    return (
            <Text {...style}>
                {emoji}
            </Text>
    )
}

export default Emoji;