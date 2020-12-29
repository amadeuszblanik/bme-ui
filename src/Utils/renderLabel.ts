const renderLabel = (content: string, required: boolean): string => content + (required ? '*' : '');

export default renderLabel;
