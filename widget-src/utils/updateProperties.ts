import getParent from "./getParent";

function updateProperties(
    widgetId: string,
    setWidth: (width: number) => void,
    unit : number,
) {
    const widget = figma.getNodeById(widgetId) 
    if (!widget) throw new Error('Widget not found');
    const parent = getParent(widgetId);

    switch (parent.type) {
        case "SECTION":
        case "FRAME":
            setWidth(parent.width - unit*2);
            break;
        case "PAGE":
            setWidth(unit*36);
            break;
    }
}

export default updateProperties;