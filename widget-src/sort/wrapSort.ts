function wrapSort(
    children: SceneNode[],
    gap: number,
    width: number,
) {
    var x = gap;
    var y = gap;
    var maxY = 0;

    for (const child of children) {
        if (child.height > maxY) {
            maxY = child.height
        };
        if (x + child.width + gap > width) {
            x = gap;
            y += maxY + gap;
        }
        child.x = x;
        child.y = y;
        x += child.width + gap;
    }
}

export default wrapSort;