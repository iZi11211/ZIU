export type Todo = {
  id: string;
  title: string;
  completed: boolean;

  // potrzebne bo używasz w reducerze
  createdAt: Date;
};

export type Action =
  | {
      type: 'ADD';
      payload: {
        title: string;
      };
    }

  | {
      type: 'DELETE';
      payload: {
        id: string;
      };
    }

  | {
      type: 'TOGGLE';
      payload: {
        id: string;
      };
    }

  | {
      type: 'EDIT';
      payload: {
        id: string;
        title: string;
      };
    };