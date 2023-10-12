function wrapSort(
    children: SceneNode[],
    gap: number,
    width: number,
) {
    var x = 0;
    var y = 0;
    var maxY = 0;

    children.forEach(child => {
        if (x + child.width > width) {
            x = 0;
            y += maxY + gap;
            maxY = 0;
        }
        child.x = x;
        child.y = y;
        x += child.width + gap;
        if (child.height > maxY) maxY = child.height;
    });
}

export default wrapSort;