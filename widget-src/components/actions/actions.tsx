import Gap from "./gap";
import Switch from "./switch";
import Update from "./update";

const { widget } = figma;
const { AutoLayout } = widget;

function Actions() {
    return (
        <AutoLayout>
            <Switch />
            <Gap />
            <Update />
        </AutoLayout>
    )
}

export default Actions;