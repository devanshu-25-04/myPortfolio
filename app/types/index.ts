export interface IModal {
  show: boolean;
  message: string;
  handleClose: React.MouseEventHandler<HTMLSpanElement>;
}
