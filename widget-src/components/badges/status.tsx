import { theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";

const { widget } = figma;
const { AutoLayout, Text, useSyncedState } = widget;

function Status() {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)
    const [status] = useSyncedState<number>("status", 0)

    const statuses = [
        {
            name: "To Do", 
            color: theme.colorOrange,
        },
        {
            name: "In Progress", 
            color: theme.colorBlue,
        },
        {
            name: "Ready for Dev", 
            color: theme.colorGreen,
        },
        {
            name: "Archived", 
            color: theme.colorPurple,
        },
        {
            name: "Deprecated",
            color: theme.colorRed,
        }
    ]

    const parentStyle : AutoLayoutProps = {
        //Properties
        name: "Status wrapper",

        //Layout
        padding: {horizontal: unit, vertical: 0},

        //Style
        cornerRadius: unit*0.5,
        fill: statuses[status].color,
    }

    const textStyle : TextProps = {
        //Properties
        name: "Status text",

        //Typography
        fill: theme.primary,
        fontSize: unit*1.5,
        fontWeight: 400,
    }

    return (
        <AutoLayout {...parentStyle}>
            <Text {...textStyle}>
                {statuses[status].name}
            </Text>
        </AutoLayout>
    )
}

export default Status;