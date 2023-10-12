import { direction } from "../types/interfaces";

function wrapParentWidth(
    parent: BaseNode,
    children: SceneNode[],
    gap: number,
) {
    if(children.length <= 0) return;
    if (parent.type !== "SECTION" && parent.type !== "FRAME") return;
    const x = Math.max(...children.map(child => child.x + child.width + gap*2));

    parent.resizeWithoutConstraints(x, parent.height);
}

export default wrapParentWidth;