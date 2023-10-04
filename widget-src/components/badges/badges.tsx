import Description from "./description";
import Status from "./status";

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

function Badges() {

    const [unit] = useSyncedState<number>("unit", 0)

    const style : AutoLayoutProps = {
        //Properties
        name: "Badges wrapper",

        //Layout
        width: 'fill-parent',
        spacing: unit,
        verticalAlignItems: "center",
    }

    return (
        <AutoLayout {...style}>
            <Status />
            <Description />
        </AutoLayout>
    )
}

export default Badges;