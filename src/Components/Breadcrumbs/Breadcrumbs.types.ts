export interface BreadcrumbsItemSingle {
    text: string;
    callBack: () => void;
    active?: boolean;
}

export interface BreadcrumbsDividerProperties {
    dividerChar: string;
}

export interface BreadcrumbsProperties {
    items: BreadcrumbsItemSingle[];
    customDivider?: string;
}
