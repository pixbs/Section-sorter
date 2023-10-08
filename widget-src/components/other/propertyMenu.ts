import { allowedTypes } from "../../types/interfaces";
import { darkTheme, lightTheme } from "../../types/themes";
import updateName from "../../utils/updateName";
import updateProperties from "../../utils/updateProperties";

const { widget } = figma;
const { usePropertyMenu, useSyncedState } = widget;

function propertyMenu() {

    const [displayTitle, setDisplayTitle] = useSyncedState('display-title', true);
    const [displayActions, setDisplayActions] = useSyncedState('display-actions', true);
    const [displayStatus, setDisplayStatus] = useSyncedState('display-status', true);
    const [displayDescription, setDisplayDescription] = useSyncedState('display-description', true);
    const [displayEmoji, setDisplayEmoji] = useSyncedState('display-emoji', true);

    const [sortTypes, setSortTypes] = useSyncedState<allowedTypes>('sort-types', {
        FRAME: true,
        SECTION: true,
        COMPONENT: true,
        INSTANCE: false,
        GROUP: false,
    });
    const sortTypesNum = Object.keys(sortTypes).filter((key) => sortTypes[key as keyof typeof sortTypes]).length;

    const [widgetId] = useSyncedState<string>("widgetId", "")
    const [,setWidth] = useSyncedState<number>("width", 0)

    const [theme, setTheme] = useSyncedState('theme', lightTheme);
    const [themeName, setThemeName] = useSyncedState('theme-name', 'light');

    const [unit, setUnit] = useSyncedState('unit', 8);
    const [unitName, setUnitName] = useSyncedState('unit-name', 'Small');

    const themes = {
        light: lightTheme,
        dark: darkTheme,
    }

    const sizes = {
        small: 8,
        medium: 16,
        large: 24,
        extraLarge: 32,
    }

    const show = [displayTitle, displayActions, displayStatus, displayDescription, displayEmoji]
    const showNum = show.filter(Boolean).length;

    const displayOptions : WidgetPropertyMenuDropdownOption[] = [
        {
            option: showNum > 2 ? 'none' : 'all',
            label: showNum > 2 ? '❌ Select none' : '✅ Select all',
        },{
            option: 'actions',
            label: `${displayActions ? '✅':'❌'} Actions`,
        },{
            option: 'title',
            label:  `${displayTitle ? '✅':'❌'} Title`,
        },{
            option: 'emoji',
            label: ` ${displayEmoji ? '✅':'❌'} Emojis`,
        },{
            option: 'status',
            label: ` ${displayStatus ? '✅':'❌'} Status`,
        },{
            option: 'description',
            label: ` ${displayDescription ? '✅':'❌'} Description`,
        }
    ]

    const sortOptions : WidgetPropertyMenuDropdownOption[] = [
        {
            option: sortTypesNum > 3 ? 'none' : 'all',
            label: sortTypesNum > 3 ? '❌ Select none' : '✅ Select all',
        },{
            option: 'FRAME',
            label: `${sortTypes.FRAME ? '✅':'❌'} Frame`,
        },{
            option: 'SECTION',
            label: `${sortTypes.SECTION ? '✅':'❌'} Section`,
        },{
            option: 'COMPONENT',
            label: `${sortTypes.COMPONENT ? '✅':'❌'} Component`,
        },{
            option: 'INSTANCE',
            label: `${sortTypes.INSTANCE ? '✅':'❌'} Instance`,
        },{
            option: 'GROUP',
            label: `${sortTypes.GROUP ? '✅':'❌'} Group`,
        }
    ]

    const themeOptions : WidgetPropertyMenuDropdownOption[] = [
        {
            option: 'light',
            label: 'Light',
        },{
            option: 'dark',
            label: 'Dark',
        }
    ]

    const sizeOptions : WidgetPropertyMenuDropdownOption[] = [
        {
            option: 'small',
            label: 'Small',
        },{
            option: 'medium',
            label: 'Medium',
        },{
            option: 'large',
            label: 'Large',
        },{
            option: 'extraLarge',
            label: 'Extra Large',
        }
    ]

    const propertyMenuItems : WidgetPropertyMenuItem[] = [
        {
            itemType: 'dropdown',
            tooltip: 'Display elements of the widget',
            propertyName: 'display',
            options: displayOptions,
            selectedOption: `Display (${showNum})`,
        },{
            itemType: 'dropdown',
            tooltip: 'Sort by type',
            propertyName: 'sort',
            options: sortOptions,
            selectedOption: `Sort (${sortTypesNum})`,
        },{
            itemType: 'separator'
        },{
            itemType: 'dropdown',
            tooltip: 'Change theme',
            propertyName: 'theme',
            options: themeOptions,
            selectedOption: themeName,
        }, {
            itemType: 'dropdown',
            tooltip: 'Change size',
            propertyName: 'size',
            options: sizeOptions,
            selectedOption: unitName,
        }
    ]

    usePropertyMenu(
        propertyMenuItems,
        ({ propertyName, propertyValue }) => {
            if (!propertyValue) return;
            switch (propertyName) {
                case "display":
                    updateDisplay(propertyValue);
                    break;
                case "theme":
                    setTheme(themes[propertyValue as keyof typeof themes]);
                    setThemeName(propertyValue);
                    break;
                case "size":
                    setUnit(sizes[propertyValue as keyof typeof sizes]);
                    setUnitName(propertyValue);
                    updateProperties(widgetId, setWidth, unit)
                    updateProperties(widgetId, setWidth, unit)
                    break;
                case "sort":
                    updateSort(propertyValue);
                    break;
            }
        }
    )

    function updateDisplay(value : string | undefined) {
        switch (value) {
            case "all":
                updateDisplayAll(true);
                break;
            case "none":
                updateDisplayAll(false);
                break;
            case "title":
                setDisplayTitle(!displayTitle);
                break;
            case "actions":
                setDisplayActions(!displayActions);
                break;
            case "status":
                setDisplayStatus(!displayStatus);
                break;
            case "description":
                setDisplayDescription(!displayDescription);
                break;
            case "emoji":
                setDisplayEmoji(!displayEmoji);
                break;
        }
    }

    function updateDisplayAll(value : boolean) {
        setDisplayTitle(value);
        setDisplayActions(value);
        setDisplayStatus(value);
        setDisplayDescription(value);
        setDisplayEmoji(value);
    }

    function updateSort(value : string | undefined){
        switch (value) {
            case "all":
                updateSortAll(true);
                break;
            case "none":
                updateSortAll(false);
                break;
            case "FRAME":
                setSortTypes({...sortTypes, FRAME: !sortTypes.FRAME});
                break;
            case "SECTION":
                setSortTypes({...sortTypes, SECTION: !sortTypes.SECTION});
                break;
            case "COMPONENT":
                setSortTypes({...sortTypes, COMPONENT: !sortTypes.COMPONENT});
                break;
            case "INSTANCE":
                setSortTypes({...sortTypes, INSTANCE: !sortTypes.INSTANCE});
                break;
            case "GROUP":
                setSortTypes({...sortTypes, GROUP: !sortTypes.GROUP});
                break;
        }
    }

    function updateSortAll(value : boolean) {
        setSortTypes({
            FRAME: value,
            SECTION: value,
            COMPONENT: value,
            INSTANCE: value,
            GROUP: value,
        })
    }
}



export default propertyMenu;