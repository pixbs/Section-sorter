import Actions from "./components/actions/actions";
import propertyMenu from "./components/other/propertyMenu";
import Title from "./components/title/title";
import { theme } from "./types/interfaces";
import { lightTheme } from "./types/themes";

const { widget } = figma;
const { AutoLayout, useSyncedState, useEffect, useWidgetNodeId } = widget;

function Widget() {

  const [theme] = useSyncedState<theme>("theme", lightTheme)
  const [unit] = useSyncedState<number>("unit", 8)
  const [width] = useSyncedState<number>("width", unit*36)
  const [,] = useSyncedState<string>("widgetId", useWidgetNodeId())

  const [displayTitle] = useSyncedState('display-title', true);
  const [displayStatus] = useSyncedState('display-status', true);
  const [displayDescription] = useSyncedState('display-description', true);
  const [displayActions] = useSyncedState('display-actions', true);
  const [displayEmoji] = useSyncedState('display-emoji', true);

  const display = displayTitle || displayStatus || displayDescription
  const displayPadding = display || displayActions || displayEmoji

  propertyMenu()

  const style : AutoLayoutProps = {
    //Properties
    name: "Widget",

    //Layout
    width: display ? width : 'hug-contents',
    wrap: true,
    padding: displayPadding ? unit*2 : 0,
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
