import Description from "./description";
import Status from "./status";

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

function Badges() {
    const [displayStatus] = useSyncedState<boolean>("display-status", true)
    const [displayDescription] = useSyncedState<boolean>("display-description", true)
    if (!displayStatus && !displayDescription) return null

    const [unit] = useSyncedState<number>("unit", 0)

    const style : AutoLayoutProps = {
        //Properties
        name: "Badges wrapper",

        //Layout
        width: 'fill-parent',
        spacing: unit,
    }

    return (
        <AutoLayout {...style}>
            <Status />
            <Description />
        </AutoLayout>
    )
}

export default Badges;