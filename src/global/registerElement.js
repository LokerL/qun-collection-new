import {
  ElAvatar,
  ElCol,
  ElContainer,
  ElDropdown,
  ElHeader,
  ElIcon,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElRadioButton,
  ElRadioGroup,
  ElRow,
  ElScrollbar,
  ElTable,
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
  ElMenu,
  ElMenu.MenuItem,
  ElMenu.MenuItemGroup,
  ElMenu.SubMenu,
  ElDropdown,
  ElDropdown.DropdownItem,
  ElDropdown.DropdownMenu,
  ElTable,
  ElTable.TableColumn,
  ElIcon,
  ElRow,
  ElCol,
  ElAvatar,
  ElRadioGroup,
  ElRadioButton,
];

export default function (app) {
  for (const component of components) {
    app.component(component.name, component);
  }

  for (const name in Icons) {
    app.component(name, Icons[name]);
  }
}
