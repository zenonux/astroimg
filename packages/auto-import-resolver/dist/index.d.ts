export interface AstroimgResolverOptions {
    /**
     * Whether to automatically import the corresponding styles of the components.
     *
     * @default true
     */
    importStyle?: boolean | 'css'
    /** Compatible with Vant 2.x / 3.x */
     | 'less';
    /**
     * Set the referenced module type.
     *
     * @default 'esm'
     */
    module?: 'esm' | 'cjs';
    /**
     * @deprecated Please use `module` option instead.
     */
    ssr?: boolean;
}
export declare function AstroimgResolver(options?: AstroimgResolverOptions): {
    type: "component";
    resolve: (name: string) => {
        name: string;
        from: string;
        sideEffects: string | undefined;
    } | undefined;
};
