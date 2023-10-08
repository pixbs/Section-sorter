import Emoji from "./emoji";
import HeadlineWrapper from "./headlineWrapper";

const { widget } = figma;
const { useSyncedState } = widget;

function Title() {
    return (
        <>
            <Emoji />
            <HeadlineWrapper />
        </>
    )
}

export default Title;