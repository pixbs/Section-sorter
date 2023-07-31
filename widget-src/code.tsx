const { widget } = figma
const { useSyncedState, usePropertyMenu, AutoLayout, Text, SVG, useWidgetId, Input} = widget

function Widget(){
  

  
  /////////// Variables ///////////
  const [nudgeNumber, setNudgeNumber] = useSyncedState("nudgeNumber", 16)
  const [theme, setTheme] = useSyncedState("theme", "Light")
  const [selectedSize, setSelectedSize] = useSyncedState("selectedSize", "small")
  const [colorPrimary, setColorPrimary] = useSyncedState("colorPrimary", "#333")
  const [colorSecondary, setColorSecondary] = useSyncedState("colorSecondary", "#E6E6E6")
  const [colorBackground, setColorBackground] = useSyncedState("colorBackground", "#FFF")
  const [colorPrimarySrc, setColorPrimarySrc] = useSyncedState("colorPrimarySrc", `"#333"`)
  const [sortDirection, setSortDirection] = useSyncedState("sortDirection", "Vertical")
  const [showControls, setShowControls] = useSyncedState("showControls", false)
  const [rem,setRem] = useSyncedState("rem", 16)
  const bodyPadding = {true: 0, false: rem}

  const widgetId = useWidgetId()

  /////////// Icons ///////////
  const arrowLeftSrc = `
  <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="m20.707 16-.353-.354-3-3-.708.708 2.147 2.146H10.5v1h8.293l-2.147 2.146.708.708 3-3 .353-.354Z" fill=${colorPrimarySrc}/>
  </svg>`
  
  const arrowDownSrc = `
  <svg width="33" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="m17 20.707-.354-.353-3-3 .708-.708 2.146 2.147V10.5h1v8.293l2.146-2.147.708.708-3 3-.354.353Z" fill=${colorPrimarySrc}/>
  </svg>
  `
  const updateSrc = `
  <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="m22.61 13.688-1.175 1.468a5.52 5.52 0 0 0-1.016-2.43 5.5 5.5 0 0 0-8.988.211l.831.557a4.5 4.5 0 0 1 8.215 2.057l-2.2-1.467-.555.832 3 2 .382.254.286-.358 2-2.5-.78-.624Zm-12 1.5-2 2.5.78.624 1.175-1.468a5.52 5.52 0 0 0 1.016 2.43 5.5 5.5 0 0 0 8.986-.21l.001-.001-.83-.557-.002.001a4.5 4.5 0 0 1-8.213-2.058l2.2 1.467.554-.832-3-2-.381-.254-.287.358Z" fill=${colorPrimarySrc}/>
  </svg>
  `
  const verticalAlignSrc = `
  <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.5 22.5v-2h-10v2h-1v-3h12v3h-1Zm1-10h-12v-3h1v2h10v-2h1v3Zm-3 4v-1h-6v1h6Z" fill=${colorPrimarySrc}/>
  </svg>
  `
  const sectionSrc = `
  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.867 3H3v3.667M8.867 3H14v11H3V6.667M8.867 3v3.667H3" stroke=${colorPrimarySrc} stroke-linejoin="round"/>
  </svg>
  `
  const frameSrc = `
  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.5V5h4V2.5h1V5h2.5v1H11v4h2.5v1H11v2.5h-1V11H6v2.5H5V11H2.5v-1H5V6H2.5V5H5V2.5h1Zm4 7.5V6H6v4h4Z" fill=${colorPrimarySrc}/>
  </svg>
  `
  const groupSrc = `
  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9 3H7v1h2V3Zm2.5 9h.5v-.5h1V13h-1.5v-1ZM4 7v2H3V7h1Zm8-2.5V4h-.5V3H13v1.5h-1ZM12 7v2h1V7h-1ZM4 4.5V4h.5V3H3v1.5h1ZM3 12v-.5h1v.5h.5v1H3v-1Zm6 0H7v1h2v-1Z" fill=${colorPrimarySrc}/>
  </svg>
  `
  const componentSrc = `
  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.743 4.748 8 2.5l2.257 2.248L8 6.996 5.743 4.748Zm-.995 5.51L2.5 8l2.248-2.257L6.996 8l-2.248 2.257Zm5.51.994L8 13.5l-2.257-2.248L8 9.004l2.257 2.248ZM13.5 8l-2.248-2.257L9.004 8l2.248 2.257L13.5 8Z" fill=${colorPrimarySrc}/>
  </svg>
  `
  const instanceSrc = `
  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="m1.828 8 .336-.336 5.5-5.5L8 1.828l.336.336 5.5 5.5.336.336-.336.336-5.5 5.5-.336.336-.336-.336-5.5-5.5L1.828 8ZM8 12.828 12.828 8 8 3.172 3.172 8 8 12.828Z" fill=${colorPrimarySrc}/>
  </svg>
  `

  const hideSrc = {
    true: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
    <path fill="#fff" fill-opacity=".8" fill-rule="evenodd" d="M13.5 7.8A8 8 0 0 0 15 6h-1.2A7 7 0 0 1 2.3 6H1a8 8 0 0 0 1.4 1.8L.9 9.4l.7.7 1.7-1.7a8 8 0 0 0 2.3 1.2L5 12l1 .2.6-2.2a8 8 0 0 0 2.8 0L10 12l1-.2-.6-2.3a8 8 0 0 0 2.3-1.2l1.7 1.7.7-.7-1.6-1.6Z" clip-rule="evenodd"/>
    </svg>
    `,
    false: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
    <path fill="#fff" fill-rule="evenodd" d="M8 11a6.5 6.5 0 0 1-5.5-3 6.5 6.5 0 0 1 11 0A6.5 6.5 0 0 1 8 11Zm0-7c2.9 0 5.4 1.6 6.6 4A7.5 7.5 0 0 1 1.4 8C2.6 5.6 5 4 8 4Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clip-rule="evenodd"/>
    </svg>
    `
  }
  
  /////////// Controls ///////////
  function Controls(){
    return(
      <AutoLayout name="controls"
      spacing={rem/2}
      >
        <AutoLayout name="wrapper"
          cornerRadius={rem/8}
          stroke={colorSecondary}
          hidden={showControls}
        >
          <SVG src={arrowLeftSrc}
            fill={getDirectionColor("Horizontal")}
            tooltip="Sort horizontally"
            onClick={() => {setSortDirection("Horizontal")}}
            width={rem*2}
            height={rem*2}
            />
          <SVG src={arrowDownSrc}
            fill={getDirectionColor("Vertical")}
            tooltip="Sort vertically"
            onClick={() => {setSortDirection("Vertical")}}
            width={rem*2}
            height={rem*2}
            />
        </AutoLayout>
        <AutoLayout name="wrapper"
          cornerRadius={rem/8}
          stroke={colorSecondary}
          hidden={showControls}
          tooltip={sortDirection + " gap between items"}
        >          
          <SVG src={verticalAlignSrc}
          rotation={getDirectionRotation()}
          width={rem*2}
          height={rem*2}
          />
          <Input
            value={String(nudgeNumber)}
            width={rem*3}
            fill={colorPrimary}
            fontSize={rem/1.3}
            verticalAlignText="center"
            height="fill-parent"
            onTextEditEnd={(e) => {
              let output = Number(e.characters)
              if (output >= 0) {
                setNudgeNumber(parseInt(e.characters))
              }
            }}
          />
        </AutoLayout>
        <AutoLayout name="wrapper"
          cornerRadius={rem/8}
          stroke={colorSecondary}
          tooltip="Update"
          onClick={() => {
            sort()
          }}
        >
          <SVG src={updateSrc}
          width={rem*2}
          height={rem*2}
          />
        </AutoLayout>
      </AutoLayout>
    )
  }
  ////////// Property menu ///////////
  const themeOptions = [{option: "Light", label: "Light"}, {option: "Dark", label: "Dark"}]
  const sizeOptions = [{option: "small", label: "Small"}, {option: "medium", label: "Medium"}, {option: "large", label: "Large"}]
  const controlsTooltips = {true: "Show controls", false: "Hide controls"}
  usePropertyMenu(
    [
      {
        itemType: "dropdown",
        propertyName: "size",
        tooltip: 'Select size',
        selectedOption: selectedSize,
        options: sizeOptions
      },
      {
        itemType: "dropdown",
        propertyName: 'theme',
        tooltip: 'Select theme',
        selectedOption: theme,
        options: themeOptions
      },
      {
        itemType: "separator"
      },
      {
        itemType: "toggle",
        propertyName: "controls",
        icon: hideSrc[showControls as unknown as keyof typeof hideSrc],
        tooltip: controlsTooltips[showControls as unknown as keyof typeof controlsTooltips],
        isToggled: showControls,
      }
    ],
    ({propertyName, propertyValue}) => {
      if (propertyName === "theme") {
        if(propertyValue === "Light"){
          setColorPrimary("#333333")
          setColorSecondary("#E6E6E6")
          setColorBackground("#FFFFFF")
          setColorPrimarySrc(`"#333"`)
        }
        if(propertyValue === "Dark"){
          setColorPrimary("#FFFFFF")
          setColorSecondary("#535353")
          setColorBackground("#404040")
          setColorPrimarySrc(`"#FFF"`)
        }
        setTheme(propertyValue!)
      }
      else if (propertyName === "controls"){
        setShowControls(!showControls)
      }
      else if (propertyName === "size" && typeof propertyValue === "string"){
        setSelectedSize(propertyValue)
        switch(propertyValue){
          case 'small':
            setRem(16)
            break
          case 'medium':
            setRem(32)
            break
          case 'large':
            setRem(48)
            break
        }
      }
    }
  )

  ////////// Sort Direction ///////////

  function getDirectionColor(direction: "Vertical" | "Horizontal") {
    if(direction != sortDirection){
      return colorBackground
    }
    return colorSecondary
  }

  function getDirectionRotation() {
    if(sortDirection === "Horizontal"){
      return 90
    }
    return 0
  }

  ////////// Return ///////////
  return(
    <AutoLayout name="body"
      fill={colorBackground}
      stroke={colorSecondary}
      spacing={rem}
      padding={bodyPadding[showControls as unknown as keyof typeof bodyPadding]}
      cornerRadius={rem/2}
    >
      {Controls()}
    </AutoLayout>
    )
  ////////// Sort ///////////
  function sort() {
    var widgetNode = figma.getNodeById(widgetId) as WidgetNode;
    var parentNode = widgetNode.parent
    if (widgetNode == null || parentNode == null ){
      return
    }

    widgetNode.x = nudgeNumber ; widgetNode.y = nudgeNumber
    const children = parentNode.findChildren(n => n.type === "FRAME" || n.type === "GROUP" || n.type === "SECTION" || n.type === "STICKY" || n.type === "COMPONENT" || n.type === "COMPONENT_SET").reverse()
    let offsetY = widgetNode.height + (nudgeNumber*2)
    let x = nudgeNumber
    let y = offsetY
    let maxX = widgetNode.width + widgetNode.x
    let maxY = widgetNode.height + widgetNode.y

    for(const child of children){
      child.x = x
      child.y = y
      switch (sortDirection) {
        case "Horizontal":
            x += child.width + nudgeNumber
            break
          case "Vertical":
            y += child.height + nudgeNumber
            break
          }
          const totalWidth = child.width + child.x
          if (totalWidth > maxX) {
            maxX = totalWidth
          }
          const totalHeight = child.height + child.y
          if (totalHeight > maxY) {
            maxY = totalHeight
          } 

    }
    // After sorting
    if(parentNode.type === "SECTION" || parentNode.type === "FRAME"){
      parentNode.resizeWithoutConstraints(maxX + nudgeNumber,maxY + nudgeNumber)
    }
  }
}



widget.register(Widget)
  