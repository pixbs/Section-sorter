import Gap from "../components/actions/gap";
import getParent from "./getParent";

function updateProperties(
    widget : WidgetNode,
    parent : BaseNode,
    children : Array<SceneNode>,
    setWidth: (width: number) => void,
    unit : number,
    gap : number,
) {

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
                gap,
                children,
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
    const width = Math.max(parent.width - unit*2, unit*36);
    setWidth(width);
    widget.y = unit;
    widget.x = unit;
}

function updatePage(
    widget : WidgetNode,
    parent : PageNode,
    setWidth: (width: number) => void,
    unit : number,
    gap : number,
    children : Array<SceneNode>,
) {
    const maxX = Math.max(...children.map(child => child.x + child.width), unit*36);
    setWidth(maxX);
    widget.y = - (widget.height + gap)
    widget.x = 0
}

export default updateProperties;