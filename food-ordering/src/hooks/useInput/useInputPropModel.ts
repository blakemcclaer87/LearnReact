export default interface IUseInputPropModel{
    validateFunction: (value: string) => boolean;
    onlyValidateOnTouch?: boolean;
}