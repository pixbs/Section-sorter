import Badges from "../badges/badges";

const { widget } = figma;
const { AutoLayout, Text } = widget;

function Headline() {
    return (
        <AutoLayout>
            <Text>Headline</Text>
            <Badges />
        </AutoLayout>
    )
}

export default Headline;