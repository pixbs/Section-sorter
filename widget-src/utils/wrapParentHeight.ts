function wrapParentHeight(
    parent: BaseNode,
    children: SceneNode[],
    gap: number,
) {
    if(children.length <= 0) return;
    if (parent.type !== "SECTION" && parent.type !== "FRAME") return;
    var y = Math.max(...children.map(child => child.y + child.height + gap));
    
    parent.resizeWithoutConstraints(parent.width, y);
}

export default wrapParentHeight;