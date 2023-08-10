export interface LayoutProps {
    /**
     * @description 宽度
     */
    width?: Number;
    /**
     * @description 高度
     */
    height?: Number;
    /**
     * @description 高度
     */
    children: React.ReactNode;
}
export interface LayoutStyle {
    width?: String;
    height?: String;
}
export declare type NativeLayoutProps = Omit<React.HTMLAttributes<HTMLElement>, 'type'>;
