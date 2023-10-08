import getEmoji from "./getEmoji";
import getParent from "./getParent";

function updateName(
    widgetId: string,
    setName: (name: string) => void,
    setEmojiName: (name: string) => void,
    setEmoji: (emoji: string) => void,
) {
    const parent = getParent(widgetId);
    const {emoji, name} = getEmoji(parent.name);
    setEmoji(emoji);
    setEmojiName(name);
    setName(parent.name);
}

export default updateName;