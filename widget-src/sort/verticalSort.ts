function verticalSort(
    children : SceneNode[],
    gap: number,
){
    const x = gap;
    var y = gap;

    for (const child of children) {
        child.x = x;
        child.y = y;
        y += child.height + gap;
    }
}

export default verticalSort;