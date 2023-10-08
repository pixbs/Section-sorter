import getParent from "./getParent";

function updateProperties(
    widgetId: string,
    setWidth: (width: number) => void,
    unit : number,
) {
    const widget = figma.getNodeById(widgetId); 
    if (!widget) throw new Error('Widget not found');
    const parent = getParent(widgetId);

    switch (parent.type) {
        case "SECTION":
        case "FRAME":
            updateScene(
                widget as WidgetNode,
                parent,
                setWidth,
                unit,
                );
                break;
        case "PAGE":
            updatePage(
                widget as WidgetNode,
                parent as PageNode,
                setWidth,
                unit,
            );
            break;
    }
}

function updateScene(
    widget : WidgetNode,
    parent : SceneNode,
    setWidth: (width: number) => void,
    unit : number,
) {
    setWidth(parent.width - unit*2);
    widget.y = unit;
    widget.x = unit;
}

function updatePage(
    widget : WidgetNode,
    parent : PageNode,
    setWidth: (width: number) => void,
    unit : number,
) {
    setWidth(unit*36);
    widget.y = 0;
    widget.x = - (widget.height + unit*2);
}

export default updateProperties;