export const enum Color {
    RED = "red",
    GREEN = "green",
    YELLOW = "yellow",
    BLUE = "blue",
    PURPLE = "purple",
    CYAN = "cyan"
}

export function getAllColors(): Array<Color> {
    return [
        Color.RED,
        Color.GREEN,
        Color.YELLOW,
        Color.BLUE,
        Color.PURPLE,
        Color.CYAN
    ];
}