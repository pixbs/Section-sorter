import Actions from "./components/actions/actions";
import Title from "./components/title/title";
import { theme } from "./types/interfaces";
import { lightTheme } from "./types/themes";

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

function Widget() {

  const [theme] = useSyncedState<theme>("theme", lightTheme)
  const [unit] = useSyncedState<number>("unit", 8)

  const style : AutoLayoutProps = {
    //Properties
    name: "Widget",

    //Layout
    width: unit*75,
    minWidth: unit*36,
    padding: unit*2,
    spacing: {vertical: unit*1.5, horizontal: unit*2},

    //Style
    cornerRadius: unit*1,
    stroke: theme.secondary,
    strokeWidth: unit*0.125,
    fill: theme.background,
  }

  return (
    <AutoLayout {...style}>
      <Title />
      <Actions />
    </AutoLayout>
  );
}
widget.register(Widget);
