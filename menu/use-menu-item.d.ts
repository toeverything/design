import { type MenuItemProps } from './menu-item.tsx';
interface useMenuItemProps {
    children: MenuItemProps['children'];
    type: MenuItemProps['type'];
    className: MenuItemProps['className'];
    preFix: MenuItemProps['preFix'];
    endFix: MenuItemProps['endFix'];
    checked?: MenuItemProps['checked'];
    selected?: MenuItemProps['selected'];
    block?: MenuItemProps['block'];
}
export declare const useMenuItem: ({ children: propsChildren, type, className: propsClassName, preFix, endFix, checked, selected, block, }: useMenuItemProps) => {
    children: import("react/jsx-runtime").JSX.Element;
    className: string;
};
export {};
