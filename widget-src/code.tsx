import Actions from "./components/actions/actions";
import Title from "./components/title/title";
import { theme } from "./types/interfaces";
import { lightTheme } from "./types/themes";

const { widget } = figma;
const { AutoLayout, useSyncedState } = widget;

function Widget() {

  const [theme] = useSyncedState<theme>("theme", lightTheme)
  const [unit] = useSyncedState<number>("unit", 8)

  const widgetStyles : AutoLayoutProps = {
    //Properties
    name: "Widget",

    //Layout
    minWidth: unit*36,
    padding: unit*2,
    spacing: {vertical: unit*1.5, horizontal: unit*2},

    //Style
    cornerRadius: unit*1,
    stroke: theme.secondary,
    fill: theme.background,
  }

  return (
    <AutoLayout {...widgetStyles}>
      <Title />
      <Actions />
    </AutoLayout>
  );
}
widget.register(Widget);
