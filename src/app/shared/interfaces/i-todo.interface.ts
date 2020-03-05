export interface ITodo {
  key: string;
  value: {
    done: boolean;
    value: string;
    createDate: Date;
    change_status?: boolean
  };
}
