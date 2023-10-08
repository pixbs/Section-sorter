import { theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";
import getParent from "../../utils/getParent";

const { widget } = figma;
const { AutoLayout, Text, useSyncedState } = widget;

function Status() {
    const [display] = useSyncedState<boolean>("display-status", true)
    if (!display) return null

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)
    const [status, setStatus] = useSyncedState<number>("status", 0)
    const [widgetId] = useSyncedState<string>("widgetId", '')

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

    const handleClick = () => {
        setStatus((status+1)%statuses.length)
        
        const parent = getParent(widgetId)
        if (parent?.type === "SECTION") {
            if (status === 1) {
                parent.devStatus = { type: 'READY_FOR_DEV' }
            }
            else {
                parent.devStatus = null
            }
        }
    }

    const hoverStyle : BaseProps  = {
        //Style
        opacity: 0.5,
    }

    const parentStyle : AutoLayoutProps = {
        //Properties
        name: "Status wrapper",

        //Layout
        padding: {horizontal: unit, vertical: 0},

        //Style
        cornerRadius: unit*0.5,
        fill: statuses[status].color,

        //Action
        hoverStyle: hoverStyle,
        tooltip: `Click to change status to ${statuses[(status+1)%statuses.length].name}`,
        onClick: handleClick,
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