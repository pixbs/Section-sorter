const { widget } = figma;

function horizontalSort(widgetId: string) {
    const widget = figma.getNodeById(widgetId);
    if (!widget) throw new Error('Widget not found');
    const parent = widget.parent;
    if (!parent) throw new Error('Parent not found');
    const children = parent.children;
    if (!children) throw new Error('Children not found');
}