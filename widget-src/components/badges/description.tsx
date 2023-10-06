import { theme } from "../../types/interfaces";
import { blankTheme } from "../../types/themes";

const { widget } = figma;
const { Input, useSyncedState } = widget;

function Description() {

    const [theme] = useSyncedState<theme>("theme", blankTheme)
    const [unit] = useSyncedState<number>("unit", 0)
    const [text, setText] = useSyncedState<string>("description", "")

    const hoverStyle : BaseProps  = {
        //Style
        opacity: 0.5,
    }

    const style : InputProps = {
        //Properties
        name: "Description input",
        value: text,
        placeholder: "Click here to add a description",

        //Layout
        width: 'fill-parent',

        //Typography
        fill: theme.primary,
        fontSize: unit*1.5,
        fontWeight: 400,

        //Action
        hoverStyle: hoverStyle,
        onTextEditEnd: (event) => {
            setText(event.characters)
        },
    }

    return (
        <Input {...style}/>
    )
}

export default Description;