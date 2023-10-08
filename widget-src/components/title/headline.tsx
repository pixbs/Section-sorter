import { theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";

const { widget } = figma;
const { AutoLayout, Text, useSyncedState } = widget;

function Headline() {
    const [displayTitle] = useSyncedState<boolean>("display-title", true)
    if (!displayTitle) return null

    const [displayEmoji] = useSyncedState<boolean>("display-emoji", false)

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)

    const [emojiName] = useSyncedState<string>("emoji-name", "Press update \nto get started")
    const [name] = useSyncedState<string>("name", "")

    const style : TextProps = {
        //Properties
        name: "Main screens",

        //Layout
        width: 'fill-parent',

        //Typography
        fill: theme.primary,
        fontSize: unit*3.25,
        fontWeight: 700,
    }

    return (
        <Text {...style}>
            {displayEmoji ? emojiName : name}
        </Text>
    )
}

export default Headline;