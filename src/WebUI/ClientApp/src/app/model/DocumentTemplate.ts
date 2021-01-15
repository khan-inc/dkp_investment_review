export class DocumentTeplate{
    documentTemplateId: number;
    documentTemplateName: string;
    widgets: Widget[];
}

export class Widget{
    widgetId: number;
    widgetName: string;
    parameters: Parameter[];
}

export class Parameter{
    parameterId: number;
    parameterName: string;
    parameterType: ParameterTypes;
    isRequired: boolean;
    parameterVal: string;
}

export enum ParameterTypes{
    string,
    number,
    date,
    file
}