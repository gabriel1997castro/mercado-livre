import { UiState } from '../types/ui';
import {
  createContext,
  FunctionComponent,
  memo,
  SetStateAction,
  useContext,
  useState,
  Dispatch,
} from 'react';

type UiStateUpdater = [
  UiState,
  Dispatch<SetStateAction<UiState>>
];

type SetNewUiState = (arg0: UiState) => void;
type UiContextHook = () => [UiState, SetNewUiState];
const initialState: UiState = {
  language: 'es-AR'
};

export const UiContext = createContext<UiStateUpdater | UiState>(
  initialState
);

export const UiContextProvider: FunctionComponent = memo(
  ({ children }) => {
    const StateGetSet = useState(initialState);
    return (
      <UiContext.Provider value={StateGetSet}>
        {children}
      </UiContext.Provider>
    );
  }
);

export const useUiContext: UiContextHook = () => {
  const [state, setState] = useContext(UiContext) as UiStateUpdater;
  const setNewState = (newState: UiState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };
  return [state, setNewState];
};
