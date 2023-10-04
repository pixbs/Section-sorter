import { theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";

const { widget } = figma;
const { Text, useSyncedState } = widget;

function Emoji() {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)

    const style : TextProps = {
        //Properties
        name: "Emoji",

        //Typography
        fill: theme.primary,
        fontSize: unit*5,
    }

    return (
            <Text {...style}>
                🔬
            </Text>
    )
}

export default Emoji;