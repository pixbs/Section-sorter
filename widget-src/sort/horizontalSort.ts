function horizontalSort(
    children : SceneNode[],
    gap: number,
) { 
    var x = 0;
    const y = 0;

    for(const child of children) {
        child.y = y
        child.x = x;
        x += child.width + gap;
    }
}

export default horizontalSort;