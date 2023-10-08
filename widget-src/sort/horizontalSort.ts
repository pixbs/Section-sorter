function horizontalSort(
    children : SceneNode[],
    gap: number,
) { 
    var x = gap;
    const y = gap;

    for(const child of children) {
        child.y = y
        child.x = x;
        x += child.width + gap;
    }
}

export default horizontalSort;