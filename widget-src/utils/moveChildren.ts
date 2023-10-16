function moveChildren(
    widget: WidgetNode,
    parent: BaseNode,
    children: Array<SceneNode>,
    gap: number = 0,
) {
    if(parent?.type === "PAGE") return;
    children.forEach(child => {
        const unit = widget.x;
        child.x += gap;
        child.y += widget.height + unit + gap;
    });
}

export default moveChildren;