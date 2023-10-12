function verticalSort(
    children : SceneNode[],
    gap: number,
){
    const x = 0;
    var y = 0;

    for (const child of children) {
        child.x = x;
        child.y = y;
        y += child.height + gap;
    }
}

export default verticalSort;