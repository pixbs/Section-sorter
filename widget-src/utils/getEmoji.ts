function getEmoji(name: string) {
    const emojiRegex = /^\s*(\p{Emoji}(\s*\p{Emoji}){0,3})?/u
    const nameRegex = /^(\s*\p{Emoji}\s*){1,4}/u
    const emoji = name.match(emojiRegex)
    
    if (!emoji || emoji[1] === undefined) return {
        emoji: '',
        name
    }
    return {
        emoji: emoji[1],
        name: name.replace(nameRegex, '')
    }
}

export default getEmoji;