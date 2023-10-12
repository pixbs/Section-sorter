function moveChildren(
    widget: WidgetNode,
    parent: BaseNode,
    children: Array<SceneNode>,
    gap: number = 0,
) {
    children.forEach(child => {
        const unit = widget.x;
        child.y += gap;
        if(parent?.type === "PAGE") return;
        child.x += gap;
        child.y += widget.height + unit;
    });
}

export default moveChildren;