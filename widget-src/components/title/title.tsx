import Emoji from "./emoji";
import Headline from "./headline";

const { widget } = figma;
const { AutoLayout, Text } = widget;

function Title() {
    return (
        <>
            <Emoji />
            <Headline />
        </>
    )
}

export default Title;