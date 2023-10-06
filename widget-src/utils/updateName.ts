import getEmoji from "./getEmoji";
import getParent from "./getParent";

function updateName(
    widgetId: string,
    setName: (name: string) => void,
    setEmoji: (emoji: string) => void,
) {
    const parent = getParent(widgetId);
    const {emoji, name} = getEmoji(parent.name);
    figma.notify(`Updated to ${name} ${emoji}`);
    setEmoji(emoji);
    setName(name);
}

export default updateName;