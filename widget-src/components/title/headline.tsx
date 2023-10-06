import Badges from "../badges/badges";
import { theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";

const { widget } = figma;
const { AutoLayout, Text, useSyncedState } = widget;

function Headline() {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)

    const [name] = useSyncedState<string>("name", "")

    const parentStyle : AutoLayoutProps = {
        //Properties
        name: "Headline wrapper",

        //Layout
        minWidth: unit*32,
        direction: "vertical",
        spacing: unit,
        width: 'fill-parent',
    }

    const headlineStyle : TextProps = {
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
        <AutoLayout {...parentStyle}>
            <Text {...headlineStyle}>
                {name}
            </Text>
            <Badges />
        </AutoLayout>
    )
}

export default Headline;