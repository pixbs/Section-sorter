const { widget } = figma
const { useSyncedState, usePropertyMenu, AutoLayout, Text, SVG, useWidgetId, Input} = widget


const arrowLeftSrc = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 16L20.3536 15.6465L17.3536 12.6465L16.6464 13.3536L18.7929 15.5L10.5 15.5L10.5 16.5L18.7929 16.5L16.6464 18.6465L17.3536 19.3536L20.3536 16.3536L20.7071 16Z" fill="black"/>
</svg>
`
const arrowDownSrc = `
<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 20.7071L16.6465 20.3536L13.6465 17.3536L14.3536 16.6464L16.5 18.7929L16.5 10.5H17.5L17.5 18.7929L19.6465 16.6464L20.3536 17.3536L17.3536 20.3536L17 20.7071Z" fill="black" fill-opacity="0.8"/>
</svg>
`
const updateSrc = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.6094 13.6877L21.4347 15.156C21.4266 15.1039 21.4177 15.0519 21.4081 15C21.2566 14.1806 20.92 13.4019 20.4187 12.7254C19.7167 11.778 18.7287 11.0813 17.6005 10.7381C16.4723 10.3949 15.2638 10.4234 14.153 10.8193C13.3599 11.1021 12.6467 11.5614 12.0645 12.1576C11.8314 12.3964 11.6193 12.6571 11.4315 12.9372L11.4317 12.9373L12.2621 13.4941L12.2623 13.4942C12.7995 12.6928 13.5801 12.0854 14.4889 11.7614C15.3976 11.4375 16.3864 11.4142 17.3094 11.695C18.2324 11.9757 19.0408 12.5457 19.6152 13.3209C20.0999 13.975 20.3964 14.746 20.4771 15.5506L18.2772 14.084L17.7225 14.916L20.7225 16.916L21.1039 17.1703L21.3902 16.8123L23.3902 14.3123L22.6094 13.6877ZM10.6094 15.1877L8.60938 17.6877L9.39024 18.3123L10.5649 16.844C10.573 16.8961 10.5819 16.9481 10.5915 17C10.743 17.8194 11.0796 18.5981 11.5809 19.2746C12.283 20.222 13.271 20.9187 14.3991 21.2619C15.5273 21.6051 16.7359 21.5766 17.8466 21.1807C18.6397 20.8979 19.3529 20.4386 19.9351 19.8424C20.1677 19.6041 20.3794 19.344 20.5669 19.0646L20.5681 19.0628L20.5679 19.0627L19.7375 18.5059L19.7373 18.5058L19.7363 18.5074C19.1991 19.308 18.4189 19.9148 17.5108 20.2386C16.602 20.5625 15.6132 20.5858 14.6902 20.305C13.7672 20.0243 12.9589 19.4543 12.3845 18.6791C11.8997 18.025 11.6032 17.254 11.5225 16.4494L13.7225 17.916L14.2772 17.084L11.2772 15.084L10.8957 14.8297L10.6094 15.1877Z" fill="black" fill-opacity="0.8"/>
</svg>
`
const verticalAlignSrc = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 22.5L20.5 20.5L10.5 20.5L10.5 22.5L9.5 22.5L9.5 19.5L21.5 19.5L21.5 22.5L20.5 22.5ZM21.5 12.5L9.5 12.5L9.5 9.5L10.5 9.5L10.5 11.5L20.5 11.5L20.5 9.5L21.5 9.5L21.5 12.5ZM18.5 16.5L18.5 15.5L12.5 15.5L12.5 16.5L18.5 16.5Z" fill="black"/>
</svg>
`

const sectionSrc = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.86667 3H3V6.66667M8.86667 3H14V14H3V6.66667M8.86667 3V6.66667H3" stroke="black" stroke-linejoin="round"/>
</svg>
`
const frameSrc = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.5V3V5H10V3V2.5H11V3V5H13H13.5V6H13H11L11 10H13H13.5V11H13H11V13V13.5H10V13V11H6V13V13.5H5V13V11H3H2.5V10H3H5L5 6H3H2.5V5H3H5V3V2.5H6ZM10 10V6H6L6 10H10Z" fill="black" fill-opacity="0.8"/>
</svg>
`
const groupSrc = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 3H7V4H9V3ZM11.5 12H12V11.5H13V12V13H12H11.5V12ZM4 7V9H3V7H4ZM12 4.5V4H11.5V3H12H13V4V4.5H12ZM12 7V9H13V7H12ZM4 4.5V4H4.5V3H4H3V4V4.5H4ZM3 12V11.5H4V12H4.5V13H4H3V12ZM9 12H7V13H9V12Z" fill="black" fill-opacity="0.8"/>
</svg>
`
const componentSrc = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.74254 4.74819L7.99981 2.50024L10.2571 4.74819L7.99981 6.99614L5.74254 4.74819ZM4.74795 10.2573L2.5 8.00004L4.74795 5.74278L6.9959 8.00004L4.74795 10.2573ZM10.2571 11.2519L7.9998 13.4999L5.74253 11.2519L7.9998 9.00396L10.2571 11.2519ZM13.4996 8.00006L11.2517 5.74279L9.00371 8.00006L11.2517 10.2573L13.4996 8.00006Z" fill="black" fill-opacity="0.8"/>
</svg>
`
const instanceSrc = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.82812 8L2.164 7.66412L7.664 2.16412L7.99988 1.82825L8.33575 2.16412L13.8358 7.66412L14.1716 8L13.8358 8.33587L8.33575 13.8359L7.99988 14.1717L7.664 13.8359L2.164 8.33587L1.82812 8ZM7.99988 12.8282L12.8281 8L7.99988 3.17175L3.17163 8L7.99988 12.8282Z" fill="black" fill-opacity="0.8"/>
</svg>
`
let widgetId : string
let widgetNode : WidgetNode
let parentNode : BaseNode
let parentName : string = "Press update button to change this headline"
let parentWidth : number | "hug-contents" = "hug-contents"
let nudge = "16"

