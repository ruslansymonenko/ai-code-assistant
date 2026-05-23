import { StatusBar } from './status-bar';

type Props = {
  onSubmit: (value: string) => void;
  disabled?: boolean;
};

export function InputBar({ onSubmit, disabled }: Props) {
  return (
    <box width="100%" alignItems="center">
      <box border={['left']} borderColor="cyan" width="90%">
        <box
          position="relative"
          justifyContent="center"
          paddingLeft={1}
          paddingRight={2}
          paddingY={1}
          backgroundColor="#1A1A24"
          width="100%"
          gap={2}
        >
          <textarea
            focused={!disabled}
            placeholder={`Ask anything... "Fix a bug in my code"`}
            cursorColor="white"
            textColor="gray"
          />
          <StatusBar />
        </box>
      </box>
    </box>
  );
}
