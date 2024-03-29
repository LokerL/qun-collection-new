import {
  ElAvatar,
  ElBadge,
  ElButton,
  ElButtonGroup,
  ElCard,
  ElCol,
  ElContainer,
  ElDropdown,
  ElHeader,
  ElIcon,
  ElImage,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElRadioButton,
  ElRadioGroup,
  ElRow,
  ElScrollbar,
  ElSpace,
  ElTable,
  ElTag,
} from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";
import * as Icons from "@element-plus/icons-vue";

const components = [
  ElContainer,
  ElContainer.Header,
  ElContainer.Main,
  ElContainer.Aside,
  ElScrollbar,
  ElDropdown,
  ElDropdown.DropdownItem,
  ElDropdown.DropdownMenu,
  ElIcon,
  ElRow,
  ElCol,
  ElAvatar,
  ElBadge,
  ElSpace,
  ElCard,
  ElImage,
  ElTag,
  ElInput,
  ElButton,
  ElButtonGroup,
  ElLink,
];

export default function (app) {
  for (const component of components) {
    app.component(component.name, component);
  }

  for (const name in Icons) {
    app.component(name, Icons[name]);
  }
}
