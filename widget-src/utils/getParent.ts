function getParent(NodeId : string) {
    const parent = figma.getNodeById(NodeId)?.parent;
    if (!parent) throw new Error('Parent not found');
    return parent;
};

export default getParent;