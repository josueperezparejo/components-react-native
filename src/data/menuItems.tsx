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
    {
      name: 'PullToRefresh',
      icon: 'refresh',
      component: 'PullToRefresh'
    },
    {
      name: 'SectionListScreen',
      icon: 'format-list-bulleted',
      component: 'SectionListScreen'
    },
    {
      name: 'ModalScreen',
      icon: 'content-copy',
      component: 'ModalScreen'
    },
    {
      name: 'InfiniteScrollScreen01',
      icon: 'mouse',
      component: 'InfiniteScrollScreen01'
    },
    {
      name: 'InfiniteScrollScreen02',
      icon: 'cached',
      component: 'InfiniteScrollScreen02'
    },
  ]