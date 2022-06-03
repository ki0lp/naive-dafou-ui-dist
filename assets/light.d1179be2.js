import{f as w,A as M,T as A,l as R}from"./app.1b3ac386.js";import{w as B}from"./_common.15da0862.js";var _=w({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:v}){function P(o){e.width?o.style.maxWidth=`${o.offsetWidth}px`:o.style.maxHeight=`${o.offsetHeight}px`,o.offsetWidth}function S(o){e.width?o.style.maxWidth="0":o.style.maxHeight="0",o.offsetWidth;const{onLeave:s}=e;s&&s()}function H(o){e.width?o.style.maxWidth="":o.style.maxHeight="";const{onAfterLeave:s}=e;s&&s()}function m(o){if(o.style.transition="none",e.width){const s=o.offsetWidth;o.style.maxWidth="0",o.offsetWidth,o.style.transition="",o.style.maxWidth=`${s}px`}else if(e.reverse)o.style.maxHeight=`${o.offsetHeight}px`,o.offsetHeight,o.style.transition="",o.style.maxHeight="0";else{const s=o.offsetHeight;o.style.maxHeight="0",o.offsetWidth,o.style.transition="",o.style.maxHeight=`${s}px`}o.offsetWidth}function T(o){var s;e.width?o.style.maxWidth="":e.reverse||(o.style.maxHeight=""),(s=e.onAfterEnter)===null||s===void 0||s.call(e)}return()=>{const o=e.group?M:A;return R(o,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:m,onAfterEnter:T,onBeforeLeave:P,onLeave:S,onAfterLeave:H},v)}}}),O={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};const Q=e=>{const{heightTiny:v,heightSmall:P,heightMedium:S,heightLarge:H,borderRadius:m,fontSizeTiny:T,fontSizeSmall:o,fontSizeMedium:s,fontSizeLarge:D,opacityDisabled:G,textColor2:i,textColor3:I,primaryColorHover:t,primaryColorPressed:n,borderColor:F,primaryColor:l,baseColor:r,infoColor:a,infoColorHover:d,infoColorPressed:b,successColor:x,successColorHover:c,successColorPressed:g,warningColor:C,warningColorHover:u,warningColorPressed:p,errorColor:f,errorColorHover:h,errorColorPressed:y,fontWeight:L,buttonColor2:E,buttonColor2Hover:W,buttonColor2Pressed:$,fontWeightStrong:z}=e;return Object.assign(Object.assign({},O),{heightTiny:v,heightSmall:P,heightMedium:S,heightLarge:H,borderRadiusTiny:m,borderRadiusSmall:m,borderRadiusMedium:m,borderRadiusLarge:m,fontSizeTiny:T,fontSizeSmall:o,fontSizeMedium:s,fontSizeLarge:D,opacityDisabled:G,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:E,colorSecondaryHover:W,colorSecondaryPressed:$,colorTertiary:E,colorTertiaryHover:W,colorTertiaryPressed:$,colorQuaternary:"#0000",colorQuaternaryHover:W,colorQuaternaryPressed:$,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:i,textColorTertiary:I,textColorHover:t,textColorPressed:n,textColorFocus:t,textColorDisabled:i,textColorText:i,textColorTextHover:t,textColorTextPressed:n,textColorTextFocus:t,textColorTextDisabled:i,textColorGhost:i,textColorGhostHover:t,textColorGhostPressed:n,textColorGhostFocus:t,textColorGhostDisabled:i,border:`1px solid ${F}`,borderHover:`1px solid ${t}`,borderPressed:`1px solid ${n}`,borderFocus:`1px solid ${t}`,borderDisabled:`1px solid ${F}`,rippleColor:l,colorPrimary:l,colorHoverPrimary:t,colorPressedPrimary:n,colorFocusPrimary:t,colorDisabledPrimary:l,textColorPrimary:r,textColorHoverPrimary:r,textColorPressedPrimary:r,textColorFocusPrimary:r,textColorDisabledPrimary:r,textColorTextPrimary:l,textColorTextHoverPrimary:t,textColorTextPressedPrimary:n,textColorTextFocusPrimary:t,textColorTextDisabledPrimary:i,textColorGhostPrimary:l,textColorGhostHoverPrimary:t,textColorGhostPressedPrimary:n,textColorGhostFocusPrimary:t,textColorGhostDisabledPrimary:l,borderPrimary:`1px solid ${l}`,borderHoverPrimary:`1px solid ${t}`,borderPressedPrimary:`1px solid ${n}`,borderFocusPrimary:`1px solid ${t}`,borderDisabledPrimary:`1px solid ${l}`,rippleColorPrimary:l,colorInfo:a,colorHoverInfo:d,colorPressedInfo:b,colorFocusInfo:d,colorDisabledInfo:a,textColorInfo:r,textColorHoverInfo:r,textColorPressedInfo:r,textColorFocusInfo:r,textColorDisabledInfo:r,textColorTextInfo:a,textColorTextHoverInfo:d,textColorTextPressedInfo:b,textColorTextFocusInfo:d,textColorTextDisabledInfo:i,textColorGhostInfo:a,textColorGhostHoverInfo:d,textColorGhostPressedInfo:b,textColorGhostFocusInfo:d,textColorGhostDisabledInfo:a,borderInfo:`1px solid ${a}`,borderHoverInfo:`1px solid ${d}`,borderPressedInfo:`1px solid ${b}`,borderFocusInfo:`1px solid ${d}`,borderDisabledInfo:`1px solid ${a}`,rippleColorInfo:a,colorSuccess:x,colorHoverSuccess:c,colorPressedSuccess:g,colorFocusSuccess:c,colorDisabledSuccess:x,textColorSuccess:r,textColorHoverSuccess:r,textColorPressedSuccess:r,textColorFocusSuccess:r,textColorDisabledSuccess:r,textColorTextSuccess:x,textColorTextHoverSuccess:c,textColorTextPressedSuccess:g,textColorTextFocusSuccess:c,textColorTextDisabledSuccess:i,textColorGhostSuccess:x,textColorGhostHoverSuccess:c,textColorGhostPressedSuccess:g,textColorGhostFocusSuccess:c,textColorGhostDisabledSuccess:x,borderSuccess:`1px solid ${x}`,borderHoverSuccess:`1px solid ${c}`,borderPressedSuccess:`1px solid ${g}`,borderFocusSuccess:`1px solid ${c}`,borderDisabledSuccess:`1px solid ${x}`,rippleColorSuccess:x,colorWarning:C,colorHoverWarning:u,colorPressedWarning:p,colorFocusWarning:u,colorDisabledWarning:C,textColorWarning:r,textColorHoverWarning:r,textColorPressedWarning:r,textColorFocusWarning:r,textColorDisabledWarning:r,textColorTextWarning:C,textColorTextHoverWarning:u,textColorTextPressedWarning:p,textColorTextFocusWarning:u,textColorTextDisabledWarning:i,textColorGhostWarning:C,textColorGhostHoverWarning:u,textColorGhostPressedWarning:p,textColorGhostFocusWarning:u,textColorGhostDisabledWarning:C,borderWarning:`1px solid ${C}`,borderHoverWarning:`1px solid ${u}`,borderPressedWarning:`1px solid ${p}`,borderFocusWarning:`1px solid ${u}`,borderDisabledWarning:`1px solid ${C}`,rippleColorWarning:C,colorError:f,colorHoverError:h,colorPressedError:y,colorFocusError:h,colorDisabledError:f,textColorError:r,textColorHoverError:r,textColorPressedError:r,textColorFocusError:r,textColorDisabledError:r,textColorTextError:f,textColorTextHoverError:h,textColorTextPressedError:y,textColorTextFocusError:h,textColorTextDisabledError:i,textColorGhostError:f,textColorGhostHoverError:h,textColorGhostPressedError:y,textColorGhostFocusError:h,textColorGhostDisabledError:f,borderError:`1px solid ${f}`,borderHoverError:`1px solid ${h}`,borderPressedError:`1px solid ${y}`,borderFocusError:`1px solid ${h}`,borderDisabledError:`1px solid ${f}`,rippleColorError:f,waveOpacity:"0.6",fontWeight:L,fontWeightStrong:z})},j={name:"Button",common:B,self:Q};var k=j;export{_ as N,k as b,Q as s};
