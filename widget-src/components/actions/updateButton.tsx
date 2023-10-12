import { UpdateIcon } from "../icons/icons";
import { allowedTypes, direction, theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";
import updateName from "../../utils/updateName";
import update from "../../utils/update";

const { widget } = figma;
const { AutoLayout, useSyncedState, useEffect } = widget;

function UpdateButton() {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)
    const [gap] = useSyncedState<number>("gap", 0)

    const [widgetId] = useSyncedState<string>("widgetId", "")
    const [,setEmojiName] = useSyncedState<string>("emoji-name", "")
    const [,setName] = useSyncedState<string>("name", "")
    const [,setEmoji] = useSyncedState<string>("emoji", '')
    const [,setWidth] = useSyncedState<number>("width", 0)

    const [direction] = useSyncedState<direction>("direction", "horizontal")
    const [sortTypes] = useSyncedState<allowedTypes>("sort-types", {} as allowedTypes)
    const allowedTypes = Object.keys(sortTypes).filter((key) => sortTypes[key as keyof typeof sortTypes] === true)

    const hoverStyle : BaseProps  = {
        //Style
        opacity: 0.5,
    }

    const Update = () => {
        updateName(
            widgetId, 
            setName, 
            setEmojiName, 
            setEmoji
        )
        update(
            widgetId, 
            allowedTypes, 
            direction,
            unit, 
            gap,
            setWidth
        )
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