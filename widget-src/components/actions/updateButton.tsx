import { UpdateIcon } from "../icons/icons";
import { theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";
import updateName from "../../utils/updateName";
import updateProperties from "../../utils/updateProperties";

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

function UpdateButton() {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)

    const [widgetId] = useSyncedState<string>("widgetId", "")
    const [,setEmojiName] = useSyncedState<string>("emoji-name", "")
    const [,setName] = useSyncedState<string>("name", "")
    const [,setEmoji] = useSyncedState<string>("emoji", '')
    const [,setWidth] = useSyncedState<number>("width", 0)

    

    const hoverStyle : BaseProps  = {
        //Style
        opacity: 0.5,
    }

    const Update = () => {
        updateProperties(widgetId, setWidth, unit)
        updateName(widgetId, setName, setEmojiName, setEmoji)
    }

    const style : AutoLayoutProps = {
        //Properties
        name: "Update",

        //Style
        cornerRadius: unit*0.5,
        stroke: theme.secondary,
        strokeWidth: unit*0.125,
        fill: theme.background,

        //Action
        hoverStyle: hoverStyle,
        onClick: Update,

    }

    return (
        <AutoLayout {...style}>
            <UpdateIcon />
        </AutoLayout>
    )
}

export default UpdateButton;