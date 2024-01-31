import { MenuItem } from "../interfaces/interfaces";

export const menuItems:MenuItem[] = [
    {
      name: 'Animation 01',
      icon: 'animation',
      component: 'AnimationScreen01'
    },
    {
      name: 'Animation 02',
      icon: 'motion-photos-on',
      component: 'AnimationScreen02'
    },
    {
      name: 'Switch',
      icon: 'toggle-on',
      component: 'SwitchScreen'
    },
    {
      name: 'Alert',
      icon: 'notifications',
      component: 'AlertScreen'
    },
    {
      name: 'TextInputs',
      icon: 'edit',
      component: 'TextInputsScreen'
    },
  ]