// stats
let sectionAmount = 0
let frameAmount = 0
let groupAmount = 0
let componentAmount = 0
let InstanceAmount = 0

function Widget() {
  widgetId = useWidgetId()

  return (
    <AutoLayout name="body"
    direction="vertical"
    fill="#fff"
    width={parentWidth}
    cornerRadius={8} // let's do in future corner radius as parent corner radious
    padding={16}
    spacing={12}
    >
      {Headline()}
      {Stats()}
      
    </AutoLayout>
  )
}

function Stat(svgSrc: string, label : string, number : number){
  if(number == 0){
    //return
  }
  return (
    <AutoLayout name={label}
    spacing={4}>
      <SVG src={svgSrc}/>
      <Text
      fontSize={11}
      >
        {label}: {number}
      </Text>
    </AutoLayout>
  )
}

function Headline() {
  const [text, setText] = useSyncedState("text", "Hello\nWidgets")

  return (
    <AutoLayout name="headline"
    spacing={8}
    width={"fill-parent"}
    >
      <Text name="headline-text"
      fontSize={26}
      fontWeight={700}
      width={"fill-parent"}
      >
        {parentName}
      </Text>
      <AutoLayout name="direction"
      cornerRadius={2}
      stroke="#E6E6E6"
      >
        <SVG src={arrowLeftSrc} 
          fill="#E6E6E6"
        />
        <SVG src={arrowDownSrc}/>
      </AutoLayout>
      <AutoLayout name="input-wrapper"
      cornerRadius={2}
      stroke="#E6E6E6"
      >
        <SVG name="direction-icon"
        src={verticalAlignSrc}
        />
        <Input
        onTextEditEnd={(e) => setText(e.characters)}
        placeholder="edit me"
        value={nudge}
        width={48}
        fontSize={11}
        verticalAlignText="center"
        height={"fill-parent"}
        />
      </AutoLayout>
      <AutoLayout name="update-button-wrapper"
      cornerRadius={2}
      stroke="#E6E6E6"
      >          
      <SVG name="update-button" 
      src={updateSrc}
      onClick={() => {Update()}}
      />
      </AutoLayout>
    </AutoLayout>
  )
}
function Stats() {
  return (
    <AutoLayout name="stats"
      spacing={16}
      width={"fill-parent"}
      >
        {Stat(sectionSrc,"Section",sectionAmount)}
        {Stat(frameSrc,"Frame",frameAmount)}
        {Stat(groupSrc,"Group",groupAmount)}
        {Stat(componentSrc,"Component",componentAmount)}
        {Stat(instanceSrc,"Instance",InstanceAmount)}
      </AutoLayout>
  )
}

function Update(){
  widgetNode = figma.getNodeById(widgetId) as WidgetNode;
  if (widgetNode == null || widgetNode.parent == null ){
    return
  }
  parentNode = widgetNode.parent
  parentName = parentNode.name
  parentWidth = 475

  //optimize that in future
  if(parentNode.type === "PAGE" || parentNode.type === "SECTION" || parentNode.type === "FRAME"){
    sectionAmount = parentNode.findChildren(n => n.type === "SECTION").length
    frameAmount = parentNode.findChildren(n => n.type === "FRAME").length
    groupAmount = parentNode.findChildren(n => n.type === "GROUP").length
    componentAmount = parentNode.findChildren(n => n.type === "COMPONENT").length
    InstanceAmount = parentNode.findChildren(n => n.type === "INSTANCE").length
  }

  if(parentNode.type != "SECTION" && parentNode.type != "FRAME"){
    return
  }
  parentWidth = parentNode.width - 16
  widgetNode.x = 8
  widgetNode.y = 8
  

}

function Sort(node_array : SceneNode[], nudge: number){
  let local_x = 0
  for(const node of node_array){
    node.x = local_x
    node.y = 0

    local_x += node.width + nudge
  }
}

widget.register(Widget)
