import { type MenuItemProps } from './menu-item.tsx';
interface useMenuItemProps {
    children: MenuItemProps['children'];
    type: MenuItemProps['type'];
    className: MenuItemProps['className'];
    preFix: MenuItemProps['preFix'];
    endFix: MenuItemProps['endFix'];
}
export declare const useMenuItem: ({ children: propsChildren, type, className: propsClassName, preFix, endFix, }: useMenuItemProps) => {
    children: import("react/jsx-runtime").JSX.Element;
    className: string;
};
export {};
