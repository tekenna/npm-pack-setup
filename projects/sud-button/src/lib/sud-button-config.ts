export interface IProps {
    leftIcon?: string;
    rightIcon?: string;
    leftIconClass?: string;
    rightIconClass?: string;
    label: string;
}
export interface IOptions {
    type: "default" | "primary" | "outline" | "alternate" | "disabled" | "success" | "danger" | "text";
    size: "default" | "extra-small" | "small" | "medium" | "large" | "extra-large";
    class?: string
}
export interface IState {
    loading: boolean | undefined;
    active: boolean | undefined;
}