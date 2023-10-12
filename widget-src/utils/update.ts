import sort from "../sort/sort";
import { direction } from "../types/interfaces";
import moveChildren from "./moveChildren";
import updateProperties from "./updateProperties";
import wrapParentHeight from "./wrapParentHeight";
import wrapParentWidth from "./wrapParentWidth";

 function update(
    widgetId: string,
    allowedTypes: string[],
    direction: direction,
    unit: number,
    gap: number,
    setWidth: (width: number) => void,
 ){
    const widget = figma.getNodeById(widgetId) as WidgetNode;
    const parent = widget.parent;
    if (parent === null) throw new Error("Parent is null");
    var children = parent.children as SceneNode[];

   if(parent.type === "GROUP") {
      figma.notify("You can't sort in a group");
      return;
   }

   if(direction === "wrap" && parent.type !== "FRAME" && parent.type !== "SECTION") {
      figma.notify("Wrap sort only works on frames and sections");
      return;
   }

    children = children.filter(child => allowedTypes.includes(child.type));

    sort(parent, children, direction, gap)
    wrapParentWidth(parent, children, gap)
    updateProperties(widget, parent, children, setWidth, unit, gap)
    moveChildren(widget, parent, children, gap)
    wrapParentHeight(parent, children, gap)
    
 }
 export default update;