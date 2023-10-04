import Gap from "./gap";
import Switch from "./switch";
import Update from "./update";

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

function Actions() {

    const [unit] = useSyncedState<number>("unit", 0)

    const style : AutoLayoutProps = {
        //Properties
        name: "Actions",

        //Layout
        spacing: unit,
    }

    return (
        <AutoLayout {...style}>
            <Switch />
            <Gap />
            <Update />
        </AutoLayout>
    )
}

export default Actions;