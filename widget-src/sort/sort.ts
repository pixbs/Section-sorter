import { direction } from "../types/interfaces";
import horizontalSort from "./horizontalSort";
import verticalSort from "./verticalSort";
import wrapSort from "./wrapSort";

function sort(
    direction: direction,
    widgetId: string,
    allowedTypes: string[],
    unit : number,
    gap: number,
){
    const widget = figma.getNodeById(widgetId) as WidgetNode;
    if (!widget) throw new Error('Widget not found');
    const parent = widget.parent; 
    if (!parent) throw new Error('Parent not found');
    var children = parent.children as SceneNode[];
    if (!children) throw new Error('Children not found');

    children = children.filter(child => allowedTypes.includes(child.type));
    children = children.reverse();

    switch (direction) {
        case "horizontal":
            horizontalSort(children, gap);
            break;
        case "vertical":
            verticalSort(children, gap);
            break;
        case "wrap":
            if(parent.type !== "FRAME" && parent.type !== "SECTION") {
                figma.notify("Wrap sort only works on frames and sections");
                return;
            }
            wrapSort(children, gap, parent.width);
            break;
    }


}

export default sort;