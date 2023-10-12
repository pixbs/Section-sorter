import { direction } from "../types/interfaces";
import horizontalSort from "./horizontalSort";
import verticalSort from "./verticalSort";
import wrapSort from "./wrapSort";

function sort(
    parent: BaseNode,
    children: SceneNode[],
    direction: direction,
    gap: number,
){
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