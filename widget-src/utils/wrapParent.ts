function wrapParent(
    widgetId : string,
    allowedTypes : string[],
    gap : number,
) {
    const widget = figma.getNodeById(widgetId) as WidgetNode;
    if (!widget) throw new Error('Widget not found');
    const parent = widget.parent; 
    if (!parent) throw new Error('Parent not found');
    var children = parent.children as SceneNode[];
    if (!children) throw new Error('Children not found');

    if (parent.type !== "FRAME" && parent.type !== "SECTION") return;
    
    children = children.filter(child => allowedTypes.includes(child.type));
    children = children.reverse();

    var maxX = 0
    var maxY = 0

    for (const child of children) {
        if (child.width + gap > maxX) {
            maxX = child.width + gap
        };
        if (child.height + gap > maxY) {
            maxY = child.height + gap
        };
    }

    parent.resizeWithoutConstraints(maxX, maxY);

}

export default wrapParent;