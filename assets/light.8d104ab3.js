import{E as h,w as C,k as f,r as c}from"./_common.f20a8c7b.js";import{s as S,p as z,t as L}from"./light.e7a12c7c.js";import{e as b}from"./light.4b4fedab.js";import{i as T}from"./light.b6837981.js";var M={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"};const w=r=>{const{borderRadius:t,popoverColor:o,textColor3:e,dividerColor:i,textColor2:n,primaryColorPressed:d,textColorDisabled:p,primaryColor:l,opacityDisabled:a,hoverColor:m,fontSizeSmall:v,fontSizeMedium:g,fontSizeLarge:s,fontSizeHuge:x,heightSmall:I,heightMedium:H,heightLarge:u,heightHuge:A}=r;return Object.assign(Object.assign({},M),{optionFontSizeSmall:v,optionFontSizeMedium:g,optionFontSizeLarge:s,optionFontSizeHuge:x,optionHeightSmall:I,optionHeightMedium:H,optionHeightLarge:u,optionHeightHuge:A,borderRadius:t,color:o,groupHeaderTextColor:e,actionDividerColor:i,optionTextColor:n,optionTextColorPressed:d,optionTextColorDisabled:p,optionTextColorActive:l,optionOpacityDisabled:a,optionCheckColor:l,optionColorPending:m,optionColorActive:m,actionTextColor:n,loadingColor:l})},P=h({name:"InternalSelectMenu",common:C,peers:{Scrollbar:S,Empty:b},self:w});var B=P;function F(r){const{boxShadow2:t}=r;return{menuBoxShadow:t}}const W=h({name:"AutoComplete",common:C,peers:{InternalSelectMenu:B,Input:T},self:F});var N=W;const y=r=>{const{borderRadius:t,avatarColor:o,cardColor:e,fontSize:i,heightTiny:n,heightSmall:d,heightMedium:p,heightLarge:l,heightHuge:a,modalColor:m,popoverColor:v}=r;return{borderRadius:t,fontSize:i,border:`2px solid ${e}`,heightTiny:n,heightSmall:d,heightMedium:p,heightLarge:l,heightHuge:a,color:f(e,o),colorModal:f(m,o),colorPopover:f(v,o)}},$={name:"Avatar",common:C,self:y};var Q=$,U={width:"44px",height:"44px",borderRadius:"22px",iconSize:"26px"},D={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};const O=r=>{const{primaryColor:t,textColor2:o,dividerColor:e,hoverColor:i,popoverColor:n,invertedColor:d,borderRadius:p,fontSizeSmall:l,fontSizeMedium:a,fontSizeLarge:m,fontSizeHuge:v,heightSmall:g,heightMedium:s,heightLarge:x,heightHuge:I,textColor3:H,opacityDisabled:u}=r;return Object.assign(Object.assign({},D),{optionHeightSmall:g,optionHeightMedium:s,optionHeightLarge:x,optionHeightHuge:I,borderRadius:p,fontSizeSmall:l,fontSizeMedium:a,fontSizeLarge:m,fontSizeHuge:v,optionTextColor:o,optionTextColorHover:o,optionTextColorActive:t,optionTextColorChildActive:t,color:n,dividerColor:e,suffixColor:o,prefixColor:o,optionColorHover:i,optionColorActive:c(t,{alpha:.1}),groupHeaderTextColor:H,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:d,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:u})},R=h({name:"Dropdown",common:C,peers:{Popover:z},self:O});var j=R;function V(r,t,o,e){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:r,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:r,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:r,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorCollapsedInverted:r,itemIconColorHorizontalInverted:r,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,arrowColorInverted:r,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,groupTextColorInverted:e}}const k=r=>{const{borderRadius:t,textColor3:o,primaryColor:e,textColor2:i,textColor1:n,fontSize:d,dividerColor:p,hoverColor:l,primaryColorHover:a}=r;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:l,itemColorActive:c(e,{alpha:.1}),itemColorActiveHover:c(e,{alpha:.1}),itemColorActiveCollapsed:c(e,{alpha:.1}),itemTextColor:i,itemTextColorHover:i,itemTextColorActive:e,itemTextColorActiveHover:e,itemTextColorChildActive:e,itemTextColorHorizontal:i,itemTextColorHoverHorizontal:a,itemTextColorActiveHorizontal:e,itemTextColorActiveHoverHorizontal:e,itemTextColorChildActiveHorizontal:e,itemIconColor:n,itemIconColorHover:n,itemIconColorActive:e,itemIconColorActiveHover:e,itemIconColorChildActive:e,itemIconColorCollapsed:n,itemIconColorHorizontal:n,itemIconColorHoverHorizontal:a,itemIconColorActiveHorizontal:e,itemIconColorActiveHoverHorizontal:e,itemIconColorChildActiveHorizontal:e,itemHeight:"42px",arrowColor:i,arrowColorHover:i,arrowColorActive:e,arrowColorActiveHover:e,arrowColorChildActive:e,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:d,dividerColor:p},V("#BBB",e,"#FFF","#AAA"))},E=h({name:"Menu",common:C,peers:{Tooltip:L,Dropdown:j},self:k});var X=E;export{F as a,y as b,U as c,O as d,k as e,N as f,Q as g,j as h,B as i,X as m,w as s};